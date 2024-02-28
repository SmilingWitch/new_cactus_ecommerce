import style from "../../public/styles/SideBar.module.css"
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
        props.visible && <div className={style.cont1} onClick={() => props.setVisible(false)}>
            <div className={style.bx} onClick = {(event) => {event.stopPropagation()}}>
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
                    <Link className={style.link}  href = "/home" onClick={() => props.setVisible(false)}>Home</Link>
                    <Link className={style.link} href = "/shop" onClick={() => props.setVisible(false)}>Shop</Link>
                    <Link className={style.link} href = "/categories/plants/All" onClick={() => props.setVisible(false)}>Cactus & Succulents</Link>
                    <Link className={style.link} href = "/categories/accesories/All" onClick={() => props.setVisible(false)}>Accesories</Link>
                    <Link className={style.link} href = "/blog" onClick={() => props.setVisible(false)}>Blog</Link>
                </div>
            </div>
        </div>
    )
}