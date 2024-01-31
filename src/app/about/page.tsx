import Layout from '@/components/layout/layout';
import Image from 'next/image';
import _Kz8nHVg_tGI from '../../../public/team/arlington-research-Kz8nHVg_tGI-unsplash.jpg';
import _g1Kr4Ozfoac from '../../../public/team/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg';
import _5fNmWej4tAA from '../../../public/team/scott-graham-5fNmWej4tAA-unsplash.jpg';
import s from './about.module.css';

export default function About() {
  return (
    <Layout>
      <h1>О компании</h1>
      <div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias facilis quasi magni laudantium
          reprehenderit doloremque cumque blanditiis at nemo, maxime ullam esse hic id eius nihil voluptatem reiciendis
          ipsam quo.
        </p>
      </div>
      <div className={s.list}>
        <div className={s.item}>
          <h3>Отдел маркетинга</h3>
          <div className={s.content}>
            <Image className={s.image} src={_Kz8nHVg_tGI} alt="https://unsplash.com/photos/Kz8nHVg_tGI" />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere consequatur distinctio eaque autem quas
              reiciendis voluptatem, cum sequi cupiditate saepe enim architecto ab labore doloremque debitis quaerat,
              sunt possimus aliquid.
            </div>
          </div>
        </div>

        <div className={s.item}>
          <h3>Инженеры-разработчики</h3>
          <div className={s.content}>
            <Image className={s.image} src={_g1Kr4Ozfoac} alt="https://unsplash.com/photos/g1Kr4Ozfoac" />
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam excepturi maxime cumque voluptatibus,
              amet magnam perferendis consequuntur! Doloremque ab dignissimos fugit eaque consequuntur, ratione,
              deserunt soluta iusto adipisci commodi minima!
            </div>
          </div>
        </div>

        <div className={s.item}>
          <h3>Отдел продаж</h3>
          <div className={s.content}>
            <Image className={s.image} src={_5fNmWej4tAA} alt="https://unsplash.com/photos/5fNmWej4tAA" />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur facilis soluta natus repellat quia
              deserunt ipsa illo fugiat aperiam minima error labore mollitia, sed nemo nobis nisi iusto? Distinctio,
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
