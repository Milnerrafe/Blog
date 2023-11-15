import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon, RedditShareButton, RedditIcon,  } from 'next-share'



export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to the Blog of <a href="https://rafemedia.com/">Rafe Media</a>, Have Fun and Enjoy. </p>
<div>
        <TwitterShareButton
  url={'https://blog.rafemedia.com/'}
  title={'The Rafe Media Blog'}
>
  <TwitterIcon size={32} round />
</TwitterShareButton>

<RedditShareButton
  url={'https://blog.rafemedia.com/'}
  title={'The Rafe Media Blog'}
>
  <RedditIcon size={32} round />
</RedditShareButton>

<FacebookShareButton
  url={'https://blog.rafemedia.com/'}
  quote={'The Rafe Media Blog'}
  hashtag={'#RafeMedia'}
>
  <FacebookIcon size={32} round />
</FacebookShareButton>


</div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <b>Found a problem with this page, <a href="https://github.com/Milnerrafe/Blog">Fix It on GitHub</a>. </b>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}