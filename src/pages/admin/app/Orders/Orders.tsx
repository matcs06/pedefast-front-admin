import styles from "./Orders.module.scss"
import instace from "../../../../api/hello"
import { useEffect } from "react"
export default function Orders() {
   console.log("entrou")
   let token: any = ""
   if (typeof window !== 'undefined') {
      token = String(localStorage.getItem("token"))
   }



   async function loadOrders() {
      const user_id = String(localStorage.getItem("user_id"))
      console.log(user_id)
      const response = await instace.get(`order/?user_id=${user_id}`, {
         headers: {
            Authorization: "Bearer " + token,
         },
      })
      return response.data
   }

   useEffect(() => {
      console.log(loadOrders())
   }, [])

   return (
      <div className={styles.mainContainer}>

      </div>
   )
}