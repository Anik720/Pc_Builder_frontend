import RootLayout from "@/components/layouts/RootLayout";
import Head from "next/head";
import AllPc from "./AllPcs/AllPc";

export default function Home({ allPcs }) {

  // const randaomPc=
  return (
    <div>
      <Head>
        <title>Pc Builder</title>
        <meta
          name="description"
          content="You can build your desired pc in here."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AllPc allPcs={allPcs}></AllPc>
    </div>
  );
}
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export const getStaticProps = async () => {
  // const res = await fetch("http://localhost:3000/api/news"); // internal API connected with mongoDB
  const res = await fetch("https://pc-builder-a9a7.onrender.com/api/v1/PC"); // --> json server
  const data = await res.json();
  console.log(29, data);
  return {
    props: {
      allPcs: data.data || [],
      // allNews: data.data, // when using internal API connected with mongoDB
    },
    revalidate: 10,
  };
};
