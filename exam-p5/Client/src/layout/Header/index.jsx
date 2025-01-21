import React from "react";
import { NavLink } from "react-router-dom";
import style from "./index.module.scss";
import { FaUser } from "react-icons/fa";
const Header = () => {
    
    window.onscroll = function() {
        var header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
  return (
    <header>
      <div className={style["container"]}>
        <div className={style["logos"]}>
          <div className={style["between"]}>
            <div className={style["logo"]}>
              <img
                src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png"
                alt=""
              />
            </div>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/products"}>Products</NavLink>
              </li>
              <li>
                <NavLink to={"/add"}>Add</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>

          <div className="ikons">
            <FaUser />
          </div>
        </div>
      </div>


    </header>
  );
};

export default Header;
