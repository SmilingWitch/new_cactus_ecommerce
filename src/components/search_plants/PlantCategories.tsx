"use client"
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'
import style from "../../../public/styles/Search.module.css"
import ProductCardSearch from './ProductCardSearch';
import { useState, useEffect } from 'react';
import HeaderCategories from '../HeaderCategories';
import { IoIosArrowDown } from "react-icons/io";

export default function PlantCategories(){
    
    const param = useParams();
    const router = useRouter();
    const category = param.categories;

    //variables
    let allFromLocalStorage = []
    let filteredCategory: any  = []

    if(typeof window !== 'undefined'){
        const item = sessionStorage.getItem('all_categories');
        if(item !== null){
            allFromLocalStorage = JSON.parse(item) || []
            console.log("allFromLocalStorage",allFromLocalStorage)
            filteredCategory = allFromLocalStorage.filter( (category: any) => category.category === "Succulents"  ||  category.category === "Cactus" )
            console.log("filteredCategory", filteredCategory)
        
          }
    }


    const validCategories = ['All', 'Cactus', 'Succulents'];
    const categoryString = typeof category === 'string' ? category : '';
    const [visible, setVisible] = useState(false);
    const options = ["Price", "Date", "Popular"];
    const [plants, SetPlants] = useState(filteredCategory)
    const [isMounted, setIsMounted] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Date");
    const [formValue, setFormValue] = useState({
      type: "Date" 
    });

    useEffect(() => {
      setIsMounted(true); 
   }, []);
  

    const handleClick = (option: string) => {
      setFormValue(prevState => ({
        ...prevState,
        type: option
      }));
    };
  
    const handleCategoryChange = (category: string) => {
      router.push(`/categories/plants/${category}`);
    }

    if (!validCategories.includes(categoryString)) {
      // Redirige a una página de error o a otro lugar
      router.replace('/error');
      return null;
    }

    if (!isMounted) {
      return null; // Or some placeholder content
     }


    return(
      <div className={style.cont}>
      <div className={style.header}>
          <HeaderCategories url = "/images/icons8-cactus-60.png" header = "Plants"/>
      </div>
      <div className="bx">
          <div className={style.search}>
              <div className={style.result}>
                  <span>Search Result for <span className={style.result_search}>{categoryString}</span></span> 
                  <span>Results
                  {category === "All" ? 
                    <span className={style.span}>({plants.length})</span>
                    :
                    <span className={style.span}>({plants.filter((accesories: any) => accesories.category === category).length})</span>
                    }
                    </span>
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
                            <div key={index} onClick={() =>{ handleClick(option); setVisible(false);setSelectedOption(option)}} className={style.option}>
                              {option}
                            </div>
                          ))}

                    </div>}
                  </div>
                  
              </div>
          </div>

          <div className={style.plats_bx}>
          {category === "All" ? 
            plants.map((item: any) => {
                return <ProductCardSearch key={item.id}  url = {item.image} price= {item.cost} amount = {1} url_redirect= {`/categories/accesories/${category}/${item.id}`} name = {item.name}/>
            })
            
            :
            plants.filter((accesories: any) => accesories.category === category).map((item: any) => {
                return <ProductCardSearch key={item.id}   url = {item.image} price= {item.cost} amount = {1} url_redirect= {`/categories/accesories/${category}/${item.id}`} name = {item.name}/>
            })
            }

          </div>
  
      </div>
      
  </div>
    )
}