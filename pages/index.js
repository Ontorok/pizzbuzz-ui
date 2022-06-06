import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PizzBuzz</title>
        <meta name="description" content="Best Pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Home Page
    </div>
  );
}
