import { motion } from "framer-motion";
import Layout from "../components/Layout/layout";
import Head from "next/head";

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>詳細 - 調布のこやど</title>
        <meta name="description" content="私について" />
      </Head>
      <main className="textLeft CN">
        <h1>詳細</h1>
        <div className="triangle-bottom" />
        <dl>
          <dt>こやどの会のルール</dt>
          <dd>集まった参加者と協力者と話したいことを話します。</dd>
          <dt>会の流れ</dt>
          <p>初めの自己紹介が終わったらグループを作って別れます。</p>
          <p>自分の行きたい好きなグループに移動しても大丈夫です。</p>
          <dt>気を付けて欲しいこと</dt>
          <dd>他人の意見を否定することはやめましょう。</dd>
          <dt>Thanks</dt>
          <dd>
            話したい人、喋りたい人と輪を作って話します。
            <br />
            参加者と協力のもとで成り立っています。
          </dd>
        </dl>
      </main>
    </motion.div>
  );
};

export default About;
