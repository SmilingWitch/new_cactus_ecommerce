import style from "../../public/styles/Contact.module.css"
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export default function Contact(){
    return(
        <div className={style.cont}>
            <div className={style.social_media}>
                <div className={style.name}>Cactus Haven</div>
                <div className={style.slogan}>Unique plants delivered to your doorstep!</div>
                <div className={style.icon_bx}>
                    <FaInstagram className={style.icon}/>
                    <BsTwitterX  className={style.icon}/>
                    <FaFacebookF className={style.icon}/>
                </div>
            </div>
            <div className={style.info}>
                <div className={style.qw}>Questions?</div>
                <div className={style.slogan_info}>We&apos;re here for you 24/7</div>
                <div className={style.contact_bx}>
                    <div className={style.contact}><MdPhone className={style.info_contact}/><span>Contact us at <span className={style.number}>(+123) 000 111 222 333</span></span></div>
                    <div className={style.contact}><MdEmail className={style.info_contact}/><span className={style.email}>hello@cactuscraze.com</span></div>
                </div>
                
            </div>
            

        </div>
    )
}