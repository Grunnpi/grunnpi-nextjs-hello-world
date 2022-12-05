import Layout from '/components/layout'
import { getAllPostIds, getPostData } from '/lib/posts';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  console.log("Post render")
  console.log(postData)
  return (
    <Layout>
     <Head>
        <title>{postData.props.title}</title>
      </Head>
    <article>
      <h1 className={utilStyles.headingXl}>{postData.props.title}</h1>
      <div className={utilStyles.lightText}>
        {postData.props.contentDeMoi}
      </div>
    </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  console.log("getStaticPaths >>>>>>>>>>>>>")
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
    console.log("getStaticProps >>>>>>>>>>>>>")
    console.log(params)
  const postData = getPostData(params.id);
    return {
      props: {
        postData,
      }
    }
}

