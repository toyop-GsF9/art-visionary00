
import styles from 'styles/index.module.css';
import Image from '../../node_modules/next/image';

export default function Home() {
  return (
    <div className={styles.home}>
      {/* <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>ArtVisionary</title>
        <link rel="stylesheet" href="/global.css" />
        <link rel="stylesheet" href="/index.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Michroma:wght@400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto Sans JP:wght@400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Istok Web:wght@700&display=swap"
        />
      </Head> */}
      <div className={styles.header}>
        <div className={styles.headerbg}></div>
        <div className={styles.navigation}>
          <div className={styles.loginsign}>log in/ sign up</div>
        </div>
      </div>
      <div className={styles.hero}>
        <div className={styles.cafe4d1icon}>
          <Image
            alt=""
            src="/img/cafe4-d-1@2x.png"
            width={1440}
            height={930}
          />
        </div>
        <div className={styles.signupicon}>
          <Image
            alt=""
            src="/img/sign-up.svg"
            width={83}
            height={23}
          />
        </div>
        <div className={styles.heroitem}>
          <Image
            alt=""
            src="/img/vector-1.svg"
            width={78.8}
            height={31.6}
          />
        </div>
        <div className={styles.herochild}></div>
        <div className={styles.nft}>
          <div className={styles.nftchild}>
            <Image
              alt=""
              src="/img/rectangle-2.svg"
              width={159}
              height={45}
            />
          </div>










          <div className={styles['withnft']}>with NFT</div>
        </div>
        <div className={styles['signup']}>sign up</div>
        <div className={styles['div']}>アートでつながる世界を作ろう</div>
        <div className={styles['div1']}>アーチストとアーチストを応援する人の新たな関係</div>
        <div className={styles['thestreetgallerycontainer']}>
          <p className={styles['thestreet']}>ArtVisionary</p>
        </div>
        <b className={styles['welcometo']}>WELCOME TO</b>
      </div>

      <div className={styles.concept}>
        {/* コンセプトセクションの内容 */}
      </div>
      <div className={styles.playlists}>
        {/* プレイリストセクションの内容 */}
      </div>
      <div className={styles.contact}>
        {/* お問い合わせセクションの内容 */}
      </div>
      <div className={styles.footer}>
        {/* フッターセクションの内容 */}
      </div>
    </div>
  );
}
