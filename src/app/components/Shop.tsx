"use client"
import style from "../../../public/styles/Shop.module.css"
import { useState } from "react"
import HeaderCategories from "./HeaderCategories"
import ProductCardSearch from "./search_plants/ProductCardSearch"
import { IoIosArrowDown } from "react-icons/io";

export default function Shop(){
    const [visible,setVisible] = useState(false)
    const options = ["Price", "Date", "Popular"]
    const [selectedOption, setSelectedOption] = useState("Date");

    const [formValue, setFormValue] = useState({
        type: "Date" 
     });

    const handleClick = (option:string) => {
        setSelectedOption(option);
        setFormValue(prevState => ({
            ...prevState,
            type: option
        }));
    };





    return(
        <div className={style.cont}>
      <div className={style.header}>
          <HeaderCategories url = "/images/icons8-shop-80.png" header = "Shop"/>
      </div>
      <div className="bx">
      <div className={style.search}>
              <div className={style.filter}>
                  <div className={style.sort}>
                      Sort by:
                  </div>
                  <div className={style.input_bx}>
                      <div className={style.input} onClick = {()=> setVisible(!visible)}>
                          <div className={style.selectedType}>{selectedOption}</div>
                          <div className={style.selectIcon} onClick = {()=> setVisible(!visible)}><IoIosArrowDown/></div>
                      </div>
                  
                  
                      {visible && <div className={style.options}>
                          {options.map((option, index) => (
                            <div key={index} onClick={() =>{ handleClick(option); setVisible(false)}} className={style.option}>
                              {option}
                            </div>
                          ))}

                    </div>}
                  </div>
                  
              </div>
          </div>
          </div>
          <div className="bx">
            <div className={style.plats_bx}>
                <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= "/shop/1"/>
                <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= "/shop/1"/>
                <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= "/shop/1"/>
                <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= "/shop/1"/>
                <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= "/shop/1"/>
                <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= "/shop/1"/>
                <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= "/shop/1"/>
                <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= "/shop/1"/>
                <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= "/shop/1"/>            
            </div>

          </div>
      </div>
    )
}