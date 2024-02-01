import { ItemsByGroup, PortfolioItem } from '@/app/portfolio/page';

export const PHOTOS_API_URL = 'https://jsonplaceholder.typicode.com/photos';

export const prepareData = (array: PortfolioItem[]): ItemsByGroup => {
  const groupedItems: ItemsByGroup = [
    ['Корпоративные сайты', array.slice(0, 3)], // создание первой группы с заголовком "Корпоративные сайты"
    ['CRM-системы', array.slice(3, 6)], // создание второй группы с заголовком "CRM-системы"
    ['Прочие проекты', array.slice(6, 9)], // создание третьей группы с заголовком "Прочие проекты"
  ];

  return groupedItems;
};
