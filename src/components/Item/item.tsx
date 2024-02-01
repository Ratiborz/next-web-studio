import Image from 'next/image';
import Link from 'next/link';
import s from './dynamic.module.css';

type Props = {
  params: { id: number; title: string; url: string };
};

export default function Item({ params }: Props) {
  if (!params) {
    return <div>Loading...</div>;
  }
  return (
    <div className={s.item}>
      <h1>Проект: {params.title}</h1>
      <Image src={params.url} width={400} height={400} alt={params.title} />
      <Link className={s.link} href="/portfolio">
        Назад к списку работ
      </Link>
    </div>
  );
}
