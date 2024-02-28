"use client"
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'
import style from "../../../../public/styles/Search.module.css"
import ProductCardSearch from './ProductCardSearch';
import { useState } from 'react';
import HeaderCategories from '../HeaderCategories';
import { IoIosArrowDown } from "react-icons/io";

export default function PlantCategories(){
    const validCategories = ['All', 'Cactus', 'Succulents'];
    const param = useParams()
    const router = useRouter()
    const category = param.categories; // Elimina "/plants/" de la URL
    console.log("Categoria",category)
    const categoryString = typeof category === 'string' ? category : '';


    if (!validCategories.includes(categoryString)) {
      // Redirige a una página de error o a otro lugar
      router.replace('/error');
      return null;
    }

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



    const handleCategoryChange = (category:string) => {
        router.push(`/categories/plants/${category}`);
      };


    return(
      <div className={style.cont}>
      <div className={style.header}>
          <HeaderCategories url = "/images/icons8-cactus-60.png" header = "Plants"/>
      </div>
      <div className="bx">
          <div className={style.search}>
              <div className={style.result}>
                  <span>Search Result for <span className={style.result_search}>{categoryString}</span></span> 
                  <span>Showing 6 results</span>
                  <div className={style.categories_bx}>
                      <div className={categoryString === 'All' ? `${style.categories}  ${style.active}`: `${style.categories} `} onClick={() => handleCategoryChange('All')}>All</div>
                      <div className={categoryString === 'Cactus' ? `${style.categories}  ${style.active}`: `${style.categories} `} onClick={() => handleCategoryChange('Cactus')}>Cactus</div>
                      <div className={categoryString === 'Succulents' ? `${style.categories}  ${style.active}`: `${style.categories} `} onClick={() => handleCategoryChange('Succulents')}>Succulents</div>

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
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= {`/categories/plants/${category}/1`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= {`/categories/plants/${category}/1`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= {`/categories/plants/${category}/1`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= {`/categories/plants/${category}/1`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= {`/categories/plants/${category}/1`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= {`/categories/plants/${category}/1`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= {`/categories/plants/${category}/1`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= {`/categories/plants/${category}/1`}/>
              <ProductCardSearch  url = "/images/conjunto_minimalista_de_macetas_para_plantas_si(3).jpg" price= {5.00} amount = {1} url_redirect= {`/categories/plants/${category}/1`}/>

          </div>
  
      </div>
      
  </div>
    )
}