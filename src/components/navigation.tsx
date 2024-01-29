import Link from 'next/link';

export default function Navigation() {
  return (
    <div>
      <Link href="/">Главная</Link>
      <Link href="/about">О компании</Link>
      <Link href="/contacts">Контакты</Link>
    </div>
  );
}
