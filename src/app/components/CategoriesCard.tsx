import style from "../../../public/styles/CategoriesCrad.module.css"
import Image from "next/image"


interface MyComponentProps {
    name: string;
    url: string;
    redirect_url: string;
    // ... otras props
  }



export default function CategoriesCard(props: React.PropsWithChildren<MyComponentProps>){

    return(
        <div className={style.card}>
            <div>
                <h4>{props.name}</h4>
            </div>
            <div className={style.image_bx}>
                <Image  src="/images/junior-rodriguez-gsCecg8nrAY-unsplash.jpg"  
                        layout="fill"
                        objectFit="cover"
                        alt = "Description"/>
            </div>
        </div>
    )
}