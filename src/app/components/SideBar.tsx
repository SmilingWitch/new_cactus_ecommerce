import style from "../../../public/styles/SideBar.module.css"
import { CgClose } from "react-icons/cg";
import Link from "next/link"
import Image from "next/image"

interface MyComponentProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
  }

export default function SideBar(props: React.PropsWithChildren<MyComponentProps>){
    
    console.log("visible", props.visible)
    return(
        props.visible && <div className={style.cont1}>
            <div className={style.bx}>
                <div className={style.close}>
                    <div className={style.icon} onClick={() => props.setVisible(false)}>
                        <CgClose/>
                    </div>
                </div>
                <div className={style.logo}>
                    <Image src = "/images/[removal.ai]_db996c9f-aad7-4611-8d6b-c706cacb0c28-screenshot-2024-02-25-200736.png"
                            width={90}
                            height={60}
                            alt="Description"></Image>
                    <div className={style.name}>ShopCactus</div>
                </div>
                <div className={style.header}>
                    <Link className={style.link}  href = "/home">Home</Link>
                    <Link className={style.link} href = "/shop">Shop</Link>
                    <Link className={style.link} href = "/categories/plants/All">Cactus & Succulents</Link>
                    <Link className={style.link} href = "/categories/accesories/All">Accesories</Link>
                    <Link className={style.link} href = "/blog">Blog</Link>
                </div>
            </div>
        </div>
    )
}