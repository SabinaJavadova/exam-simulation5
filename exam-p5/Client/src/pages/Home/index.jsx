import React from 'react'
import style from "./index.module.scss"
import Products from '../products'
const Home = () => {
  return (
    <>
    <div className={style["home"]}>
            <div className={style["word-section"]}>
       <div className={style["words"]}>
       <p>WOMEN COLLECTION 2018</p>
        <h2>NEW SEASON</h2>
        <div className={style["button"]}>
          <button>SHOP NOW</button>
        </div>
       </div>
      </div>
    </div>
    <Products/>
    </>
  )
}

export default Home
