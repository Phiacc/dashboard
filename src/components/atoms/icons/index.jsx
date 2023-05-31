import React from "react";
import welcome from '../../../assets/svg/welcome.svg';
import compliance from '../../../assets/svg/compliance.svg';
import overview from '../../../assets/svg/overview.svg';
import products from '../../../assets/svg/products.svg';
import customers from '../../../assets/svg/customers.svg';
import orders from '../../../assets/svg/orders.svg';
import wallet from '../../../assets/svg/wallet.svg';
import transaction from '../../../assets/svg/transactions.svg';
import virtualaccount from '../../../assets/svg/virtual-accounts.svg';
import livemode from '../../../assets/svg/live-mode.svg';
import settings from '../../../assets/svg/settings-t1.svg';
import audit from '../../../assets/svg/audit-logs.svg';


export const Icon = (props) => {
    if (props.type === "welcome") {
        return (
            <div className="flex flex-column side-bar mobileview">
              <div className="flex flex-column">
              <div className="block" >
            <a href="/">
            <img src={welcome}  alt="logo" /><span className="sidebar-text">Welcome</span> 
            </a>
          </div>
          <div className="mt-5 block1" >
          <a href="/">
          <img src={compliance}  alt="logo" /> <span className="sidebar-text">Compliance</span> 
          </a>
        </div>
        <div className="mt-5 block" >
          <a href="/">
          <img src={overview}  alt="logo" /><span className="sidebar-text">Overview</span>
          </a>
        </div>
              </div>

        <h4>BUSINESS</h4>
        <div className="flex flex-column ">
        <div className="block">
            <a href="/">
            <img src={products}  alt="logo" /><span className="sidebar-text">Products</span> 
            </a>
          </div>
          <div className="mt-5 block1" >
          <a href="/">
          <img src={customers}  alt="logo" /> <span className="sidebar-text">Customers</span> 
          </a>
        </div>
        <div className="mt-5 block" >
          <a href="/">
          <img src={orders}  alt="logo" /><span className="sidebar-text">Orders</span>
          </a>
        </div>
        </div>

        <h4>PAYMENT</h4>
        <div className="flex flex-column">
        <div>
            <a href="/">
            <img src={wallet}  alt="logo" /><span className="sidebar-text">Wallets</span> 
            </a>
          </div>
          <div className="mt-5 block1" >
          <a href="/">
          <img src={transaction}  alt="logo" /> <span className="sidebar-text">Transaction</span> 
          </a>
        </div>
        <div className="mt-5 block" >
          <a href="/">
          <img src={virtualaccount}  alt="logo" /><span className="sidebar-text">Virtual Account</span>
          </a>
        </div>
        <div className="flex LSA">
        <div className="mt-5 block" >
          <a href="/">
          <img src={livemode}  alt="logo" /> <span className="sidebar-text">Live Mode</span> 
          </a>
        </div>
        <div className="mt-5 block" >
          <a href="/">
          <img src={settings}  alt="logo" /> <span className="sidebar-text">Settings</span> 
          </a>
        </div>
        <div className="mt-5 block" >
          <a href="/">
          <img src={audit}  alt="logo" /> <span className="sidebar-text">Audit logs</span> 
          </a>
        </div>
        </div>
        </div>
            </div>
        );
      }
      if (props.type === "formatsquare") {
        return (
          <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" color="#EA8A15">
                    <path d="M13.333 4.633v6.734a1.667 1.667 0 0 0-1.967 1.967H4.634a1.667 1.667 0 0 0-1.967-1.967V4.633a1.667 1.667 0 0 0 1.967-1.967h6.734a1.667 1.667 0 0 0 1.967 1.967Z" stroke="#EA8A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.667 3a1.667 1.667 0 1 1-3.335-.001A1.667 1.667 0 0 1 4.667 3ZM14.667 3a1.667 1.667 0 1 1-3.334 0 1.667 1.667 0 0 1 3.334 0ZM4.667 13a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0ZM14.667 13a1.667 1.667 0 1 1-3.335-.001 1.667 1.667 0 0 1 3.335.001Z" stroke="#EA8A15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    </path></svg>
        );
      }
      if (props.type === "formatsquareblue") {
        return (
          <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" color="#1A72F7">
            <path d="M13.333 4.633v6.734a1.667 1.667 0 0 0-1.967 1.967H4.634a1.667 1.667 0 0 0-1.967-1.967V4.633a1.667 1.667 0 0 0 1.967-1.967h6.734a1.667 1.667 0 0 0 1.967 1.967Z" stroke="#1A72F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.667 3a1.667 1.667 0 1 1-3.335-.001A1.667 1.667 0 0 1 4.667 3ZM14.667 3a1.667 1.667 0 1 1-3.334 0 1.667 1.667 0 0 1 3.334 0ZM4.667 13a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0ZM14.667 13a1.667 1.667 0 1 1-3.335-.001 1.667 1.667 0 0 1 3.335.001Z" stroke="#1A72F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path></svg>
        );
      }
      if (props.type === "formatsquarepurple") {
        return (
          <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" color="#B01AF7">
            <path d="M13.333 4.633v6.734a1.667 1.667 0 0 0-1.967 1.967H4.634a1.667 1.667 0 0 0-1.967-1.967V4.633a1.667 1.667 0 0 0 1.967-1.967h6.734a1.667 1.667 0 0 0 1.967 1.967Z" stroke="#B01AF7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.667 3a1.667 1.667 0 1 1-3.335-.001A1.667 1.667 0 0 1 4.667 3ZM14.667 3a1.667 1.667 0 1 1-3.334 0 1.667 1.667 0 0 1 3.334 0ZM4.667 13a1.667 1.667 0 1 1-3.333 0 1.667 1.667 0 0 1 3.333 0ZM14.667 13a1.667 1.667 0 1 1-3.335-.001 1.667 1.667 0 0 1 3.335.001Z" stroke="#B01AF7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path></svg>
        );
      }
    };
    