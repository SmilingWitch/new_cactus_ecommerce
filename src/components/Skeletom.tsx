"use client"
import style from "../../public/styles/Skeletom.module.css"
import { CiImageOn } from "react-icons/ci";


export default function Skeletom(){
    return(
        <div className={style.card}>
                <div className={style.image_bx}>
                    <CiImageOn className={style.icon}/>
                </div>
                <div className={style.info}>
                    <div className={style.name}></div>
                    <div className={style.info_price}>
                        <div className={style.child1}>  </div> 
                        <div className={style.child2}> </div> 
                    </div>
                </div>

            </div>
    )
}