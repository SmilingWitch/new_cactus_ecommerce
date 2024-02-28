import style from "../../public/styles/TrendingCard.module.css"
import Image from "next/image"
import { IoHeart } from "react-icons/io5";


interface MyComponentProps {
    url: string;
    price: number;
    old_price: number
  }



export default function TrendigCard(props: React.PropsWithChildren<MyComponentProps>){
    return(
        <div className={style.card}>
            
            <div className={style.image_bx}>
                <div className={style.btn_bx}>
                    <button>Add to cart</button>
                </div>
                <Image src={props.url}  
                        layout="fill"
                        objectFit="cover"
                        alt = "Description"/>
            </div>
            <div className={style.info}>
                <div className={style.header}>
                    <div>Succulent plant</div>
                    <IoHeart className={style.icon}/>
                </div>
                <div className={style.price}>
                    <div className={style.actual}>$ {props.price.toFixed(2)}</div>
                    <div className={style.old}>$ {props.old_price.toFixed(2)}</div>

                </div>
                
            </div>

        </div>
    )
}