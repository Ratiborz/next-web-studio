'use client';
import Link from 'next/link';
import s from './navigation.module.css';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className={s.container}>
      <ul className={s.list}>
        <li className={clsx(s.item, { [s.disabled]: pathname === '/' })}>
          <Link href="/">Главная</Link>
        </li>
        <li className={clsx(s.item, { [s.disabled]: pathname === '/about' })}>
          <Link href="/about">О компании</Link>
        </li>
        <li className={clsx(s.item, { [s.disabled]: pathname === '/contacts' })}>
          <Link href="/contacts">Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}
