'use client';
import Layout from '@/components/layout/layout';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import s from './portfolio.module.css';
import { useRouter } from 'next/navigation';
import { prepareData } from '@/utils/prepareData';
import { PHOTOS_API_URL, getServerSideProps } from '@/utils/getServerSideRendering';

export interface PortfolioItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export type ItemsByGroup = [string, PortfolioItem[]][];

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [itemsByGroup, setItems] = useState<ItemsByGroup | null>(null);
  const { push } = useRouter();

  const load = async () => {
    try {
      const { data } = await axios.get<PortfolioItem[]>(PHOTOS_API_URL);
      const prepared = prepareData(data.slice(0, 9));
      setItems(prepared);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Layout>
      <div>Страница портфолио</div>
      {loading ? '...loading...' : ''}
      <button onClick={load}>отправь запрос</button>
      <h1>Наши работы</h1>

      {itemsByGroup?.length ? (
        loading ? (
          '...loading...'
        ) : (
          <div>
            {itemsByGroup?.map((group, i) => (
              <div key={i} className={s.groupWrapper}>
                <h2>{group[0]}</h2>

                <div className={s.listGroup}>
                  {group[1].map(({ id, title, thumbnailUrl }) => (
                    <div key={id} className={s.groupItem} onClick={() => push(`/portfolio/${id}`)}>
                      <Image src={thumbnailUrl} width={150} height={150} alt={title} />
                      <h3>{title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <div>Ничего не найдено</div>
      )}
    </Layout>
  );
}
