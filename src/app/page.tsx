
import styles from 'styles/index.module.css';
import Image from '../../node_modules/next/image';

export default function Home() {
  return (
    <div className={styles['home']}>
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
      <div className={styles['header']}>
        <div className={styles['header-bg']}></div>
        <div className={styles['navigation']}>
          <div className={styles['log-in-sign']}>log in/ sign up</div>
        </div>
      </div>
      <div className={styles['hero']}>
        <div className={styles['cafe4-d-1-icon']} >
          <Image
            alt=""
            src="/img/cafe4-d-1@2x.png"
            width={1440}
            height={930}
          />
        </div>
        <div className={styles['sign-up-icon']}>
          <Image
            alt=""
            src="/img/sign-up.svg"
            width={83}
            height={23}
          />
        </div>
        <div className={styles['hero-item']}>
          <Image
            alt=""
            src="/img/vector-1.svg"
            width={78.8}
            height={31.6}
          />
        </div>
        <div className={styles['hero-child']}></div>
        <div className={styles['nft']}>
          <div className={styles['nft-child']}>
            <Image
              alt=""
              src="/img/rectangle-2.svg"
              width={159}
              height={45}
            />
          </div>



          <div className={styles['with-nft']}>with NFT</div>
        </div>
        <div className={styles['sign-up']}>sign up</div>
        <div className={styles['div']}>アートでつながる世界を作ろう</div>
        <div className={styles['div1']}>アーチストとアーチストを応援する人の新たな関係</div>
        <div className={styles['the-street-gallery-container']}>
          <p className={styles['the-street']}>ArtVisionary</p>
        </div>
        <b className={styles['welcome-to']}>WELCOME TO</b>
      </div>

      <div className={styles['concept']}>
        <div className={styles['shop5-parent']}>
          <img className={styles['shop5-icon']} alt="" src="/img/shop5@2x.png" />
          <img className={styles['shop1-icon']} alt="" src="/img/shop1@2x.png" />
          <img className={styles['shop7-icon']} alt="" src="/img/shop7@2x.png" />
          <img className={styles['shop4-icon']} alt="" src="/img/shop4@2x.png" />
          <img className={styles['shop9-icon']} alt="" src="/img/shop9@2x.png" />
          <img className={styles['shop2-icon']} alt="" src="/img/shop2@2x.png" />
          <img className={styles['shop3-icon']} alt="" src="/img/shop3@2x.png" />
          <img className={styles['shop6-icon']} alt="" src="/img/shop6@2x.png" />
          <img className={styles['shop10-icon']} alt="" src="/img/shop10@2x.png" />
        </div>
        <img className={styles['gradation-1-icon']} alt="" src="/img/gradation-1@2x.png" />
        <div className={styles['concept-the-street-container']}>
          <p className={styles['the-street']}>CONCEPT</p>
          <p className={styles['the-street']}>&nbsp;</p>
          <p className={styles['the-street']}>
            ArtVisionaryは、作品を世に出したいアーティストと、
          </p>
          <p className={styles['the-street']}>アートを飾りたい人をつなぐサービスです。</p>
          <p className={styles['the-street']}>&nbsp;</p>
          <p className={styles['the-street']}>アートは空間を彩るだけでなく</p>
          <p className={styles['the-street']}>心に光を届けたり、脳に刺激を送ったり</p>
          <p className={styles['the-street']}>生活に活力を生み出します。</p>
          <p className={styles['the-street']}>
            ArtVisionaryはフィジカルな作品もデジタル画像で取り扱います。
          </p>
          <p className={styles['the-street']}>
            サイネージにより１枚の額に複数の作品を掲出することで
          </p>
          <p className={styles['the-street']}>多くの方が作品に触れる機会を創出します。</p>
          <p className={styles['the-street']}>
            気分や時間帯に合わせて、アートを変えることができ
          </p>
          <p className={styles['the-street']}>これまで以上に楽しみが広がります。</p>
        </div>

        <div className={styles['artlists']}>
          <div className={styles['artlists-child']}></div>
          <b className={styles['art-lists']}>Art Lists</b>
          <div className={styles['rectangle-parent']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['rectangle-icon']}
              alt=""
              src="/img/rectangle8@2x.png"
            />
          </div>
          <div className={styles['rectangle-group']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['rectangle-icon']}
              alt=""
              src="/img/rectangle7@2x.png"
            />
          </div>
          <div className={styles['rectangle-container']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['unsplashpgdw-bhdbpi-icon']}
              alt=""
              src="/img/unsplashpgdw-bhdbpi3@2x.png"
            />
          </div>
          <div className={styles['group-div']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>shin tanaka</span>｜ リトルモンスター ｜ ❤ ️｜ 0.01
            </div>
            <img
              className={styles['ethereum-1-icon']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent1']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>UGO</span>｜ 「金色の犬」 ｜ ❤️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-1-icon1']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent2']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>リンゴ</span>｜ 「CAAAT」｜ ♡️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-icon']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent3']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['rectangle-icon']}
              alt=""
              src="/img/rectangle6@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent4']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['rectangle-icon']}
              alt=""
              src="/img/rectangle5@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent5']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['rectangle-icon']}
              alt=""
              src="/img/rectangle4@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent6']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>中島ケイタ</span>｜ 「The Day」 ｜ ♡️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-icon']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent7']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>中島ケイタ</span>｜ 「React」 ｜ ♡️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-icon2']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent8']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>楊悟</span>｜ 「NARA」 ｜ ♡️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-icon3']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent9']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['unsplashd2w1ljioq-icon']}
              alt=""
              src="/img/unsplashd2w-1ljioq1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent10']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['unsplashg5a5znjs2te-icon']}
              alt=""
              src="/img/unsplashg5a5znjs2te1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent11']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['unsplashg5a5znjs2te-icon']}
              alt=""
              src="/img/unsplashpgdw-bhdbpi2@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent12']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>川村NANA</span>｜ 「lightⅤ」 ｜ ♡️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-icon4']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent13']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>川村NANA</span>｜ 「lightⅥ」 ｜ ♡️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-icon5']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>

          <div className={styles['rectangle-parent14']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>住吉シゲ</span>｜ 「キューブ」 ｜ ♡️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-icon2']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent15']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['unsplashd2w1ljioq-icon1']}
              alt=""
              src="/img/unsplashd2w-1ljioq@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent16']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['unsplashg5a5znjs2te-icon1']}
              alt=""
              src="/img/unsplashg5a5znjs2te@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent17']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['unsplashg5a5znjs2te-icon1']}
              alt=""
              src="/img/unsplashpgdw-bhdbpi1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent18']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>AAAA</span>｜ 「lightⅤ」 ｜ ♡️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-icon7']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent19']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>AAAA</span>｜ 「lightⅤ」 ｜ ♡️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-icon8']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent20']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>BBB</span>｜ 「DDDDD」 ｜ ♡️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-icon7']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent21']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['unsplash5r1jmvanBi-icon']}
              alt=""
              src="/img/unsplash5r1jmvan-bi@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent22']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['unsplashlo7venjYwm-icon']}
              alt=""
              src="/img/unsplashlo7venj-ywm5@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent23']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['unsplashjhog6v6riis-icon']}
              alt=""
              src="/img/unsplashjhog6v6riis1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent24']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>KK</span>｜ 「LLLL」 ｜ ♡️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-icon0']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent25']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>NN</span>｜ 「MMMM」 ｜ ♡️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-icon1']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent26']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>OOOOO</span>｜ 「PPPPP」 ｜ ♡️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-icon2']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent27']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['unsplashczofj2jw0es-icon']}
              alt=""
              src="/img/unsplashczofj2jw0es@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent28']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['unsplashlo7venjYwm-icon']}
              alt=""
              src="/img/unsplashlo7venj-ywm4@2x.png"
            />
          </div>

          <div className={styles['rectangle-parent29']}>
            <div className={styles['group-child']}></div>
            <img
              className={styles['unsplashg5a5znjs2te-icon']}
              alt=""
              src="/img/unsplashjhog6v6riis@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent30']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>Q</span>｜ RRR ｜ ♡️ ️ ｜ 0.01
            </div>
            <img
              className={styles['ethereum-icon3']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent31']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>SSSS</span>｜ T」 ｜ ❤️ ️ ｜ 0.01️
            </div>
            <img
              className={styles['ethereum-icon4']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['rectangle-parent32']}>
            <div className={styles['rectangle-div']}></div>
            <div className={styles['shin-tanaka-container']}>
              <span className={styles['shin-tanaka']}>UUU</span>｜ 「V」 ｜ ❤️ ️ ｜ 0.01️
            </div>
            <img
              className={styles['ethereum-icon5']}
              alt=""
              src="/img/ethereum-1@2x.png"
            />
          </div>
          <div className={styles['more']}>more ...</div>
        </div>

        <div className={styles['rectangle-parent33']}>
          <div className={styles['group-child']}></div>
          <img className={styles['rectangle-icon5']} alt="" src="./public/rectangle@2x.png" />

          <img className={styles['rectangle-icon6']} alt="" src="./public/rectangle1@2x.png" />

          <img className={styles['unsplashpgdw-bhdbpi-icon3']} alt="" src="./public/unsplashpgdw-bhdbpi@2x.png" />

          <b className={styles['classic']}>CLASSIC</b>
        </div>


        <div className={styles['rectangle-parent34']}>
          <div className={styles['group-child']}></div>
          <img
            className={styles['unsplashlo7venj-ywm-icon2']}
            alt=""
            src="/img/unsplashlo7venj-ywm@2x.png"
          />

          <img
            className={styles['rectangle-icon7']}
            alt=""
            src="/img/rectangle2@2x.png"
          />

          <img
            className={styles['unsplashlo7venj-ywm-icon3']}
            alt=""
            src="/img/unsplashlo7venj-ywm1@2x.png"
          />

          <b className={styles['digital']}>DIGITAL</b>
        </div>

        <div className={styles['rectangle-parent35']}>
          <div className={styles['group-child']}></div>
          <img
            className={styles['unsplashlo7venj-ywm-icon4']}
            alt=""
            src="/img/unsplashlo7venj-ywm2@2x.png"
          />

          <img
            className={styles['rectangle-icon8']}
            alt=""
            src="/img/rectangle3@2x.png"
          />

          <img
            className={styles['unsplashpgdw-bhdbpi-icon3']}
            alt=""
            src="/img/unsplashlo7venj-ywm3@2x.png"
          />

          <b className={styles['pop-sweet']}>POP & SWEET</b>
        </div>

        <b className={styles['playlists1']}>Playlists</b>

        <div className={styles['contact']}>
          <div className={styles['contact-child']}></div>
          <b className={styles['contact-us']}>Contact us</b>
          <b className={styles['b']}>サービス・アーチストに関してのお問い合わせはこちらへ</b>
          <div className={styles['group-parent']}>
            <div className={styles['shape-with-text-parent']}>
              <div className={styles['shape-with-text']}></div>
              <div className={styles['name']}>Name</div>
            </div>
            <div className={styles['shape-with-text-parent']}>
              <div className={styles['shape-with-text']}></div>
              <div className={styles['name']}>Mail</div>
            </div>
            <div className={styles['shape-with-text-container']}>
              <div className={styles['shape-with-text2']}></div>
              <div className={styles['message']}>Message</div>
            </div>
            <div className={styles['submit']}>Submit</div>
          </div>
        </div >

        <div className={styles['footer']}>
          <div className={styles['footer-child']}></div>
          <img
            className={styles['snsinstagram-icon']}
            alt=""
            src="/img/snsinstagram.svg"
          />

          <img
            className={styles['snsfacebook-icon']}
            alt=""
            src="/img/property-1white.svg"
          />

          <img className={styles['x-icon']} alt="" src="/img/x.svg" />

          <b className={styles['artvisionaries']}>Artvisionary</b>
        </div>
      </div>
    </div >

  );
}
