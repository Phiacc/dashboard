import React from "react";
import overview from '../../../assets/svg/overview.svg';
import rowvertical from '../../../assets/svg/row-vertical.svg';
import search from '../../../assets/svg/search-normal.svg';
import eye from '../../../assets/svg/eye.svg';
import copy from '../../../assets/svg/copy.svg';
import polaris from '../../../assets/png/polaris-logo.png';
import more from '../../../assets/svg/more.svg';
import guaranty from "../../../assets/png/gt-logo.png";
import { Icon } from "../../atoms/icons";
import providus from "../../../assets/png/providus-logo.png";
import first from "../../../assets/png/first-bank-logo.png";

export const Mainsection = (props) => {
  if (props.type === "mainsection") {
    return (
      <div className="flex main-section">
        <div className="flex flex-column middle">
            <div className="flex first-toparea">
                <strong>Virtual Account Dashboard</strong>
            <br />
           <div className="flex right-toparea">
           <div className="newbranch" >
           <Icon type='formatsquareblue'/><span>Create New Branch</span>
                </div>
                <button>+ Create Virtual Account</button>  
                </div>

</div>

            <div  className="flex top-area">
                <div className="flex flex-column estimation">
                    <small>Total Credits</small>
                    <strong>NGN 3,287,902.00</strong>
                </div>
                <div className="flex flex-column estimation1">
                    <small>Total Transfer Settlememts</small>
             <strong>81 Settlement</strong>
                </div>
                <div className="flex flex-column estimation1">
                    <small>Generated Accounts</small>
                    <strong>12 Accounts</strong>
                </div>
            </div>
            <div className="flex flex-column bottom-area">
           <div className="flex firstbm-layer">
           <p><strong >Your Virtual Accounts </strong></p>
           <div className="flex firstbm-icon">
           <a className="overview" href="/"><img src={overview}  alt="logo" /></a>
           <a className="rowvertical" href="/"><img src={rowvertical}  alt="logo" /></a>
           </div>
           </div>
           <div className="flex secondbm-layer">
           <p>Branch </p>
           <div className="flex search">
          <input className="searchspace" type="search" placeholder="Search for visual account"/>
           <a href="/"><img src={search}  alt="logo" /></a>
           </div>
           </div>
           <div className=" flex thirdbm-layer">
           <p><strong>Lekki II</strong> </p>
           <div className="flex manage">
           <span>Manage</span><a href="/"><img src={eye}  alt="logo" /></a>
           </div>           
           </div>
           <div className="flex flex-column bank-layers">
            <div className="flex layer1">
                  <div>Bank Name</div>
                  <div>Account Number</div>
                  <div></div>
                  <div>Total Inflow</div>
                  <div></div>
            </div>
           <div className="flex layers">
                  <div><img className="banklogo" src={polaris}  alt="logo" /><span>Polaris Bank Limited</span></div>
                  <div>08023221144 <img src={copy}  alt="logo" /></div>
                  <div className="dodo ikeja "> <Icon type='formatsquareblue'/>Dodo - Ikeja</div>
                  <div className="layers-text"> NGN 100,000.00</div>
                  <div> <img src={more}  alt="logo" /></div>
           </div>
           <div className="flex layers">
                  <div><img className="banklogo" src={guaranty}  alt="logo" /><span>Guaranty Trust Bank</span></div>
                  <div>08023221144 <img src={copy}  alt="logo" /></div>
                  <div className="dodo lekki"> <Icon type='formatsquare'/>Dodo - Lekki II</div>
                  <div className="layers-text"> NGN 77,000.00</div>
                  <div> <img src={more}  alt="logo" /></div>
           </div>
           <div className="flex layers">
                  <div><img className="banklogo" src={providus}  alt="logo" /><span>Providus Bank PLC</span></div>
                  <div>08023221144 <img src={copy}  alt="logo" /></div>
                  <div className="dodo lekki"> <Icon type='formatsquare'/>Dodo - Lekki III</div>
                  <div className="layers-text"> NGN 100,000.00</div>
                  <div> <img src={more}  alt="logo" /></div>
           </div>
           <div className="flex layers">
                  <div><img className="banklogo" src={first}  alt="logo" /><span>First Bank of Nigeria</span></div>
                  <div>08023221144 <img src={copy}  alt="logo" /></div>
                  <div className="dodo abuja"> <Icon type='formatsquarepurple'/>Dodo - Abuja</div>
                  <div className="layers-text"> NGN 100,000.00</div>
                  <div> <img src={more}  alt="logo" /></div>
           </div>
           </div>
            </div>

        </div>
        <div className="flex right"></div>
      </div>
    );
  }
  
};
