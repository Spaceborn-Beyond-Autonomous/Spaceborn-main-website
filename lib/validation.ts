export function isValidLength(str: string | null | undefined, max: number): boolean {
  if (!str) return true;
  return str.length <= max;
}

export function hasNewline(str: string | null | undefined): boolean {
  if (!str) return false;
  return str.includes('\r') || str.includes('\n');
}

export function validateEmailFormat(email: string): boolean {
  // Strict RFC 5322 email regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}
