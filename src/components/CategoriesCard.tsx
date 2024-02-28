import style from "../../public/styles/CategoriesCrad.module.css"
import Image from "next/image"
import Link from "next/link"


interface MyComponentProps {
    name: string;
    url: string;
    redirect_url: string;
    // ... otras props
  }



export default function CategoriesCard(props: React.PropsWithChildren<MyComponentProps>){

    return(
        <Link href={props.redirect_url}>
            <div className={style.card}>
                <div className={style.header}>
                    <h4>{props.name}</h4>
                </div>
                <div className={style.image_bx}>
                    <Image  src={props.url}  
                            layout="fill"
                            objectFit="cover"
                            alt = "Description"/>
                </div>
            </div>
        </Link>
    )
}