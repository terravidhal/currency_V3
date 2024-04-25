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
        </div>
      </div>
      <div className="footer-bottom">
      </div>
     </div>
  );
};

export default Footer;
