import style from "../../public/styles/PickCard.module.css"
import Image from "next/image"


interface MyComponentProps {
    url: string;
    header: string;
    secundary_header: string
  }

export default function PickCard(props: React.PropsWithChildren<MyComponentProps>){
    return(
        <div className={style.card}>
            <Image 
                src={props.url}  
                layout="fill"
                objectFit="cover"
                alt = "Description"></Image>
            <div className={style.cont}>
                <div className={style.header}>{props.header}</div>
                <div className={style.secundary_header}>{props.secundary_header}</div>
                <div className={style.btn_bx}>
                    <button>Discover</button>
                </div>
            </div>
        </div>
    )
}