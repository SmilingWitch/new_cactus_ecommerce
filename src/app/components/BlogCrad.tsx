import style from "../../../public/styles/BlogCard.module.css"
import Image from "next/image"

interface MyComponentProps {
    url: string;
    header: string;
    secundary_header: string
  }


export default function BlogCard(props: React.PropsWithChildren<MyComponentProps>){
    return(
        <div className={style.card}>
            <div className={style.image_bx}> 
                <Image src={props.url} 
                        layout="fill"
                        objectFit="cover"
                        alt = "Description"/>
            </div>
            <div className={style.info}>
                <div>
                    <div className={style.tittle}>{props.header}</div>
                    <div className={style.text}>{props.secundary_header}</div>
                </div>
                <div className={style.writer}>
                    <Image className = {style.img} src="/images/conjunto_minimalista_de_macetas_para_plantas_si(7).jpg"  
                        width={40}
                        height={40}
                        alt = "Description"/>
                    <div className={style.name}>Dr. Green</div>
                </div>
            </div>

        </div>
    )
}