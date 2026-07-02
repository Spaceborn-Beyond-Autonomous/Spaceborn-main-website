import { NextRequest } from 'next/server';

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const cache = new Map<string, RateLimitRecord>();

export interface RateLimitOptions {
  limit: number;      // Maximum requests in the window
  windowMs: number;   // Window size in milliseconds
}

export function isRateLimited(
  request: NextRequest,
  keyPrefix: string,
  options: RateLimitOptions
): { limited: boolean; limit: number; remaining: number; resetTime: number } {
  // Retrieve the client IP address from request headers or NextRequest IP.
  const ip = request.ip || request.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';
  const key = `${keyPrefix}:${ip}`;
  const now = Date.now();

  let record = cache.get(key);

  if (!record || now > record.resetTime) {
    record = {
      count: 0,
      resetTime: now + options.windowMs,
    };
  }

  record.count += 1;
  cache.set(key, record);

  const remaining = Math.max(0, options.limit - record.count);
  const limited = record.count > options.limit;

  return {
    limited,
    limit: options.limit,
    remaining,
    resetTime: record.resetTime,
  };
}

// Background cleanup interval to prevent memory leaks by pruning expired records.
if (typeof setInterval !== 'undefined') {
  const interval = setInterval(() => {
    const now = Date.now();
    cache.forEach((record, key) => {
      if (now > record.resetTime) {
        cache.delete(key);
      }
    });
  }, 10 * 60 * 1000) as any;
  
  if (interval && typeof interval.unref === 'function') {
    interval.unref();
  }
}
