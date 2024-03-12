"use client"
import style from "../../public/styles/CartCard.module.css"
import Image from "next/image"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { useState, useEffect } from "react";

interface MyProps {
    id: number,
    qty: number,
    name: string,
    image: string,
    cost: number,
    updateProduct: (products: boolean) => void;
}

export default function CartCard(props: React.PropsWithChildren<MyProps>){

    let products: any = []
    if (typeof window !== 'undefined') {
        const item = localStorage.getItem('products');
        if (item !== null) {
            products = JSON.parse(item) || [];
        }
    }

/*-----------------------------INCREMENT ITEM---------------------------- */
    const increment = (qty: number, products: any) => {
        // Encontrar el índice del producto por ID
        const productIndex = products.findIndex((product: any) => product.id === props.id);
        if (productIndex > -1) {
            // Verificar si la cantidad es menor o igual a 20
            if (qty < 20) {
                products[productIndex].qty += 1;
            } else {
                products[productIndex].qty = 20;
            }
            // Actualizar el sessionStorage
            localStorage.setItem('products', JSON.stringify(products));
    
            // Actualizar el estado de los productos 
            props.updateProduct(products[productIndex]);
        }
    };

/*-----------------------------DECREMENT ITEM---------------------------- */
    const decrement = (qty: number, products: any) => {
        // Encontrar el índice del producto por ID
        const productIndex = products.findIndex((product: any) => product.id === props.id);
            console.log("productIndex",productIndex)
            // Verificar si la cantidad es menor o igual a 20
            if (qty > 1) {
                products[productIndex].qty -= 1;
                // Actualizar el sessionStorage
                localStorage.setItem('products', JSON.stringify(products));
    
                // Actualizar el estado de los productos 
                props.updateProduct(products[productIndex]);  
            } else {
                const filtered = products.filter((product: any) => product.id !== props.id);
                console.log("FILTERED",filtered)
                // Almacenar el arreglo filtrado en el almacenamiento local
                localStorage.setItem('products', JSON.stringify(filtered));
                window.dispatchEvent(new Event('storage'));
                window.dispatchEvent(new CustomEvent('cart'));
            } 
    };

    /*-----------------------------DELETE ITEM---------------------------- */
    const deleteItem = (id: number, products: any) => {
        const filtered = products.filter((product: any) => product.id !== props.id);
        console.log("FILTERED",filtered)
        // Almacenar el arreglo filtrado en el almacenamiento local
        localStorage.setItem('products', JSON.stringify(filtered));
        window.dispatchEvent(new Event('storage'));
        window.dispatchEvent(new CustomEvent('cart'));
        
    };

    
    
    return(
        <div className={style.card}>
            <div className={style.info_bx}>
                <div className={style.image_bx}>
                    <Image src = {`https://cactusshopi.onrender.com${props.image}`}
                            layout="fill"
                            objectFit="cover"
                            alt = "Description"/>
                </div>
                <div className={style.info}>
                    <div className={style.name}>{props.name}</div>
                    <div className={style.price}>$ {props.cost}</div>
                </div>
            </div>
            
            <div className={style.bx}>
                <div className={style.qty_info}>
                    <div className={style.btn} onClick={() => deleteItem(props.id, products)}>
                        <FaTrashCan className={style.icon} />
                    </div>
                    <div className={style.qty}>
                        <div className={style.btn_bx}>
                            <span className={style.icon_qty} onClick={() => decrement(props.qty, products)}><FaMinus /></span>
                            <span>{props.qty}</span>
                            <span className={style.icon_qty} onClick={() => increment(props.qty, products)}><FaPlus /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}