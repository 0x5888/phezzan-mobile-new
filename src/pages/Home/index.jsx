import React from "react";
import ReactFullpage from '@fullpage/react-fullpage'; // will return static version on server and "live" version on client
import App_aUST_logo from "../../assets/images/app_aUST_logo@2x.png"
import App_zkSync_logo from "../../assets/images/app_zkSync_logo@2x.png"
import JoinNow from "../../assets/images/JoinNow@2x.png"
import App_goExplore from "../../assets/images/app_goExplore@2x.png"

import app_PHl_1 from "../../assets/images/visit.png" //liquidity
import app_PHl_2 from "../../assets/images/market_1.png"
import app_PHl_3 from "../../assets/images/traders_1.png"
import app_PHl_4 from "../../assets/images/keys_1.png"

import Header from "./header"
import styles from "./index.module.scss"

const Discord = "https://discord.gg/etXDy8psHx"
const Litepaper = " https://learn.phezzan.xyz"

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
              <p>Orderbook perpetual DEX</p>
              <p>that enables <span>retail liquidity</span></p>
              <p>APY without Impermanent Loss.</p>
              <a 
                className={styles.joinNow}
                href={Discord}
                target="_blank"
                rel="noreferrer"
              >
                <img src={JoinNow} alt="join Phezzan Community" />
                <span>Join Phezzan Community</span>
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
                {[...Array(31)].map(() => {
                  return <span></span>
                })}
              </div>
              <h3>Product <span>Highlights</span></h3>
              <div className={styles.productItem}>
                <div className={styles.icon}>
                  <img src={app_PHl_1} />
                </div>
                <div className={styles.info}>
                  <h5>For Liquidity Providers</h5>
                  <p><span>Choose</span> from a wide range of market making strategies,</p>
                  <p>let professionals manage your capital for you,</p>
                  <p>and earn <span>APY without Impermanent Loss.</span></p>
                </div>
              </div>

              <div className={styles.productItemEarn}>
                <div className={styles.icon}>
                  <img src={app_PHl_2} />
                </div>
                <div className={styles.info}>
                  <h5>For Market Makers</h5>
                  <p>Have more <span>access</span> to retail capital,</p>
                  <p>keep your strategies <span>private</span>,</p>
                  <p>and earn commission <span>on your own terms.</span></p>
                </div>
              </div>

              <div className={styles.productTestnet}>
                <div className={styles.icon}>
                  <img src={app_PHl_3} />
                </div>
                <div className={styles.info}>
                  <h5>For Traders</h5>
                  <p><span>Deep</span> liquidity and <span>tight</span> spread.</p>
                  <p>CEX like experiences.</p>
                  <p>&nbsp;</p>
                </div>
              </div>
              <div className={styles.productDe}>
                <div className={styles.icon}>
                  <img src={app_PHl_4} />
                </div>
                <div className={styles.info}>
                  <h5>Not your keys, not your coin</h5>
                  <p>Phezzan does not hold your crypto.</p>
                  <p>All orders are executed and settled <span>on-chain.</span></p>
                  <p>&nbsp;</p>
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
                  <h5>Read more about Phezzan &
Learn in Phezzan Academy</h5>
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
