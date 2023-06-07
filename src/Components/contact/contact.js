import React from "react";
import "./contact.css";
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from  'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
function contact() {
  return (
    <section className="c-wrapper">
      <div className="paddings flexCenter innerWidth c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>
          <div className="flexColStart contactMode">
            <div className="flexStart row">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25}/>

                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span><span className="secondaryText">021 4567893221</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}/>

                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span><span className="secondaryText">021 4567893221</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            <div className="flexStart row">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25}/>

                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span><span className="secondaryText">021 4567893221</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call</div>
              </div>
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25}/>

                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Massage</span><span className="secondaryText">021 4567893221</span>
                  </div>
                </div>
                <div className="flexCenter button">Massage Now</div>
              </div>
            </div>

          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" width={"550"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default contact;
