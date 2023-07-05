import { useEffect, useState } from "react"
import SideBar from "../../../components/SideBar/SideBar"
import ProductList from "./Product/ProductList/ProductList"
import { verify, decode } from "jsonwebtoken";
import Login from "../login";

interface IPayload {
   exp: string;
}

export default function AdminApp() {

   const [loadApp, setLoadApp] = useState(true)
   let token: any = ""
   if (typeof window !== 'undefined') {
      token = String(localStorage.getItem("token"))
   }

   function isTokenExpired(token: string) {
      const payloadBase64 = token.split('.')[1];
      const decodedJson = Buffer.from(payloadBase64, 'base64').toString();
      const decoded = JSON.parse(decodedJson)
      const exp = decoded.exp;
      const expired = (Date.now() >= exp * 1000)
      return expired
   }

   useEffect(() => {

      token = String(localStorage.getItem("token"))
      try {
         if (isTokenExpired(token)) {
            localStorage.clear()
            window.location.pathname = ("admin/login")
         }

      } catch (error) {
         console.log(error)
      }


      function delay(time: any) {
         return new Promise(resolve => setTimeout(resolve, time))
      }

      delay(1000).then(() => console.log("Aguardar 1 segundo para abrir product list"))


   }, [])

   return (
      <>
         <SideBar defaultComponent={<ProductList />} />
      </>

   )
}