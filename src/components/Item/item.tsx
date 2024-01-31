import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/layout';
import s from './dynamic.module.css';
import { PHOTOS_API_URL } from '@/utils/getServerSideRendering';
import axios from 'axios';
import { PortfolioItem } from '@/app/portfolio/page';

interface ItemProps {
  portfolioItem: PortfolioItem;
}

export async function getServerSideProps(params) {
  const url = `${PHOTOS_API_URL}${params}`;
  const { data } = await axios.get<PortfolioItem[]>(url);

  console.log(data);
  return {
    props: { portfolioItem: data },
  };
}

export default function Item({ portfolioItem }: ItemProps) {
  return (
    <div className={s.item}>
      <h1>Проект: {portfolioItem?.title}</h1>
      <Image src={portfolioItem.url} width={400} height={400} alt={portfolioItem?.title} />
      <Link className={s.link} href="/portfolio">
        Назад к списку работ
      </Link>
    </div>
  );
}
