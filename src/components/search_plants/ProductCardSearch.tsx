import style from "../../../public/styles/ProductCardSearch.module.css"
import Image from "next/image"
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import Link from "next/link"

interface MyComponentProps {
    url: string;
    price: number;
    amount: number;
    url_redirect: string
  }

export default function ProductCardSearch(props: React.PropsWithChildren<MyComponentProps>){
    return(
        <Link href={props.url_redirect}>
            <div className={style.card}>
                <div className={style.image_bx}>
                    <Image 
                    src={props.url} 
                    layout="fill"
                    objectFit="cover"
                    alt = "Description"></Image>
                    <div className={style.heart}><IoHeartOutline className={style.icon}/></div>
                </div>
                <div className={style.info}>
                    <div className={style.name}>Name</div>
                    <div className={style.info_price}>
                        <div>$ {props.price.toFixed(2)} </div> 
                        <div>/ {props.amount} pc</div> 
                    </div>
                </div>

            </div>
        </Link>
    )
}