import React from "react";

export const Mainsection = (props) => {
  if (props.type === "mainsection") {
    return (
      <div className="flex main-section">
        <div className="flex flex-column middle">
            <p><strong  >Virtual Account Dashboard</strong></p>
            <br />
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
            <div className="flex bottom-area">
hi
            </div>

        </div>
        <div className="flex right">2</div>
      </div>
    );
  }
  
};
