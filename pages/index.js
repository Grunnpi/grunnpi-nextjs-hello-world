import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '/components/layout';
import utilStyles from '/styles/utils.module.css';
import { getSortedPostsData } from '/lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Pour gestion de l'inventaire du groupe</p>
        <p>
          (qui fait ça ? Voir ici la page {' '}
          <a href="/about">à propos</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Trucs</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title, contentDeMoi }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br/>
            <small className={utilStyles.lightText}>
                {id}
            </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}