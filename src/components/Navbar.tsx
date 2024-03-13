"use client"
import style from "../../public/styles/Navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import{ useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useState, useEffect } from "react";

export default function Navbar(){

   

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


    const authContext = useContext(AuthContext);
        if (!authContext) {
         // Manejar el caso cuando el contexto es null, por ejemplo, mostrando un mensaje de error o redirigiendo al usuario
         return <div>Error: Contexto no disponible</div>;
        }
    const { user } = authContext

      if(!isMounted ){
            return(

                <div className={style.cont}>
            <div className={style.first}>
                <div className={style.logo}>
                    <Image src = "/images/[removal.ai]_db996c9f-aad7-4611-8d6b-c706cacb0c28-screenshot-2024-02-25-200736.png"
                            layout="fill"
                            objectFit="cover"
                            alt = "Description"></Image>
                </div>
                <div className={style.headers}>
                    <Link className={style.link}  href = "/home">Home</Link>
                    <Link className={style.link} href = "/shop">Shop</Link>
                    <Link className={style.link} href = "/categories/plants/All">Cactus & Succulents</Link>
                    <Link className={style.link} href = "/categories/accesories/All">Accesories</Link>
                    <Link className={style.link} href = "/blog">Blog</Link>
                </div>

            </div>
            
            <div className={style.icon_bx}>
                <div className={style.icon}>
                    <Link href = "/shop"><GoSearch/></Link>
                </div>
                <div className={style.icon}>
                    <Link href="/cart"><FaBasketShopping/></Link> 
                   
                </div>
                <div className={style.icon}>
                    <Link href = "/account/register"><FaUser/></Link>

                </div>
                
            
            </div>
        </div>
            )
      }



    return(
        <div className={style.cont}>
            <div className={style.first}>
                <div className={style.logo}>
                    <Image src = "/images/[removal.ai]_db996c9f-aad7-4611-8d6b-c706cacb0c28-screenshot-2024-02-25-200736.png"
                            layout="fill"
                            objectFit="cover"
                            alt = "Description"></Image>
                </div>
                <div className={style.headers}>
                    <Link className={style.link}  href = "/home">Home</Link>
                    <Link className={style.link} href = "/shop">Shop</Link>
                    <Link className={style.link} href = "/categories/plants/All">Cactus & Succulents</Link>
                    <Link className={style.link} href = "/categories/accesories/All">Accesories</Link>
                    <Link className={style.link} href = "/blog">Blog</Link>
                </div>

            </div>
            
            <div className={style.icon_bx}>
                <div className={style.icon}>
                    <Link href = "/shop"><GoSearch/></Link>
                </div>
                <div className={style.icon}>
                    
                    <Link href="/cart"><FaBasketShopping/></Link> 
                    {totalProducts > 0 ?
                   <div className={style.circle}>{totalProducts}</div> :
                   null}
                    
                </div>
                {user === null ? <div className={style.icon}>
                    <Link href = "/account/register"><FaUser/></Link>
                </div> :
                <div className={style.icon}>
                    <div className={style.user}>
                    <Image src = "/images/imagenPorDefecto.png"
                            layout="fill"
                            objectFit="cover"
                            alt = "Description"/>
                    </div>

                </div>
                }
                
            </div>
        </div>
    )
}