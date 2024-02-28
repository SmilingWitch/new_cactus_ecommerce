import style from "../../public/styles/OfferCard.module.css"
import Image from "next/image"

interface MyComponentProps {
    url: string;
  }

export default function OfferCard(props: React.PropsWithChildren<MyComponentProps>){
    return(
        <div className={style.card}>
            <div className={style.header}>
                <div className={style.principal_header}>Cactus Soil</div>
                <div className={style.secundary_header}>by</div>
            </div>
            <div className={style.image_bx}>
                <Image className={style.img} src={props.url}  
                        layout="fill"
                        objectFit="cover"
                        alt = "Description"/>
                <div className={style.descount}>
                    <span>20%</span>
                    <span>OFF</span>

                </div>
            </div>
            <div className={style.btn_bx}>
                    <button>Explore</button>
            </div>
        </div>
    )
}