import React from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import css from "./Headerr.module.css";
import LowerHeader from "../LowerHeader/LowerHeader";
const Headerr = () => {
  return (
    <>
      <section>
        <div className={css.header__container}>
          <div className={css.logo__continer}>
            {/* logo */}
            <a href="">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon log "
              />

        
            </a>
             <span>
                <SlLocationPin />
              </span>
            <div className={css.delivery}>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
          <div className={css.search}>
            {/* Search   */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search product" />
            <BsSearch size={25} />
          </div>
          <div className={css.order__container}>
            <a href="" className={css.flag}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            {/* three components */}
            <a href="" className={css.signIn}>
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* orders */}
            <a href="" className={css.signIn2}>
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart */}
            <a href="" className={css.cart}>
              {/* icon */}
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader/>
    </>
  );
};

export default Headerr;
