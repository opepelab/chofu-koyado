import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
      <Head>
        <title>404 - こやど</title>
        <meta name="description" content="存在しないページ" />
      </Head>
      <main className="CN">
        <h1>このページはありません。</h1>
        <div className="triangle-bottom" />
        <div>
          <Link href="/">
            <a className="redLinks scale">back トップに戻る</a>
          </Link>
        </div>
      </main>
    </motion.div>
  );
};

export default NotFound;
