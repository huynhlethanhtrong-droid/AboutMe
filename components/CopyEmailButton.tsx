'use client';

import { Copy } from 'lucide-react';
import { useState } from 'react';

export function CopyEmailButton({ email, locale }: { email: string; locale: 'vi' | 'en' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 border border-line px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-muted transition hover:text-ink"
    >
      <Copy size={14} />
      {copied ? (locale === 'vi' ? 'Đã sao chép' : 'Copied') : locale === 'vi' ? 'Sao chép' : 'Copy'}
    </button>
  );
}
