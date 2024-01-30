import Layout from '@/components/layout/layout';

export default function NotFound() {
  return (
    <Layout>
      <h1>К сожалению такой страницы не существует</h1>
      <h2>
        Вы можете перейти на <a href="/">главную страницу</a>, или оставить свой комментарий на{' '}
        <a href="/contacts">странице контактов</a>
      </h2>
    </Layout>
  );
}
