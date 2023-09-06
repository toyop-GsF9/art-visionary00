import Image from 'next/image'

export default function Home() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="stylesheet" href="./global.css" />
      <link rel="stylesheet" href="./index.css" />
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
      <div className="home">
        <div className="header">
          <div className="header-bg" />
          <div className="navigation">
            <div className="log-in-sign">log in / sign up</div>
          </div>
        </div>
        <div className="hero">
          <img
            className="cafe4-d-1-icon"
            alt="ギャラリー"
            src="../public/img/cafe4-d-1@2x.png"
          />
          <img className="sign-up-icon" alt="" src="../img/sign-up.svg" />
          <img className="hero-item" alt="" src="../img/vector-1.svg" />
          <div className="hero-child" />
          <div className="nft">
            <img className="nft-child" alt="" src="../img/rectangle-2.svg" />
            <div className="with-nft">with NFT</div>
          </div>
          <div className="sign-up">sign up</div>
          <div className="div">アートでつながる世界を作ろう</div>
          <div className="div1">アーチストとアーチストを応援する人の新たな関係</div>
          <div className="the-street-gallery-container">
            <p className="title">ArtVisionary</p>
          </div>
          <b className="welcome-to">WELCOME TO</b>
        </div>
        <div className="concept">
          <div className="shop5-parent">
            <img className="shop5-icon" alt="" src="../img/shop5@2x.png" />
            <img className="shop1-icon" alt="" src="../img/shop1@2x.png" />
            <img className="shop7-icon" alt="" src="../img/shop7@2x.png" />
            <img className="shop4-icon" alt="" src="../img/shop4@2x.png" />
            <img className="shop9-icon" alt="" src="../img/shop9@2x.png" />
            <img className="shop2-icon" alt="" src="../img/shop2@2x.png" />
            <img className="shop3-icon" alt="" src="../img/shop3@2x.png" />
            <img className="shop6-icon" alt="" src="../img/shop6@2x.png" />
            <img className="shop10-icon" alt="" src="../img/shop10@2x.png" />
          </div>
          <img
            className="gradation-1-icon"
            alt=""
            src="../img/gradation-1@2x.png"
          />
          <b className="concept-the-street-container">
            <p className="the-street">CONCEPT </p>
            <p className="the-street">&nbsp;</p>
            <p className="the-street">
              ArtVisionaryは、作品を世に出したいアーティストと、
            </p>
            <p className="the-street">アートを飾りたい人をつなぐサービスです。</p>
            <p className="the-street">&nbsp;</p>
            <p className="the-street">アートは空間を彩るだけでなく</p>
            <p className="the-street">心に光を届けたり、脳に刺激を送ったり</p>
            <p className="the-street">生活に活力を生み出します。</p>
            <p className="the-street">
              ArtVisionaryはフィジカルな作品もデジタル画像で取り扱います。
            </p>
            <p className="the-street">
              サイネージにより１枚の額に複数の作品を掲出することで
            </p>
            <p className="the-street">多くの方が作品に触れる機会を創出します。</p>
            <p className="the-street">
              気分や時間帯に合わせて、アートを変えることができ
            </p>
            <p className="the-street">これまで以上に楽しみが広がります。</p>
          </b>
        </div>
        <div className="artlists">
          <div className="artlists-child" />
          <div className="more">more ...</div>
          <div className="rectangle-parent">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">UUU</span>｜ 「V」 ｜ ❤️
            </div>
          </div>
          <div className="rectangle-group">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">SSSS</span>｜ T」 ｜ ❤️
            </div>
          </div>
          <div className="rectangle-container">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">Q</span>｜ RRR ｜ ♡
            </div>
          </div>
          <div className="group-div">
            <div className="rectangle-div" />
            <img
              className="unsplashjhog6v6riis-icon"
              alt=""
              src="../img/unsplashjhog6v6riis@2x.png"
            />
          </div>
          <div className="rectangle-parent1">
            <div className="rectangle-div" />
            <img
              className="unsplashlo7venj-ywm-icon"
              alt=""
              src="../img/unsplashlo7venj-ywm4@2x.png"
            />
          </div>
          <div className="rectangle-parent2">
            <div className="rectangle-div" />
            <img
              className="unsplashczofj2jw0es-icon"
              alt=""
              src="../img/unsplashczofj2jw0es@2x.png"
            />
          </div>
          <div className="rectangle-parent3">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">OOOOO</span>｜ 「PPPPP」 ｜ ♡
            </div>
          </div>
          <div className="rectangle-parent4">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">NN</span>｜ 「MMMM」 ｜ ♡
            </div>
          </div>
          <div className="rectangle-parent5">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">KK</span>｜ 「LLLL」 ｜ ♡
            </div>
          </div>
          <div className="rectangle-parent6">
            <div className="rectangle-div" />
            <img
              className="unsplashjhog6v6riis-icon1"
              alt=""
              src="../img/unsplashjhog6v6riis1@2x.png"
            />
          </div>
          <div className="rectangle-parent7">
            <div className="rectangle-div" />
            <img
              className="unsplashlo7venj-ywm-icon1"
              alt=""
              src="../img/unsplashlo7venj-ywm5@2x.png"
            />
          </div>
          <div className="rectangle-parent8">
            <div className="rectangle-div" />
            <img
              className="unsplash5r1jmvan-bi-icon"
              alt=""
              src="../img/unsplash5r1jmvan-bi@2x.png"
            />
          </div>
          <div className="rectangle-parent9">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">BBB</span>｜ 「DDDDD」 ｜ ♡
            </div>
          </div>
          <div className="rectangle-parent10">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">AAAA</span>｜ 「thin」 ｜ ♡
            </div>
          </div>
          <div className="rectangle-parent11">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">LUKE</span>｜ 「Cube」 ｜ ♡
            </div>
          </div>
          <div className="rectangle-parent12">
            <div className="rectangle-div" />
            <img
              className="unsplashpgdw-bhdbpi-icon"
              alt=""
              src="../img/unsplashpgdw-bhdbpi1@2x.png"
            />
          </div>
          <div className="rectangle-parent13">
            <div className="rectangle-div" />
            <img
              className="unsplashpgdw-bhdbpi-icon"
              alt=""
              src="../img/unsplashg5a5znjs2te@2x.png"
            />
          </div>
          <div className="rectangle-parent14">
            <div className="rectangle-div" />
            <img
              className="unsplashd2w-1ljioq-icon"
              alt=""
              src="../img/unsplashd2w-1ljioq@2x.png"
            />
          </div>
          <div className="rectangle-parent15">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">住吉シゲ</span>｜ 「キューブ」 ｜　♡
            </div>
          </div>
          <div className="rectangle-parent16">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">川村NANA</span> ｜ 「lightⅥ」 ｜ ♡
            </div>
          </div>
          <div className="rectangle-parent17">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">川村NANA</span>｜ 「lightⅤ」 ｜ ♡
            </div>
          </div>
          <div className="rectangle-parent18">
            <div className="rectangle-div" />
            <img
              className="unsplashjhog6v6riis-icon"
              alt=""
              src="../img/unsplashpgdw-bhdbpi2@2x.png"
            />
          </div>
          <div className="rectangle-parent19">
            <div className="rectangle-div" />
            <img
              className="unsplashjhog6v6riis-icon"
              alt=""
              src="../img/unsplashg5a5znjs2te1@2x.png"
            />
          </div>
          <div className="rectangle-parent20">
            <div className="rectangle-div" />
            <img
              className="unsplashd2w-1ljioq-icon1"
              alt=""
              src="../img/unsplashd2w-1ljioq1@2x.png"
            />
          </div>
          <div className="rectangle-parent21">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">楊悟</span> ｜ 「NARA」 ｜ ♡
            </div>
          </div>
          <div className="rectangle-parent22">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">中島ケイタ</span> ｜ 「React」 ｜ ♡
            </div>
          </div>
          <div className="rectangle-parent23">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">中島ケイタ </span>｜ 「The Day」 ｜ ♡
            </div>
          </div>
          <div className="rectangle-parent24">
            <div className="rectangle-div" />
            <img
              className="rectangle-icon"
              alt=""
              src="../img/rectangle4@2x.png"
            />
          </div>
          <div className="rectangle-parent25">
            <div className="rectangle-div" />
            <img
              className="rectangle-icon"
              alt=""
              src="../img/rectangle5@2x.png"
            />
          </div>
          <div className="rectangle-parent26">
            <div className="rectangle-div" />
            <img
              className="rectangle-icon"
              alt=""
              src="../img/rectangle6@2x.png"
            />
          </div>
          <div className="rectangle-parent27">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">リンゴ</span> ｜ 「CAAAT」｜ ♡
            </div>
          </div>
          <div className="rectangle-parent28">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">UGO</span> ｜ 「金色の犬」 ｜❤️
            </div>
          </div>
          <div className="rectangle-parent29">
            <div className="group-child" />
            <div className="uuu-v-container">
              <span className="uuu">shin tanaka</span> ｜ リトルモンスター ｜ ❤️
            </div>
          </div>
          <div className="rectangle-parent30">
            <div className="rectangle-div" />
            <img
              className="unsplashpgdw-bhdbpi-icon2"
              alt=""
              src="../img/unsplashpgdw-bhdbpi3@2x.png"
            />
          </div>
          <div className="rectangle-parent31">
            <div className="rectangle-div" />
            <img
              className="rectangle-icon"
              alt=""
              src="../img/rectangle7@2x.png"
            />
          </div>
          <div className="rectangle-parent32">
            <div className="rectangle-div" />
            <img
              className="rectangle-icon"
              alt=""
              src="../img/rectangle8@2x.png"
            />
          </div>
          <b className="art-lists">Art Lists</b>
          <b className="list-text">
            いいね♡してみてください。好きなアートをあなたのお気に入りの場所でご覧いただけます。
          </b>
        </div>
        <div className="playlists">
          <img
            className="gradation-3-icon"
            alt=""
            src="../img/gradation-3@2x.png"
          />
          <b className="street-gallery">
            <p className="the-street">
              Art Visionary
              がテーマごとにピックした作品集です。おまかせで楽しみたい方はこちらをどうぞ。
            </p>
          </b>
          <div className="rectangle-parent33">
            <div className="rectangle-div" />
            <img
              className="rectangle-icon5"
              alt=""
              src="../img/rectangle@2x.png"
            />
            <img
              className="rectangle-icon6"
              alt=""
              src="../img/rectangle1@2x.png"
            />
            <img
              className="unsplashpgdw-bhdbpi-icon3"
              alt=""
              src="../img/unsplashpgdw-bhdbpi@2x.png"
            />
            <b className="classic">CLASSIC</b>
          </div>
          <div className="rectangle-parent34">
            <div className="rectangle-div" />
            <img
              className="unsplashlo7venj-ywm-icon2"
              alt=""
              src="../img/unsplashlo7venj-ywm@2x.png"
            />
            <img
              className="rectangle-icon7"
              alt=""
              src="../img/rectangle2@2x.png"
            />
            <img
              className="unsplashlo7venj-ywm-icon3"
              alt=""
              src="../img/unsplashlo7venj-ywm1@2x.png"
            />
            <b className="digital">DIGITAL</b>
          </div>
          <div className="rectangle-parent35">
            <div className="rectangle-div" />
            <img
              className="unsplashlo7venj-ywm-icon4"
              alt=""
              src="../img/unsplashlo7venj-ywm2@2x.png"
            />
            <img
              className="rectangle-icon8"
              alt=""
              src="../img/rectangle3@2x.png"
            />
            <img
              className="unsplashpgdw-bhdbpi-icon3"
              alt=""
              src="../img/unsplashlo7venj-ywm3@2x.png"
            />
            <b className="pop-sweet">POP &amp; SWEET</b>
          </div>
          <b className="playlists1">Playlists</b>
        </div>
        <div className="contact">
          <div className="contact-child" />
          <b className="contact-us">Contact us</b>
          <b className="b">サービス・アーチストに関してのお問い合わせはこちらへ</b>
          <div className="group-parent">
            <div className="shape-with-text-parent">
              <div className="shape-with-text" />
              <div className="name">Name</div>
            </div>
            <div className="shape-with-text-parent">
              <div className="shape-with-text" />
              <div className="name">Mail</div>
            </div>
            <div className="shape-with-text-container">
              <div className="shape-with-text2" />
              <div className="message">Message</div>
            </div>
            <div className="submit">Submit</div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-child" />
          <img
            className="snsinstagram-icon"
            alt=""
            src="../img/snsinstagram.svg"
          />
          <img
            className="snsfacebook-icon"
            alt=""
            src="../img/property-1white.svg"
          />
          <img className="x-icon" alt="" src="../img/x.svg" />
          <b className="artvisionaries">Artvisionary</b>
        </div>
      </div>
    </>

  )
}
