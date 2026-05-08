import React, { useState } from 'react';
import { CheckCircle2, Mail, Send } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSent(true); }
  };

  return sent ? (
    <div className="flex items-center gap-3 text-white">
      <CheckCircle2 className="h-5 w-5 text-[#778DA9] flex-shrink-0" />
      <span className="text-sm">Thanks! You'll hear from us soon.</span>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1 flex items-center gap-2 bg-white/8 border border-white/15 rounded-xl px-4 h-12 focus-within:border-[#778DA9] transition-colors">
        <Mail className="h-4 w-4 text-[#778DA9] flex-shrink-0" />
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="bg-transparent flex-1 text-sm text-white placeholder-[#778DA9] outline-none"
        />
      </div>
      <button
        type="submit"
        className="h-12 px-6 rounded-xl bg-[#415A77] text-white text-sm font-semibold hover:bg-[#778DA9] transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
      >
        Subscribe <Send className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}
