import React from "react";
import ReactFullpage from '@fullpage/react-fullpage'; // will return static version on server and "live" version on client
import App_aUST_logo from "../../assets/images/app_aUST_logo@2x.png"
import App_zkSync_logo from "../../assets/images/app_zkSync_logo@2x.png"
import JoinNow from "../../assets/images/JoinNow@2x.png"
import App_goExplore from "../../assets/images/app_goExplore@2x.png"
import app_PHl_1 from "../../assets/images/app_PHl_icon1_1@2x.png"
import app_PHl_2 from "../../assets/images/app_PHl_icon2_1@2x.png"
import app_PHl_3 from "../../assets/images/app_PHl_icon3_1@2x.png"
import app_PHl_4 from "../../assets/images/app_PHl_icon4_1@2x.png"

import Header from "./header"
import styles from "./index.module.scss"

const Discord = "https://discord.gg/nbVjsq57"
const Litepaper = "https://litepaper.phezzan.xyz"

const Home = () => {
    return(
        <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    verticalCentered={false}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className={styles.mainFirst}>
              <Header/>
              <h3 className={styles.title}>Democratize Perpetual </h3>
              <h3><span>Trading For All</span></h3>
              <h5>powered by <img className={styles.zkLogo} src={App_zkSync_logo} alt="zkSync" /> zkSync 2.0</h5>
              <div className={styles.darkLight}></div>
              <p>Earn <span>yield</span> APY while you trade.</p>
              <p>Testnet live on Rinkeby.</p>
              <a 
                className={styles.joinNow}
                href={Discord}
                target="_blank"
                rel="noreferrer"
              >
                <img src={JoinNow} alt="join testnet" />
                <span>Join Testnet</span>
              </a>
              <div 
                className={styles.explore}
                onClick={() => fullpageApi.moveSectionDown()}
              >
                  <img src={App_goExplore} alt="expore" />
                  <p>Explore Phezzan Protocol</p>
              </div>
            </div>
          </div>
          <div className="section">
            <div className={styles.mainSecond}>
              <div className={styles.splitLine}>
                {[...Array(33)].map(() => {
                  return <span></span>
                })}
              </div>
              <h3>Product <span>Highlights</span></h3>
              <div className={styles.productItem}>
                <div className={styles.icon}>
                  <img src={app_PHl_1} />
                </div>
                <div className={styles.info}>
                  <h5>Earn yield as a trader or LP</h5>
                  <p><span>Yield</span> bearing assets can be used as</p>
                  <p>collateral.<span>PnL</span> auto converts to yield</p>
                  <p>bearing assets.</p>
                </div>
              </div>

              <div className={styles.productItemEarn}>
                <div className={styles.icon}>
                  <img src={app_PHl_2} />
                </div>
                <div className={styles.info}>
                  <h5>Support multi collateral</h5>
                  <p><span>Stablecoins</span> and <span>yield-bearing asset</span></p>
                  <p>can be used as collateral. Coming</p>
                  <p>soon.</p>
                </div>
              </div>

              <div className={styles.productTestnet}>
                <div className={styles.icon}>
                  <img src={app_PHl_3} />
                </div>
                <div className={styles.info}>
                  <h5>Unbelievably fast and cheap</h5>
                  <p>Lightening fast order execution and</p>
                  <p>unbelievably low fees,powered by</p>
                  <p><span>zkSync 2.0</span> coming soon.</p>
                </div>
              </div>
              <div className={styles.productDe}>
                <div className={styles.icon}>
                  <img src={app_PHl_4} />
                </div>
                <div className={styles.info}>
                  <h5>Fully decentralized</h5>
                  <p>All orders are executed and settled></p>
                  <p><span>on-chain</span>. Perpetual DEX for the masses.</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className={styles.mainThird}>
              <div>
              <h3>Interested?</h3>
              <h3 className={styles.subTitle}>Here is what you can do.</h3>
              <div className={styles.joinItem}>
                <div className={styles.left}>
                  <h5>Join the community</h5>
                  <a 
                    className={styles.button}
                    href={Discord}
                    target="_blank"
                    rel="noreferrer"
                  >Join Now</a>
                </div>
                <div className={styles.community}>
                </div>
              </div>
              <div className={styles.learnItem}>
                <div className={styles.left}>
                  <h5>Learn more in our litepaper</h5>
                  <a 
                    className={styles.button}
                    href={Litepaper}
                    target="_blank"
                    rel="noreferrer"
                  >Learn now</a>
                </div>
                <div className={styles.litepaper}>
                </div>
              </div>
              </div>
              
              <Header isFooter/>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
    )
}

export default Home;