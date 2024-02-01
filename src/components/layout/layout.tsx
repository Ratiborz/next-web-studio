'use client';
import { PropsWithChildren } from 'react';
import Head from 'next/head';
import Navigation from '../navigation/navigation';
import s from './layout.module.css';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  return (
    <>
      <Head>
        <title>Web Studio</title>
        <meta name="description" content="SkillFactory Next.js project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={s.container}>
        <header className={s.header}>
          <Link href="/" className={clsx(s.logo, { [s.disabled]: pathname === '/' })}>
            WEBSTUDIO
          </Link>
          <Navigation />
        </header>
        <main className={s.main}>{children}</main>
        <footer className={s.footer}>&copy; 2023 Web studio</footer>
      </div>
    </>
  );
}
