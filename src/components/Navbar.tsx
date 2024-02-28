import style from "../../public/styles/Navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import { FaBasketShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";

export default function Navbar(){
    return(
        <div className={style.cont}>
            <div className={style.first}>
                <div className={style.logo}>
                    <Image src = "/images/[removal.ai]_db996c9f-aad7-4611-8d6b-c706cacb0c28-screenshot-2024-02-25-200736.png"
                            width={90}
                            height={60}
                            alt="Description"></Image>
                </div>
                <div className={style.headers}>
                    <Link className={style.link}  href = "/home">Home</Link>
                    <Link className={style.link} href = "/shop">Shop</Link>
                    <Link className={style.link} href = "/categories/plants/All">Cactus & Succulents</Link>
                    <Link className={style.link} href = "/categories/accesories/All">Accesories</Link>
                    <Link className={style.link} href = "/blog">Blog</Link>
                </div>

            </div>
            
            <div className={style.icon_bx}>
                <div className={style.icon}>
                    <Link href = "/shop"><GoSearch/></Link>
                </div>
                <div className={style.icon}>
                    <Link href = "/cart"><FaBasketShopping/></Link> 
                </div>
                <div className={style.icon}>
                    <FaUser/>
                </div>
                
            </div>
        </div>
    )
}