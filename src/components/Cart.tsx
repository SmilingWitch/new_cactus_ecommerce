import style from "../../public/styles/Cart.module.css"
import CartCard from "./CartCard"
import HeaderCategories from "./HeaderCategories"

export default function Cart(){
    return(
        <div className={style.cont}>
            <div className={style.header}>
                <HeaderCategories url = "/images/icons8-cart-80.png" header = "My Cart"/>
            </div>
            <div className="bx">
                <div className={style.cart}>
                    <div className={style.card_bx}>
                        <CartCard/>
                        <CartCard/>
                        <CartCard/>
                        <CartCard/>
                        <CartCard/>
                        <CartCard/>
                        <CartCard/>
                        <CartCard/>
                        <CartCard/>
                        <CartCard/>
                    </div>

                    <div className={style.tota_product_card}>

                    </div>
                    
                </div>

            </div>

        </div>
    )
}