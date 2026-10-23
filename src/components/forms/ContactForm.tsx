import React, { useState } from "react";
import { useTranslations } from '../../il8n/utils';
import type { Lang } from '../../il8n/ui';

const ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.PUBLIC_WEB3FORMS_KEY ?? 'd36680fb-bc4a-4c6a-b13d-334d243fc24b';

export default function ContactForm({ lang }: { lang: Lang }) {
  const t = useTranslations(lang);
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  async function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('access_key', ACCESS_KEY);
    data.append('subject', `New enquiry — ${data.get('name') ?? ''}`);
    data.append('from_name', 'DigiComp Website');

    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) { setStatus('ok'); form.reset(); }
      else setStatus('error');
    } catch { setStatus('error'); }
  }

  const field =
    'w-full rounded-btn border border-line bg-bg px-4 py-3 text-sm text-fg placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none transition-shadow';

  return (
    <form onSubmit={onSubmit} className="w-full space-y-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">{t('form.name')}</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">{t('form.email')}</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
      </div>
      
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium">{t('form.company')}</label>
        <input id="company" name="company" autoComplete="organization" className={field} />
      </div>
      
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">{t('form.message')}</label>
        <textarea id="message" name="message" required rows={5} className={field} />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-btn bg-accent px-6 py-3.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === 'sending' ? t('form.sending') : t('form.submit')}
      </button>

      {status === 'ok' && (
        <p role="status" className="rounded-btn border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">{t('form.success')}</p>
      )}
      {status === 'error' && (
        <p role="alert" className="rounded-btn border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{t('form.error')}</p>
      )}
    </form>
  );
}