import style from "../../../public/styles/Home.module.css"
import Image from "next/image"
import { GoSearch } from "react-icons/go";

export default function Home(){
    return(
        <div className={style.cont}>
            <div className={style.front_page}>
                <div className={style.header}>
                    <div>
                        <h1>Explore a variety of cactus and succulents for your collection</h1>
                        <h3>Browse by type, size, or featured items!</h3>
                    </div>
                    

                    <div className={style.search_bx}>
                        <div className={style.input_bx}>
                            <input type="text" name="" id="" placeholder="What plant are you searching for?" />
                            <div className={style.icon_bx}><GoSearch className={style.icon}/></div>
                        </div>
                        <div className={style.btn}>
                            <button>Search</button>
                        </div>

                    </div>
                </div>
                
                <div className={style.front_img_bx}>
                    <Image 
                        src="/images/junior-rodriguez-gsCecg8nrAY-unsplash.jpg"  
                        layout="fill"
                        objectFit="cover"></Image>

                </div>
            </div>

        </div>
    )
}