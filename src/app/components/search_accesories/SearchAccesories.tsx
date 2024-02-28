"use client"
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'
import style from "../../../../public/styles/Search.module.css"

import { useState } from 'react';
import HeaderCategories from '../HeaderCategories';
import { IoIosArrowDown } from "react-icons/io";
import ProductCardSearch from '../search_plants/ProductCardSearch';


export default function SearchAccesories(){

    const validCategories = ["All","Fertilizers", "Planters", "Tools", "Books"];
    const param = useParams()
    const router = useRouter()
    const category = param.categories; // Elimina "/plants/" de la URL
    console.log("Categoria",category)
    const categoryString = typeof category === 'string' ? category : '';
    const [visible,setVisible] = useState(false)
    const options = ["Date", "Price", "Popular"]
    const [selectedOption, setSelectedOption] = useState("Date");

    const [formValue, setFormValue] = useState({
        type: "Date" 
     });

    if (!validCategories.includes(categoryString)) {
      // Redirige a una página de error o a otro lugar
      router.replace('/error');
      return null;
    }

    const handleClick = (option:string) => {
        
        setFormValue(prevState => ({
            ...prevState,
            type: option
        }));
    };

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
                  <span>Search Result for <span className={style.result_search}>{categoryString}</span></span> 
                  <span>Showing 6 results</span>
                  <div className={style.categories_bx}>
                  <div className={categoryString === 'All' ? `${style.categories}  ${style.active}`: `${style.categories} `} onClick={() => handleCategoryChange('All')}>All</div>
                    <div className={categoryString === 'Fertilizers' ? `${style.categories}  ${style.active}`: `${style.categories} `} onClick={() => handleCategoryChange('Fertilizers')}>Fertilizers</div>
                    <div className={categoryString === 'Planters' ? `${style.categories}  ${style.active}`: `${style.categories} `} onClick={() => handleCategoryChange('Planters')}>Planters</div>
                    <div className={categoryString === 'Tools' ? `${style.categories}  ${style.active}`: `${style.categories} `} onClick={() => handleCategoryChange('Tools')}>Tools</div>
                    <div className={categoryString === 'Books' ? `${style.categories}  ${style.active}`: `${style.categories} `} onClick={() => handleCategoryChange('Books')}>Books</div>
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
                            <div key={index} onClick={() =>{ handleClick(option); setVisible(false), setSelectedOption(option)}} className={style.option}>
                              {option}
                            </div>
                          ))}

                    </div>}
                  </div>
                  
              </div>
          </div>

          <div className={style.plats_bx}>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= {`/categories/accesories/${category}/1`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect={`/categories/accesories/${category}/2`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect={`/categories/accesories/${category}/3`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect={`/categories/accesories/${category}/4`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect={`/categories/accesories/${category}/5`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect={`/categories/accesories/${category}/6`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect={`/categories/accesories/${category}/7`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect={`/categories/accesories/${category}/8`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect={`/categories/accesories/${category}/9`}/>

          </div>
  
      </div>
      
  </div>
    )
}