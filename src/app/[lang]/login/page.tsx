"use client";

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const { lang } = useParams<{ lang: string }>();
  const router = useRouter();
  const { login, signup } = useAuth();

  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [loginVal, setLoginVal] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignup) {
        await signup(email, loginVal, password);
      } else {
        await login(loginVal, password);
      }
      router.push(`/${lang}`);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const t = {
    title: isSignup
      ? (lang === 'ru' ? 'Регистрация' : 'Sign Up')
      : (lang === 'ru' ? 'Вход' : 'Sign In'),
    switchText: isSignup
      ? (lang === 'ru' ? 'Уже есть аккаунт?' : 'Already have an account?')
      : (lang === 'ru' ? 'Нет аккаунта?' : "Don't have an account?"),
    switchAction: isSignup
      ? (lang === 'ru' ? 'Войти' : 'Sign in')
      : (lang === 'ru' ? 'Зарегистрироваться' : 'Sign up'),
    submit: isSignup
      ? (lang === 'ru' ? 'Создать аккаунт' : 'Create account')
      : (lang === 'ru' ? 'Войти' : 'Sign in'),
  };

  return (
    <div className="max-w-sm mx-auto mt-20">
      <h1 className="text-xl font-semibold text-neutral-200 mb-6 text-center">{t.title}</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignup && (
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 bg-[#171717] border border-[#282828] rounded-md text-sm text-neutral-300 placeholder:text-neutral-600 outline-none focus:border-emerald-500/50"
          />
        )}
        <input
          type="text"
          placeholder={lang === 'ru' ? 'Логин' : 'Login'}
          value={loginVal}
          onChange={e => setLoginVal(e.target.value)}
          required
          className="w-full px-3 py-2 bg-[#171717] border border-[#282828] rounded-md text-sm text-neutral-300 placeholder:text-neutral-600 outline-none focus:border-emerald-500/50"
        />
        <input
          type="password"
          placeholder={lang === 'ru' ? 'Пароль' : 'Password'}
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 bg-[#171717] border border-[#282828] rounded-md text-sm text-neutral-300 placeholder:text-neutral-600 outline-none focus:border-emerald-500/50"
        />

        {error && (
          <p className="text-xs text-red-400">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 bg-emerald-300 text-emerald-950 text-sm font-semibold rounded-md hover:bg-emerald-200 transition-colors disabled:opacity-50"
        >
          {loading ? '...' : t.submit}
        </button>
      </form>

      <p className="text-center text-xs text-neutral-500 mt-4">
        {t.switchText}{' '}
        <button
          type="button"
          onClick={() => { setIsSignup(!isSignup); setError(''); }}
          className="text-emerald-300 hover:text-emerald-200 transition-colors"
        >
          {t.switchAction}
        </button>
      </p>
    </div>
  );
}
