import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/Home.module.css';
import Card from '@src/components/card';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <h1 className="text-3xl font-bold underline mt-10">
          This is a tailwind header
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Card
            link={'https://nextjs.org/docs'}
            header={'Documentation'}
            paragraph="Find in-depth information about Next.js features and API."
          />

          <Card
            header="Learn"
            paragraph="Learn about Next.js in an interactive course with quizzes!"
          />

          <Card
            link="https://github.com/vercel/next.js/tree/canary/examples"
            header="Examples"
            paragraph="Discover and deploy boilerplate example Next.js projects."
          />

          <Card
            link="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            header="Deploy"
            paragraph="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
