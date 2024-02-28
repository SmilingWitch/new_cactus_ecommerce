"use client"
import style from "../../../../public/styles/Search.module.css"
import Image from "next/image"
import ProductCardSearch from "./ProductCardSearch";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import HeaderCategories from "../HeaderCategories";
import { useRouter } from "next/navigation";


export default function Search(){

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

    const router = useRouter();

    const handleCategoryChange = (category:string) => {
        router.push(`/categories/plants/${category}`);
      };


    return(
        <div className={style.cont}>
            <div className={style.header}>
                {/* */}
                <HeaderCategories url = "/images/icons8-cactus-60.png" header = "Plants"/>
            </div>
            <div className="bx">
                <div className={style.search}>
                    <div className={style.result}>
                        <span>Search Result for ...</span> 
                        <span>Showing 6 results</span>
                        <div className={style.categories_bx}>
                            <div className={style.categories} onClick={() => handleCategoryChange('All')}>All</div>
                            <div className={style.categories} onClick={() => handleCategoryChange('Cactus')}>Cactus</div>
                            <div className={style.categories} onClick={() => handleCategoryChange('Succculents')}>Succulents</div>

                        </div>
                    </div>

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

                <div className={style.plats_bx}>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect=""/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect=""/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect=""/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect=""/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect=""/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect=""/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect=""/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect=""/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect=""/>

                </div>
        
            </div>
            
        </div>
    )
}