"use client"
import style from "../../public/styles/Details.module.css"
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";
import Image from "next/image"
import Link from "next/link"
import { RiArrowLeftSLine } from "react-icons/ri";
import { useRouter } from 'next/navigation';
import ProductCardSearch from "./search_plants/ProductCardSearch";
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation'
import Loader from "./Loader";
import Skeletom from "./Skeletom";
import errorVisible from "./function/errorVisible"
import ErrorDialog from "./ErrorDialog";


export default function Details(){

    const param = useParams()
    const id = Number(param.details);
    const router = useRouter();

    // variable
    let allFromsessionStorage = [];
    let filteredCategory = []
    if (typeof window !== 'undefined') {
        const item = sessionStorage.getItem('all_categories');
        if (item !== null) {
            allFromsessionStorage = JSON.parse(item) || [];
            filteredCategory = allFromsessionStorage.filter((detail: any) => detail.id === id);
        }
    }

    // states
    const [isMounted, setIsMounted] = useState(false);
    const [details, SetDetails] = useState(filteredCategory[0]) 
    const [loader, SetLoader] = useState(false)
    const [objectVisible, SetObjectVisible] = useState(false)
    

    const handleBack = () => {
      router.back();
    };

    function addNewProduct(name: string, price : number, image: string, id: number) {
    
        const item = localStorage.getItem('products')
        let products = []
        if(item !== null){
            // Intentar recuperar el arreglo existente del almacenamiento local
             products = JSON.parse(item) || [];
        }
        const existingProductIndex = products.findIndex((product: any)=> product.id === id);

        if(existingProductIndex >= 0 ){
            products[existingProductIndex].qty += 1
        } else{
            // Si el producto no existe, agregarlo al arreglo con cantidad inicial 1
            products.push({ id: id, name: name, price: price, image: image, qty: 1 });
        }
        // Convertir el arreglo a una cadena JSON
        const productsJson = JSON.stringify(products);
        // Almacenar el arreglo JSON en el almacenamiento local
        localStorage.setItem('products', productsJson);
        loading()
        console.log(localStorage.getItem('products'))

        
    }

    function loading(){
        SetLoader(true);
        setTimeout(() => {
            SetLoader(false);
            errorVisible(SetObjectVisible)
            window.dispatchEvent(new CustomEvent('cart'));  
        }, 2000);
    }
    
    useEffect(() => {
        setIsMounted(true); 
      }, []);


      if (!isMounted) {
        return         <div className={style.cont}>
            
        <div className="bx">
            <div className={style.header}>
                    <div className={style.back} onClick = {handleBack}>
                        <RiArrowLeftSLine className={style.icon}/>
                        <span>Back</span>
                    </div>
            </div>
            <div className={style.details_bx}>
                <div className={style.gallery}>
                    <div className={style.image1}>
                           
                        </div>
                        <div className={style.product_info}>
                            <div className={style.info}>
                                <div className={style.name}>
                                    <span>{details.name}</span>
                                    <div className={style.stars_bx}>
                                    <GoStarFill/>
                                    <GoStarFill/>
                                    <GoStarFill/>
                                    <GoStarFill/>
                                    <GoStar/>
                                    </div>
                                </div>
                                <div className={style.text}>{details.description}</div>
                                <div className={style.btn}>
                                    {
                                    loader === true ? 
                                        <button className={style.loadingBtn}>
                                            <div><Loader/> Loading</div>
                                        </button>
                                        : 
                                        <button onClick={() => addNewProduct( details.name, details.cost , details.image, details.id)}>Add to cart</button>
                                    }
                                </div>
                            </div>
                        </div>
                        
                </div>
            </div>

            <div className={style.similiar}>
                <div className={style.header_similar}>
                        <span>Similar Products</span>
                </div>
                <div className={style.images_bx}>
                    <Skeletom/>
                    <Skeletom/>
                    <Skeletom/>
                    <Skeletom/>
                </div>
            </div>
        </div>
    </div>
       }

    return(
        <div className={style.cont}>
            <ErrorDialog error = "Added to cart!" visible = {objectVisible}/>
            <div className="bx">
                <div className={style.header}>
                        <div className={style.back} onClick = {handleBack}>
                            <RiArrowLeftSLine className={style.icon}/>
                            <span>Back</span>
                        </div>
                </div>
                <div className={style.details_bx}>
                    <div className={style.gallery}>
                        <div className={style.image1}>
                                <Image 
                                src={`https://cactusshopi.onrender.com${details.image}`}
                                layout="fill"
                                objectFit="cover"
                                alt = "Description"></Image>
                            </div>
                            <div className={style.product_info}>
                                <div className={style.info}>
                                    <div className={style.name}>
                                        <span>{details.name}</span>
                                        <div className={style.stars_bx}>
                                        <GoStarFill/>
                                        <GoStarFill/>
                                        <GoStarFill/>
                                        <GoStarFill/>
                                        <GoStar/>
                                        </div>
                                    </div>
                                    <div className={style.text}>{details.description}</div>
                                    <div className={style.btn}>
                                        {
                                        loader === true ? 
                                            <button className={style.loadingBtn}>
                                                <div><Loader/> Loading</div>
                                            </button>
                                            : 
                                            <button onClick={() => addNewProduct( details.name, details.cost , details.image, details.id)}>Add to cart</button>
                                        }
                                    </div>
                                </div>
                            </div>
                            
                    </div>
                </div>

                <div className={style.similiar}>
                    <div className={style.header_similar}>
                            <span>Similar Products</span>
                    </div>
                    <div className={style.images_bx}>
                        <ProductCardSearch url ="/media/plants_image/Guantes_para_jard%C3%ADn_Medida_10_Verde.jpg" 
                                            price = {15} amount={1} url_redirect = "/dd" name = "Name"/>
                        <ProductCardSearch url ="/media/plants_image/What_is_a_Cactus_Plant_.jpg"
                                            price = {15} amount={1} url_redirect = "/dd" name = "Name"/>
                        <ProductCardSearch url ="/media/plants_image/cactus_de_navidad.jpg"
                                            price = {15} amount={1} url_redirect = "/dd" name = "Name"/>
                        <ProductCardSearch url ="/media/plants_image/planta_de_Jade.jpg"
                                            price = {15} amount={1} url_redirect = "/dd" name = "Name"/>
                        <ProductCardSearch url ="/media/plants_image/planta_de_Jade.jpg"
                                            price = {15} amount={1} url_redirect = "/dd" name = "Name"/>
                    </div>
                </div>
            </div>
        </div>


    )
}