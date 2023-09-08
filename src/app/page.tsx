import React from 'react';

const Home: React.FC = () => {

  return (
    <div className="home relative bg-white w-full h-[7576px] overflow-hidden text-center text-[var(--font-size-5xl)] text-[var(--color-dimgray)] font-[var(--font-inter)]">
      <div className="header absolute w-[1440px] h-[110px] top-0 left-0 text-left text-lg">
        <div className="header-bg absolute top-0 left-0 bg-paleturquoise-100 w-[1440px] h-[110px]"></div>
        <div className="navigation absolute top-[70px] left-[calc(50% + 395px)] w-[229px] flex flex-row items-center justify-center">
          <div className="log-in-sign relative">log in/ sign up</div>
        </div>
      </div>
      <div className="hero absolute top-[110px] -left-[120px] w-[1440px] h-[930px] text-[var(--font-size-xl)] text-white font-[var(--font-michroma)]">
        <img className="cafe4-d-1-icon absolute top-0 left-[120px] w-[1440px] h-[820px] object-cover" alt="" src="/img/cafe4-d-1@2x.png" />
        <img className="sign-up-icon absolute top-[733px] left-[802px] w-[118px] h-[33.4px]" alt="" src="/img/sign-up.svg" />
        <img className="hero-item absolute top-[684.77px] left-[818.14px] w-[78.79px] h-[31.6px]" alt="" src="/img/vector-1.svg" />
        <div className="hero-child absolute w-[1440px] h-[110px] top-[820px] left-[120px] bg-paleturquoise-100"></div>
        <div className="nft absolute top-[446px] left-[1110px] w-[159px] h-[45px]">
          <img className="nft-child absolute top-0 left-0 w-[159px] h-[45px] rounded-[1rem]" alt="" src="/img/rectangle-2.svg" />
          <div className="with-nft absolute top-[6px] left-[16.5px] text-shadow-[0 4px 4px rgba(0, 0, 0, 0.5)]">with NFT</div>
        </div>
        <div className="sign-up absolute top-[738px] left-[815px] text-base leading-[16px] inline-block w-[83px] h-[23px]">sign up</div>
        <div className="div absolute top-[637px] left-[706px] font-noto-sans-jp">アートでつながる世界を作ろう</div>
        <div className="div1 absolute top-[519px] left-[403px] text-21xl text-shadow-[0 4px 4px rgba(0, 0, 0, 0.25)] font-noto-sans-jp">アーチストとアーチストを応援する人の新たな関係</div>
        <div className="the-street-gallery-container absolute top-0 left-[450px] text-77xl leading-[110px] whitespace-pre-wrap text-shadow-[0 5px 5px rgba(0, 0, 0, 0.5)]">
          <p className="the-street m-0">ArtVisionary</p>
        </div>
        <b className="welcome-to absolute top-[118px] left-[740px] text-5xl tracking-[0.2em] font-istok-web text-center">WELCOME TO</b>
      </div>
      <div className="concept absolute top-[1040px] h-[930px] text-sm text-[var(--color-navy)] top-1040 h-930 text-navy">

        <div className="shop5-parent absolute top-[767.95px] left-0 w-[1440px] h-[162.05px]">
          <img className="shop5-icon absolute top-0 left-1118.53 w-159.22 h-162.05 object-cover" alt="" src="/img/shop5@2x.png" />
          <img className="shop1-icon absolute top-0 left-160.22 w-159.22 h-162.05 object-cover" alt="" src="/img/shop1@2x.png" />
          <img className="shop7-icon absolute top-0 left-160.22 w-159.22 h-162.05 object-cover" alt="" src="/img/shop7@2x.png" />
          <img className="shop4-icon absolute top-0 left-479.65 w-160.22 h-162.05 object-cover" alt="" src="/img/shop4@2x.png" />
          <img className="shop9-icon absolute top-0 left-0 w-160.22 h-162.05 object-cover" alt="" src="/img/shop9@2x.png" />
          <img className="shop2-icon absolute top-0 left-319.44 w-160.22 h-162.05 object-cover" alt="" src="/img/shop2@2x.png" />
          <img className="shop3-icon absolute top-0 left-319.44 w-160.22 h-162.05 object-cover" alt="" src="/img/shop3@2x.png" />
          <img className="shop6-icon absolute top-0 left-319.44 w-159.22 h-162.05 object-cover" alt="" src="/img/shop6@2x.png" />
          <img className="shop10-icon absolute top-0 left-319.44 w-160.22 h-162.05 object-cover" alt="" src="/img/shop10@2x.png" />
        </div>

        <img className="gradation-1-icon" alt="" src="/img/gradation-1@2x.png" />
        <b className="concept-the-street-container absolute top-0 left-[1.04px] h-[767.95px] object-cover">
          <p className="the-street">
            ArtVisionaryは、作品を世に出したいアーティストと、
          </p>
          <p className="the-street">アートを飾りたい人をつなぐサービスです。</p>
          {/* 他のテキスト */}
        </b>
      </div>
      <div className="artlists">
        {/* 他のアートリストコンポーネント */}
        <div className="artlists-child absolute left-0 w-1440 top-0 bg-paleturquoise-100 h-3827">
          <b className="art-lists">Art Lists</b>
          <div className="rectangle-parent">
            <div className="group-child"></div>
            <img className="rectangle-icon" alt="" src="/img/rectangle8@2x.png" />
          </div>
          <div className="rectangle-group">
            <div className="group-child"></div>
            <img className="rectangle-icon" alt="" src="/img/rectangle7@2x.png" />
          </div>
          <div className="rectangle-container">
            <div className="group-child"></div>
            <img
              className="unsplashpgdw-bhdbpi-icon"
              alt=""
              src="/img/unsplashpgdw-bhdbpi3@2x.png"
            />
          </div>
          <div className="group-div">
            <div className="rectangle-div"></div>
            <div className="shin-tanaka-container">
              <span className="shin-tanaka">shin tanaka</span> ｜ リトルモンスター ｜
              ❤ ️｜ 0.01
            </div>
            <img className="ethereum-1-icon" alt="" src="/img/ethereum-1@2x.png" />
          </div>
          <div className="rectangle-parent1">
            <div className="rectangle-div"></div>
            <div className="shin-tanaka-container">
              <span className="shin-tanaka">UGO</span> ｜ 「金色の犬」 ｜ ❤️ ️ ｜ 0.01
            </div>
            <img className="ethereum-1-icon1" alt="" src="/img/ethereum-1@2x.png" />
          </div>
        </div>
        <div className="more">more ...</div>
      </div>

      <div className="playlists">
        <img className="gradation-3-icon" alt="" src="/img/gradation-3@2x.png" />
        <b className="street-gallery">
          <p className="the-street">
            Street Galleryがテーマごとにピックした作品集です。おまかせで楽しみたい方はこちらをどうぞ。
          </p>
        </b>
        <div className="rectangle-parent33">
          {/* 他のアイコン画像 */}
          <b className="classic">CLASSIC</b>
        </div>
        <div className="rectangle-parent34">
          {/* 他のアイコン画像 */}
          <b className="digital">DIGITAL</b>
        </div>
        <div className="rectangle-parent35">
          {/* 他のアイコン画像 */}
          <b className="pop-sweet">POP &SWEET</b>
        </div>
        <b className="playlists1">Playlists</b>
      </div>
      <div className="contact">
        <div className="contact-child"></div>
        <b className="contact-us">Contact us</b>
        <b className="b">サービス・アーチストに関してのお問い合わせはこちらへ</b>
        <div className="group-parent">
          {/* 他のフォーム要素 */}
        </div>
      </div>
      <div className="footer">
        <div className="footer-child"></div>
        <img className="snsinstagram-icon" alt="" src="/img/snsinstagram.svg" />
        <img className="snsfacebook-icon" alt="" src="/img/property-1white.svg" />
        <img className="x-icon" alt="" src="/img/x.svg" />
        <b className="artvisionaries">Artvisionary</b>
      </div>
    </div>
  );
}

export default Home;
