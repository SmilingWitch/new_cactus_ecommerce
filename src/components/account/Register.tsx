"use client"
import style from "../../../public/styles/Register.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Register(){

    const [formValue, SetFormValue] = useState(
        {   name : '',
            last_name: '',
            username:'',
            password:'',
            email: '',
            image: null
          }
    )

    const handleChange= (event: any) => {
        SetFormValue({
          ...formValue,
          [event.target.name]:event.target.value
        })
      }

      const handleSubmit = async (e:any) => {
        e.preventDefault();
       /* setLoading(true)*/
       console.log(formValue)
      try{
        console.log(formValue)
        const res = await axios.post('https://cactusshopi.onrender.com/user/register/', formValue)
        console.log("response",res.data)
        /*setError('')*/
        /*setLoading(false)
        setCorrect(true)*/
      }catch(error){
        console.log(error.response)
        /*if (error.response) {
          setLoading(false)
            // El servidor respondió con un estado fuera del rango de 2xx
            setError(error.response.data);
            console.log(error)
          } else if (error.request) {
            alert("Something went wrong. Try in a few minutes!!")
          } else {
            alert("Something went wrong. Try in a few minutes!!")
          }
          if (error.response.status === 500) {
            alert("Something went wrong. Try in a few minutes!!")
          }*/
      }
    }


    return(
        <div className={style.cont}>

            <div className={style.form}>
                <div className={style.logo}>
                    <div className={style.logo_name}><h1>Create your account</h1>{/*Cactus Haven*/}</div>

                </div>
                
                <form action="">
                    <div className={style.input_bx}>
                        <input type = "email" 
                                name = "email"
                                value = {formValue.email}
                                onChange={handleChange}
                                placeholder="user@gmail.com"></input>
                    </div>
                    <div className={style.input_bx}>
                        <input type = "username" 
                                name = "username"
                                value = {formValue.username}
                                onChange={handleChange }
                                placeholder="username"></input>
                    </div>
                    <div className={style.input_bx}>
                        <input type = "password" 
                                name = "password"
                                value = {formValue.password}
                                onChange={handleChange}
                                placeholder="********"></input>
                    </div>
                </form>
                <div className={style.requirement}>
                    <span>La contrasena debe tener al menos:</span>
                    <span>- 8 caracteres</span>
                    <span>- 1caracter especial</span>
                    <span>- 1 mayuscula</span>
                    <span>- 1 numero</span>
                </div>
                <div className={style.btn}>
                    <button onClick={(e) => handleSubmit(e)}>Create account</button>
                </div>

                <div className={style.account}>
                    <div>Ya tienes una cuenta?</div>
                    <Link href="/account/login"><div className={style.log}>Login</div></Link>
                </div>
            </div>
        </div>
    )
}