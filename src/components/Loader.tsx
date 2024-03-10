import ClipLoader from "react-spinners/ClipLoader"
import style from "../../public/styles/Loader.module.css"


export default function Loader(){
    return(
            <div className={style.loader}>
                <div className="sweet-loading">
                    <ClipLoader
                      color="rgb(245, 245, 245)"
                      cssOverride={{}}
                      size={20}
                      speedMultiplier={1}
                    />
                </div>
            </div>       
    )
}