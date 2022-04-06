import Framerdiv from "../components/Sys/Framer";
import Head from "next/head";
import { Link as Scroll } from "react-scroll";
import Link from "next/link";
import { useMail } from ".././hooks/useMail";

const Index: React.FC = () => {
  const { setName, setMail, setMessage, send } = useMail();
  return (
    <Framerdiv>
      <Head>
        <title>トップ - こやど</title>
        <meta name="description" content="トップページです。" />
      </Head>
      <main className="hLink textLeft margin inblo">
        <nav className="Yohaku">
          <ul className="List">
            <li>
              <Scroll to="about" smooth={true} offset={-200}>
                <a className="scaleLinks">Content</a>
              </Scroll>
            </li>
            <li>
              <Scroll to="rule" smooth={true} offset={-150}>
                <a className="scaleLinks">会でやること詳細</a>
              </Scroll>
            </li>
            <li>
              <Scroll to="contact" smooth={true} offset={-150}>
                <a className="scaleLinks">コンタクト</a>
              </Scroll>
            </li>
          </ul>
        </nav>
        <div className="mt-48">
          <h1 className="text-4xl">ちょうふのこやど</h1>
          <h1 id="about">ちょうふのこやどとは？</h1>
          <div className="triangle-bottom" />
          <div>ひきこもりや生きづらさを抱えている当事者の方が集まりみんなでお話をする会です。</div>
          <div>当事者のみなさんがほっとできる場を作っています。</div>
          <br />
          <div>「調布市社会福祉協議会」と「家族会やまぼうし」と3団体協働で開催しています。</div>
          <br />
          <h1>開催場所</h1>
          <dl>
            <h2>東京都調布市</h2>
            <br />
            <h2>
              <a href="https://www.tokyo-satsuki.jp/" className="satsuki scaleLinks" target="_blank">
                さつきホスピタル病院
              </a>
              <div className="Kaiten inblo">前</div>. . .
              <a href="https://soradai.kenseikai-group.or.jp/" className="blue scaleLinks" target="_blank">
                空と大地と(カフェ)
              </a>{" "}
            </h2>
            <p>詳細の所在地 : 〒182-0005 東京都 調布市東つつじヶ丘2-27-1</p>
            <p>駅より徒歩7分</p>
            <p>普段はカフェとして営業中です。美味しいのでぜひ足をお運びください。</p>
            <p>
              「{" "}
              <Link href="/blog">
                <a className="blue scaleLinks">ブログ一覧で最新を見る</a>
              </Link>{" "}
              」を参照してください。
            </p>
          </dl>
        </div>

        <div className="mb-80 mt-48">
          <h1 className="text-4xl">ちょうふのこやど女子会</h1>
          <h1 id="women">ちょうふのこやどとは？</h1>
          <div className="triangle-bottom" />
          <div>ひきこもりや生きづらさを抱えている当事者の方が集まりみんなでお話をする会です。</div>
          <div>当事者のみなさんがほっとできる場を作っています。</div>
          <br className="mb-14" />
          <br />
          <div>「調布市社会福祉協議会」と「家族会やまぼうし」と3団体協働で開催しています。</div>
          <br />

          <h1>開催場所</h1>
          <dl>
            <h2>東京都調布市</h2>
            <br />
            <h2>
              <a href="https://www.tokyo-satsuki.jp/" className="satsuki scaleLinks" target="_blank">
                さつきホスピタル病院
              </a>
              <div className="Kaiten inblo">前</div>. . .
              <a href="https://soradai.kenseikai-group.or.jp/" className="blue scaleLinks" target="_blank">
                空と大地と(カフェ)
              </a>{" "}
            </h2>
            <p>詳細の所在地 : 〒182-0005 東京都 調布市東つつじヶ丘2-27-1</p>
            <p>駅より徒歩7分</p>
            <p>普段はカフェとして営業中です。美味しいのでぜひ足をお運びください。</p>
            <p>
              「{" "}
              <Link href="/blog">
                <a className="blue scaleLinks">ブログ一覧で最新を見る</a>
              </Link>{" "}
              」を参照してください。
            </p>
          </dl>
        </div>

        <div className="mb-80">
          <h1 id="rule">会でやること〜進め方について〜</h1>
          <ul>
            <p>① 簡単な自己紹介と近況を順番にみんなで一周します。</p>
            <p>② その後はみんなで自由に話していきます。</p>
            <p>話したいこと、聞きたいこと、仕 事の話（悩みや相談など）趣味の話でも社会問題の話でも自由に話していきましょう。</p>
            <h2>※みんながお話できるよう、お話しをする際の長さは5分くらいまでにしましょう</h2>
            <li>会場の一角にフリースペースを設けていますので疲れた場合などご自由に休憩してください。</li>
            <li>入退室は自由です。遅れての参加や早めの退席も構いません。</li>
            <li>話し合いの最中に何かあればすぐに遠慮なくスタッフ(運営)にご申し付けください。</li>

            <h2>*注意事項*</h2>
            <li>参加者が話したことを批判しないようにしてください。</li>
            <li>本イベントに関してブログやSNS等での情報発信していただいて構いませんが、個人情報や個人が特定できるような内容については掲載しないようにしてください。</li>
            <li>主催団体の告知用としてスタッフがイベントの様子を写真撮影させていただきます。(顔は映さないのですが後ろ姿もNGな場合申告してもらえると助かります)</li>
            <li>
              <u>宗教並びにネットワークビジネスの勧誘の方の</u>ご参加は遠慮させていただいております。
            </li>
          </ul>
        </div>
        <br />

        <form className="textCenter mb-40">
          <h1 id="contact">Contact</h1>
          <div className="triangle-bottom" />
          <dl>
            <dt>
              <label htmlFor="name">お名前*</label>
            </dt>
            <dd>
              <input type="text" name="name" aria-label="Name area" onChange={(e) => setName(e.target.value)} required />
            </dd>

            <dt>
              <label htmlFor="email">メールアドレス*</label>
            </dt>
            <dd>
              <input type="text" name="name" aria-label="Name area" onChange={(e) => setMail(e.target.value)} required />
            </dd>
            <dt>
              <label htmlFor="massage">メッセージ</label>
            </dt>
            <dd>
              <textarea name="massage" aria-label="Massage area" onChange={(e) => setMessage(e.target.value)} required />
            </dd>
            <dd>
              <button id="massageButton" type="submit" onClick={send}>
                送る
              </button>
            </dd>
          </dl>
        </form>
      </main>
    </Framerdiv>
  );
};

export default Index;
