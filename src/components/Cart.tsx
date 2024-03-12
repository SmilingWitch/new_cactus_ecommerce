"use client"
import style from "../../public/styles/Cart.module.css"
import CartCard from "./CartCard"
import HeaderCategories from "./HeaderCategories"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Cart(){
    const router = useRouter()

    let productsFromLocalStorage = []
    let totalPrice = 0
    if(typeof window !== "undefined"){
       const item = localStorage.getItem('products')
       if(item !== null){
        productsFromLocalStorage = JSON.parse(item) || [];
       }
    }

    const [products, SetProducts] = useState(productsFromLocalStorage)
    const [price, SetPrice] = useState(totalPrice)
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        setIsMounted(true); 

        const handleStorageChange = () => {
            // Recuperar el arreglo actualizado del almacenamiento local
            const item = localStorage.getItem('products')
            let updatedProducts =[]
            if(item !== null){
                updatedProducts = JSON.parse(item) || [];
                
            }
            // Actualizar el estado de los productos
            SetProducts(updatedProducts);
            console.log( " updatedProducts",updatedProducts)
        };
    
        // Agregar el eventListener
        window.addEventListener('storage', handleStorageChange);
    
        // Limpiar el eventListener cuando el componente se desmonte
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };

      }, []);

      useEffect(() => {
        // Calcular el precio total cada vez que el arreglo de productos cambie
        const total = products.reduce((acc: number, product: any) => acc + (product.qty * product.price), 0);
        SetPrice(total); // Actualizar el estado del precio total
      }, [products]); // Dependencia: el arreglo de productos

      const updateProduct = (updatedProduct: any) => {
        // Actualizar el producto en el estado
        SetProducts((prevProducts: any) => {
            return prevProducts.map((product: any) => 
                product.id === updatedProduct.id ? updatedProduct : product
            );
        });
    };

    const redirect = () => {
        router.push("/shop")
    }
      

      if (!isMounted) {
        return <div className={style.cont1}>
        <div className="bx">
             <div className={style.emptyCart}>
                 <h1>Ready to fill your cart?</h1>
                 <div className={style.btnBx}> <button onClick={() => redirect()}>Shop Now</button></div>
                 <div className={style.imgBx}>
                     <Image className={style.img}
                         src="/images/empty-cart.png"  
                         layout="fill"
                         objectFit="cover"
                         alt = "Description"></Image>
                 </div>

             </div>
         </div>
        </div>
      }

    return(
         products.length === 0  ? 
         <div className={style.cont1}>
            <div className="bx">
                 <div className={style.emptyCart}>
                     <h1>Ready to fill your cart?</h1>
                     <div className={style.btnBx}> <button onClick={() => redirect()}>Shop Now</button></div>
                     <div className={style.imgBx}>
                         <Image className={style.img}
                             src="/images/empty-cart.png"  
                             layout="fill"
                             objectFit="cover"
                             alt = "Description"></Image>
                     </div>

                 </div>
             </div>
            </div>
            :  
        <div className={style.cont}>
            
            <div className={style.header}>
                <HeaderCategories url = "/images/icons8-cart-80.png" header = "My Cart"/>
            </div> 
                  
            <div className="bx">
                <div className={style.tota_product_card}>
                    <div className={style.header_card}>
                        <span>Estimated total({products.length} items):</span> 
                        <span>$ {price}</span>
                    </div>
                    <div className={style.btn}><button>Checkout ({products.length})</button></div>
                </div>
                <div className={style.items}>Items({products.length})</div>
                <div className={style.cart}>
                    <div className={style.card_bx}>
                        {products.map((item: any) => {
                            return <CartCard key = {item.id} id = {item.id} qty = {item.qty} cost = {item.price} name = {item.name} image = {item.image} updateProduct = {updateProduct}/>
                        })}
                    </div>
                    
                </div>
                

            </div>

        </div>
    )
}