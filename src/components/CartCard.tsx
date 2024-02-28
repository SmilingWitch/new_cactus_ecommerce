import style from "../../public/styles/CartCard.module.css"
import Image from "next/image"
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

export default function CartCard(){
    return(
        <div className={style.card}>
            <div className={style.info_bx}>
                <div className={style.image_bx}>
                    <Image src = "/images/conjunto_minimalista_de_macetas_para_plantas_si(4).jpg"
                            layout="fill"
                            objectFit="cover"
                            alt = "Description"/>
                </div>
                <div className={style.info}>
                    <div className={style.name}>Name</div>
                    <div className={style.price}>$ 5.00</div>
                </div>
            </div>
            
            <div className={style.bx}>
                <div className={style.qty_info}>
                    <div className={style.qty}>
                        <div className={style.qty_bx}>
                            <span>Quantity: </span>
                            <span>1</span>
                        </div>
                        <div className={style.btn_bx}>
                            <span><FaMinus/></span>
                            <span><FaPlus/></span>
                        </div>
                    </div>
                    {/*<div className={style.totalP}>
                         <span>Total: </span>
                         <span>$ 5.00</span>   
                </div>*/}

                    <div className={style.btn}>
                    <FaTrashCan className={style.icon}/>
                </div>
                </div>
                
            </div>
            
            

        </div>
    )
}