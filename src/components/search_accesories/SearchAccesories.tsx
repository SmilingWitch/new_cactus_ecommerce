"use client"
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation'
import style from "../../../public/styles/Search.module.css"
import { useState, useEffect } from 'react';
import HeaderCategories from '../HeaderCategories';
import { IoIosArrowDown } from "react-icons/io";
import ProductCardSearch from '../search_plants/ProductCardSearch';


export default function SearchAccesories(){
    const param = useParams()
    const router = useRouter()
    const category = param.categories; // Elimina "/plants/" de la URL
    const categoryString = typeof category === 'string' ? category : '';

    //variables
    let allFromLocalStorage = []
    let filteredCategory: any  = []

    if(typeof window !== 'undefined'){
        const item = sessionStorage.getItem('all_categories');
        if(item !== null){
            allFromLocalStorage = JSON.parse(item) || []
            filteredCategory = allFromLocalStorage.filter( (category: any) => category.category !== "Succulents"  &&  category.category !== "Cactus" )
        }
    }


    const validCategories = ["All","Fertilizers", "Planters", "Tools", "Books"];
    const [visible,setVisible] = useState(false)
    const options = ["Date", "Price", "Popular"]
    const [selectedOption, setSelectedOption] = useState("Date");
    const [isMounted, setIsMounted] = useState(false);
    const [accesories, SetAccesories] = useState(filteredCategory)
    const [formValue, setFormValue] = useState({
        type: "Date" 
     });

     useEffect(() => {
        setIsMounted(true); 
      }, []);

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
            console.log("CATEGORIA", category)
        };

         

          if (!isMounted) {
            return null; // Or some placeholder content
           }
     
    

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
            {category === "All" ? 
            accesories.map((item: any) => {
                return <ProductCardSearch key={item.id}  url = {item.image} price= {item.cost} amount = {1} url_redirect= {`/categories/accesories/${category}/${item.id}`} name = {item.name}/>
            })
            
            :
            accesories.filter((accesories: any) => accesories.category === category).map((item: any) => {
                return <ProductCardSearch key={item.id}   url = {item.image} price= {item.cost} amount = {1} url_redirect= {`/categories/accesories/${category}/${item.id}`} name = {item.name}/>
            })
            }
              

          </div>
  
      </div>
      
  </div>
    )
}