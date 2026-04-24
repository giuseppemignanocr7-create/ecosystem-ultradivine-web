import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

export function Button({
  children,
  variant = 'primary',
  href,
  className,
  onClick,
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-md transition-colors duration-300 ease-out-expo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech';

  const variants = {
    primary:
      'bg-ink-900 text-white hover:bg-ink-2',
    secondary:
      'bg-paper-2 text-ink-900 border border-line hover:border-line-strong hover:bg-paper',
    ghost:
      'text-ink-700 hover:text-ink-900 hover:bg-paper-2',
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
