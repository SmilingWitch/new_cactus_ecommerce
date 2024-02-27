"use client"
import style from "../../../../public/styles/Search.module.css"
import Image from "next/image"

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { useRouter } from "next/navigation";
import HeaderCategories from "../HeaderCategories";
import ProductCardSearch from "../search_plants/ProductCardSearch";


export default function Accesories(){

    const [visible,setVisible] = useState(false)
    const options = ["Date", "Price", "Popular"]
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
        router.push(`/categories/accesories/${category}`);
      };


    return(
        <div className={style.cont}>
            <div className={style.header}>
                <HeaderCategories url = "/images/icons8-garden-gloves-50.png" header = "Accesories"/>
            </div>
            <div className="bx">
                <div className={style.search}>
                    <div className={style.result}>
                        <span>Search Result for ...</span> 
                        <span>Showing 6 results</span>
                        <div className={style.categories_bx}>
                        <div className={style.categories} onClick={() => handleCategoryChange('All')}>All</div>
                            <div className={style.categories} onClick={() => handleCategoryChange('Fertilizers')}>Fertilizers</div>
                            <div className={style.categories} onClick={() => handleCategoryChange('Planters')}>Planters</div>
                            <div className={style.categories} onClick={() => handleCategoryChange('Tools')}>Tools</div>
                            <div className={style.categories} onClick={() => handleCategoryChange('Books')}>Books</div>

                            

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
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1}/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1}/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1}/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1}/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1}/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1}/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1}/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1}/>
                    <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1}/>

                </div>
        
            </div>
            
        </div>
    )
}