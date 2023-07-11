import styles from "./login.module.scss"
import pf_logo from "../../../../public/pf_logo.png"
import Image from "next/image"
import { useState } from "react"
import Input from "../../../components/Input/Input"
import Button from "../../../components/Button/Button"
import instace from "../../../api/hello"
import { useUserLogin } from "../../../context/Context"
import Toast from "../../../components/Toast/Toast"

interface SessionData {
   token: string,
   user: {
      username: string,
      user_id: string,
      name: string,

   }
}

interface IToastList {
   id: string;
   backgroundCollor: string;
   title: string;
   description: string;
}

export default function Login() {

   const [userName, setUserName] = useState()
   const [password, setPassword] = useState()
   const [_, setUserInfo] = useUserLogin()
   const [toastList, setToastList] = useState<IToastList[]>([])

   async function onLoginClick() {

      try {
         const response = await instace.post<SessionData>("sessions", {
            username: userName,
            password: password
         })

         localStorage.setItem("username", response.data.user.username)
         localStorage.setItem("user_id", response.data.user.user_id)
         localStorage.setItem("token", response.data.token)
         localStorage.setItem("full_name", response.data.user.name)



         const userInfoObject = {
            username: response.data.user.username,
            user_id: response.data.user.user_id,
            token: response.data.token

         }

         setUserInfo(userInfoObject)



         window.location.pathname = ("/admin/app/")

      } catch (error) {
         const newToast: IToastList = {
            id: String(toastList.length + 1),
            backgroundCollor: "#d9534f",
            title: "Erro",
            description: `Erro ao criar usuário informacoes!`
         }

         setToastList([...toastList, newToast])
      }

   }


   return (
      <div className={styles.mainContainer}>
         <header>
            <Image src={pf_logo} width={100} height={100} alt="" />
         </header>
         <main>
            <div className={styles.inputContainer}>
               <Input setValue={setUserName} type="text" value={userName} placeholder={"Nome do Usuário"} nome={"username"} />
               <Input setValue={setPassword} type="password" value={password} placeholder={"Senha"} nome={"password"} />
            </div>
            <div className={styles.buttonContainer} onClick={onLoginClick}>
               <Button>Entrar</Button>
            </div>
         </main>
         <Toast toastList={toastList} setToast={setToastList} />
      </div>
   )

}