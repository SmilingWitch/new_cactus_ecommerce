import style from "../../public/styles/ErrorDialog.module.css"

interface MyProp  {
    error: string,
    visible: boolean
}

export default function ErrorDialog(props: React.PropsWithChildren<MyProp>){

    return(
        props.visible && <div className={style.errorRequest} >
        <div className={style.error}>{props.error}</div></div>
    )
 }
 