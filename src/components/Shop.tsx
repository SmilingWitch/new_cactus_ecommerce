"use client"
import style from "../../public/styles/Shop.module.css"
import { useEffect, useState } from "react"
import HeaderCategories from "./HeaderCategories"
import ProductCardSearch from "./search_plants/ProductCardSearch"
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios"

export default function Shop(){

    // variable
    let allFromsessionStorage = [];
    if (typeof window !== 'undefined') {
    const item = sessionStorage.getItem('all_categories');
    if (item !== null) {
        allFromsessionStorage = JSON.parse(item) || [];
    }
}


    // states
    const [visible,setVisible] = useState(false)
    const options = ["Price", "Date", "Popular"]
    const [selectedOption, setSelectedOption] = useState("Date");
    const [res, SetRes] = useState(allFromsessionStorage)
    const [isMounted, setIsMounted] = useState(false);

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


    useEffect(() => {
        setIsMounted(true); 
        all()
      }, []);



    const all = async () =>{


        try {
            const response = await axios.get('https://cactusshopi.onrender.com/plants/plant/');
            /*SetRes(response.data)*/
            console.log(response.data)

            const item = sessionStorage.getItem('all_categories');
            SetRes(item ? JSON.parse(item) : null);

            // Obtén los datos del almacenamiento local
            let codigossessionStorage:any = [];
            const item2 = sessionStorage.getItem('all_categories');
            if (item2 !== null) {
                codigossessionStorage = JSON.parse(item2);
            }


            // Obtén los datos de la respuesta de la petición
            let codigosResponse = response.data;

            // Para cada elemento en los datos de la respuesta de la petición
            codigosResponse.forEach((codigoResponse : any) => {
            // Verifica si el elemento ya existe en el almacenamiento local
            let existeEnsessionStorage = codigossessionStorage.some((codigosessionStorage : any) => codigosessionStorage.id === codigoResponse.id);
            
            // Si el elemento no existe en el almacenamiento local, agrégalo
            if (!existeEnsessionStorage) {
                codigossessionStorage.push(codigoResponse);
            }
            });

            // Para cada elemento en el almacenamiento local
            codigossessionStorage.forEach((codigosessionStorage: any, index: any) => {
               // Verifica si el elemento existe en los datos de la respuesta de la petición
               let existeEnResponse = codigosResponse.some((codigoResponse : any) => codigoResponse.id === codigosessionStorage.id);
            
               // Si el elemento no existe en los datos de la respuesta de la petición, elimínalo del almacenamiento local
               if (!existeEnResponse) {
                   codigossessionStorage.splice(index, 1);
               }
            });

            // Guarda los datos actualizados en el almacenamiento local
            sessionStorage.setItem('all_categories', JSON.stringify(codigossessionStorage));
            SetRes(codigossessionStorage);

           } catch(error) {
            console.log(error);
           }    
     }


     if (!isMounted) {
        return null; // Or some placeholder content
       }



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
            {res.map((item: any) => {
                    return <ProductCardSearch key = {item.id} url = {item.image} price= {item.cost} amount = {1} url_redirect= {`/shop/${item.id}`} name = {item.name}/>
            })}
               
         
            </div>

          </div>
      </div>
    )
}