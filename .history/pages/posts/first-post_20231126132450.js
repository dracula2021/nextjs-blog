import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../componets/layout';
export default function FirstPost() {
  return <Layout>
  <Head>
    <title>first post</title>
    <script src="https://connect.facebook.net/en_US/sdk.js" />
  </Head>
  <h1>First Post</h1>
   <h2>
        <Link href="/">Back to home</Link>

      </h2>
  </Layout>;
}