"use client"
import style from "../../../public/styles/NavbarSearch.module.css"
import Image from "next/image"
import Link from "next/link"
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { TiThMenu } from "react-icons/ti";
import { useState, useEffect } from "react";

interface MyComponentProps {
    setVisible: (visible: boolean) => void;
  }


export default function NavbarSearch(props: React.PropsWithChildren<MyComponentProps>){

    let productsFromLocalStorage = []
    if(typeof window !== "undefined"){
       const item = localStorage.getItem('products')
       if(item !== null){
        productsFromLocalStorage = JSON.parse(item) || [];
       }
    }

    const [totalProducts, SetTotalProducts] = useState(productsFromLocalStorage.length)
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true)
        const handleStorageChange = () => {
            // Recuperar el arreglo actualizado del almacenamiento local
            const item = localStorage.getItem('products')
            let updatedProducts =[]
            if(item !== null){
                updatedProducts = JSON.parse(item) || [];
                
            }
            // Actualizar el estado de los productos
            SetTotalProducts(updatedProducts.length);
            console.log( " updatedProducts",updatedProducts)
        };
    
        // Agregar el eventListener
        window.addEventListener('cart', handleStorageChange);
    
        // Limpiar el eventListener cuando el componente se desmonte
        return () => {
            window.removeEventListener('cart', handleStorageChange);
        };

      }, []);

      if(!isMounted ){
            return(

                <div className={style.cont}>
                <div className={style.logo}>
                    <Link href="/home">
                        <Image src = "/images/[removal.ai]_db996c9f-aad7-4611-8d6b-c706cacb0c28-screenshot-2024-02-25-200736.png"
                            layout="fill"
                            objectFit="cover"
                            alt = "Description"/>
                    </Link>
                    
                </div>
                <div className={style.headers}>
                    <div className={style.input_bx}>
                        <input type="text" name="" id="" placeholder="Search..." />
                        <div className={style.icon_bx}><GoSearch className={style.icon}/>
                        </div>
                    </div>
                    
                </div>
            <div className={style.icon_bx}>
                <div className={style.icon}>
                   <Link href="/cart"><FaBasketShopping/></Link> 
                </div>
                <div className={style.icon}>
                    <Link href = "/account/register"><FaUser/></Link>
                </div>
                <div className={style.icon} onClick={() => props.setVisible(true)}>
                    <TiThMenu/>
                </div>
            </div>
            
        </div>

            )
      }


    return(
        <div className={style.cont}>
                <div className={style.logo}>
                    <Link href="/home">
                        <Image src = "/images/[removal.ai]_db996c9f-aad7-4611-8d6b-c706cacb0c28-screenshot-2024-02-25-200736.png"
                            layout="fill"
                            objectFit="cover"
                            alt = "Description"/>
                    </Link>
                    
                </div>
                <div className={style.headers}>
                    <div className={style.input_bx}>
                        <input type="text" name="" id="" placeholder="Search..." />
                        <div className={style.icon_bx}><GoSearch className={style.icon}/>
                        </div>
                    </div>
                    
                </div>
            <div className={style.icon_bx}>
                <div className={style.icon}>
                   <Link href="/cart"><FaBasketShopping/></Link> 
                   {totalProducts > 0 ?
                   <div className={style.circle}>{totalProducts}</div> :
                   null}
                   
                </div>
                <div className={style.icon}>
                    <Link href = "/account/register"><FaUser/></Link>
                </div>
                <div className={style.icon} onClick={() => props.setVisible(true)}>
                    <TiThMenu/>
                </div>
            </div>
            
        </div>
    )
}