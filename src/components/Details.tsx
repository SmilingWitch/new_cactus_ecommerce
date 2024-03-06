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


export default function Details(){

    const param = useParams()
    const id = Number(param.details); // Elimina "/plants/" de la URL
    console.log("ID",id)
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
    const [res, SetRes] = useState(allFromsessionStorage)
    const [isMounted, setIsMounted] = useState(false);
    const [details, SetDetails] = useState(filteredCategory[0]) 

    console.log("Image", details.image)
    

    const handleBack = () => {
        console.log("back")
      router.back();
    };

    useEffect(() => {
        setIsMounted(true); 
      }, []);





      if (!isMounted) {
        return null; // Or some placeholder content
       }

    return(
        <div className={style.cont}>
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
                                        <button>Add to cart</button>
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
                        <ProductCardSearch url ="/images/britta-preusse-p7KKwjP3s68-unsplash.jpg" 
                                            price = {15} amount={1} url_redirect = "/dd" name = "Name"/>
                        <ProductCardSearch url ="/images/andrea-rico-Npfkyf94cik-unsplash.jpg" 
                                            price = {15} amount={1} url_redirect = "/dd" name = "Name"/>
                        <ProductCardSearch url ="/images/stephanie-harvey-T0inbt7nRME-unsplash.jpg" 
                                            price = {15} amount={1} url_redirect = "/dd" name = "Name"/>
                        <ProductCardSearch url ="/images/britta-preusse-p7KKwjP3s68-unsplash.jpg" 
                                            price = {15} amount={1} url_redirect = "/dd" name = "Name"/>
                    </div>
                    
                </div>
                    

                </div>
                    
                
                

            </div>


    )
}