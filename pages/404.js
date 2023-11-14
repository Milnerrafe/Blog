import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Layout from '../../components/layout';


export default function Custom404()  { return(
  <Layout>
    <Head> <title>404 - Page Not Found</title> </Head>
  <h1 className={utilStyles.headingXl} >404 - Page Not Found</h1>;
  <a href="https://rafemedia.com/">Go To Rafe Media</a>
  </Layout>  
);
  }