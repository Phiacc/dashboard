import React from "react";
import formatsquare from '../../../assets/svg/format-square.svg';
import overview from '../../../assets/svg/overview.svg';
import rowvertical from '../../../assets/svg/row-vertical.svg';
import search from '../../../assets/svg/search-normal.svg';
import eye from '../../../assets/svg/eye.svg';

export const Mainsection = (props) => {
  if (props.type === "mainsection") {
    return (
      <div className="flex main-section">
        <div className="flex flex-column middle">
            <div className="flex first-toparea">
                <strong>Virtual Account Dashboard</strong>
            <br />
           <div className="flex right-toparea">
           <div className="newbranch" direction="row" wrap="no-wrap" order="0" height="auto" class=" newbranch sc-bcXHqe sc-cCjUiG jQgJDY evrjiP">
                <img src={formatsquare}  alt="logo" /><span>Create New Branch</span>
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
            </div>

        </div>
        <div className="flex right"></div>
      </div>
    );
  }
  
};
