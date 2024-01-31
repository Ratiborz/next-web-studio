import { PortfolioItem } from '../page';
import Layout from '@/components/layout/layout';
import Item from '@/components/Item/item';

interface ItemProps {
  portfolioItem: PortfolioItem;
}

export default function Card({ portfolioItem }: ItemProps) {
  return (
    <Layout>
      <Item portfolioItem={portfolioItem} />
    </Layout>
  );
}
