import React from 'react';
import './Footer.css';



const Footer = () => {

  return(
    <div className="Footer">
      <div className="footer-top">
        <div className="footer-title">
          <p>
            Recommended by Over 40,000 verified customers
          </p>
        </div>
        <div className="footer-items">
           <div className="footer-item one">
             <div className="item-title">'Great'</div>
             <div className="item-stars"> <img src="../src/assets/stars.svg" alt="" /></div>
             <div className="item-description">Based on 68.513 reviews</div>
             <div className="item-trust"> <img src="../src/assets/trustpilot.svg" alt="" /></div>
           </div>
           <div className="footer-item two">
            <div className="items-s-m-t">
              <div className="item-stars"> <img src="../src/assets/stars.svg" alt="" /></div>
              <div className="item-Stitle">I'd like to have a French communication</div>
              <div className="item-Mtitle">i'd like to have a French communication</div>
            </div>
              <div className="items-name-time">
                <div className="item-name">Johanne Fréchette</div>
                <div className="item-time">22 hours, 47 minutes ago</div>
              </div>
           </div>
           <div className="footer-item two">
            <div className="items-s-m-t">
              <div className="item-stars"> <img src="../src/assets/stars.svg" alt="" /></div>
              <div className="item-Stitle2">Good One More time</div>
              <div className="item-Mtitle">Good One More time</div>
            </div>
              <div className="items-name-time">
                <div className="item-name">FREDERIC COULLON</div>
                <div className="item-time">99 hours, 58 minutes ago</div>
              </div>
           </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-item">
          <div className="f-b-icon">
             <img className='svg1' src="../src/assets/app-store.svg"/>
          </div>
          <div className="f-b-star-desc">
            <div className="f-b-star">
               <img className='svg2' src="../src/assets/start-5.svg"/>
            </div>
             <div className="f-b-desc">
              <span className="fb-name-desc colr">4.5/5,&nbsp; </span >
              <span className="fb-name-desc">  2.2k ratings</span >
             </div>
          </div>
        </div>
        <div className="footer-bottom-item">
          <div className="f-b-icon">
             <img className='svg1' src="../src/assets/google.svg"/>
          </div>
          <div className="f-b-star-desc">
            <div className="f-b-star">
               <img className='svg2' src="../src/assets/start-5.svg"/>
            </div>
             <div className="f-b-desc">
              <span className="fb-name-desc colr">3.8/5,&nbsp; </span >
              <span className="fb-name-desc">  90.8k ratings</span >
             </div>
          </div>
        </div>
        <div className="footer-bottom-item">
          <div className="f-b-icon">
             <img className='svg1' src="../src/assets/trustpilot2.svg"/>
          </div>
          <div className="f-b-star-desc">
            <div className="f-b-star">
               <img className='svg2' src="../src/assets/stars2.svg"/>
            </div>
             <div className="f-b-desc">
              <span className="fb-name-desc colr">4.7/5,&nbsp; </span >
              <span className="fb-name-desc">  41.5k ratings</span >
             </div>
          </div>
        </div>
      </div>
     </div>
  );
};

export default Footer;
