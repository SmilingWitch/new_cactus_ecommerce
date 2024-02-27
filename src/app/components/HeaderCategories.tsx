
import style from "../../../public/styles/Search.module.css"
import Image from "next/image"
import { RiShoppingBag2Fill } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import Link from "next/link"


interface MyComponentProps {
    url:string ;
    header: string;
  }


export default function HeaderCategories(props: React.PropsWithChildren<MyComponentProps>){
   
    return(
        <div className="bx">
                    <div className={style.content}>
                        <div className={style.cont_logo}>
                            <div className={style.icon}>
                            <Image src = {props.url}
                                        width={40}
                                        height={40}
                                        alt="Description"></Image>
                            </div>
                            <div className={style.info}>
                                <div className={style.info_header}><Link href="/home"><span>Home</span></Link> <span>/</span> <span>{props.header}</span></div>
                                <div className={style.icon_cont}>
                                    <div className={style.bx}>
                                        <div>
                                            <span><RiShoppingBag2Fill/></span>
                                            <span>Min. $10</span>
                                        </div>
                                        <div>
                                            <span><MdDeliveryDining/></span>
                                            <span>20-30 min</span>
                                        </div>
                                    </div>
                                </div>                   
                            </div>
                        </div>

                        <div className={style.offer}>
                            <div className={style.image_bx}>
                                <Image src="/images/[removal.ai]_868dacbe-e22b-4b20-923f-7215d01b7759-screenshot-2024-02-26-115344.png"
                                layout="fill"
                                objectFit="cover"
                                alt="Description">
                                </Image>
                                <div className={style.desc}>
                                    -50%
                                </div>

                            </div>
                            <div className={style.text}>
                               <p>On all succulent pots after 9 PM every day!</p> 
                            </div>
                         </div>
                    </div>
                    
                </div>
    )
}