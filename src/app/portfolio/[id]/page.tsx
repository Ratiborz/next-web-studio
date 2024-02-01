import Layout from '@/components/layout/layout';
import Item from '@/components/Item/item';
import { PHOTOS_API_URL } from '@/utils/prepareData';

type Props = {
  params: {
    id: number;
    title: string;
    url: string;
  };
};

async function getProjects(id: number) {
  const res = await fetch(`${PHOTOS_API_URL}/${id}`);
  const projects = await res.json();

  console.log(projects);
  return projects;
}

export default async function Card({ params }: Props) {
  const projects = await getProjects(Number(params.id));

  return (
    <Layout>
      <Item params={projects} />
    </Layout>
  );
}
