import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/404.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Rafe Media';
export const siteTitle = 'Rafe Media Blog';

export default function Custom404() {
  return (
    <div className={styles.container}>

    <Head> <title>404 - Page Not Found</title> </Head>
      <h1 className={utilStyles.headingXl} >404 - Page Not Found</h1>
      <a href="https://rafemedia.com/">Go To Rafe Media</a>
     <div>
      <Link className={styles.backToHome} href="/">← Back to Blog</Link>
      </div>
    </div>
  );
}
