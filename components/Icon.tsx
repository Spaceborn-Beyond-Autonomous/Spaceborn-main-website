export default function Icon({ name, className, size }: { name: string; className?: string; size?: number }) {
  return <i className={`fa-solid fa-${name}${className ? ` ${className}` : ''}`}
    style={size ? { fontSize: size } : undefined} aria-hidden="true" />;
}
