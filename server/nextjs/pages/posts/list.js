import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import { getSortedPostsData } from '../../lib/posts';

export default function PostList(props) {
    return (
    <Layout>
    <Head><title>Post list</title></Head>
        <p style={{height: "80vh", padding: 0, margin: 0,  display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <ul>
                {
                    props.data.map((post, _ind) => {
                        return <li key={_ind}>{post.id}{post.title}</li>
                    })
                }
            </ul>;
            <Link href="/"><a> Go to Home page </a></Link>
        </p>
    </Layout>
    );
}

export async function getStaticProps() {
    // Get external data from the file system, API, DB, etc.
    const data = getSortedPostsData();
  
    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
      props: {
          data
      },
    }
  }