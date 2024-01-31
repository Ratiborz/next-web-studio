import { PortfolioItem } from '@/app/portfolio/page';
import axios from 'axios';
import { GetServerSideProps } from 'next';

export const PHOTOS_API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=100';

export async function getServerSideProps(params) {
  const url = `${PHOTOS_API_URL}${params}`;
  const { data } = await axios.get<PortfolioItem[]>(url);

  return {
    props: { portfolioItem: data },
  };
}
