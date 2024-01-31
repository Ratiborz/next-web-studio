import Image from 'next/image';
import { PortfolioItem } from '../page';
import Link from 'next/link';
import Layout from '@/components/layout/layout';
import s from './dynamic.module.css';
import { PHOTOS_API_URL, getServerSideProps } from '@/utils/getServerSideRendering';
import axios from 'axios';

interface ItemProps {
  props: PortfolioItem;
}

export default function Item({ props }: ItemProps) {
  const data = getServerSideProps(props.id);
  return (
    <Layout>
      <div className={s.item}>
        <h1>Проект: {props?.title}</h1>
        <Image src={props?.url} width={400} height={400} alt={props?.title} />
        <Link className={s.link} href="/portfolio">
          Назад к списку работ
        </Link>
      </div>
    </Layout>
  );
}
