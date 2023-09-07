import styles from "./Orders.module.scss"
import instace from "../../../../api/hello"
import { useEffect, useState } from "react"

interface IOrderInfo {
   customer_name: string;
   customer_address: string;
   customer_phone: string;
   id: string;
   status: string;
   product: string;
}

export default function Orders() {

   const [orders, setOrders] = useState<IOrderInfo[]>([])
   const [selectedOrderDetails, setSelectedOrderDetails] = useState("")

   console.log("entrou")
   let token: any = ""
   if (typeof window !== 'undefined') {
      token = String(localStorage.getItem("token"))
   }


   const OnOrdeDetail = (orderDetail: string) => {
      if (orderDetail == null) {
         orderDetail = "Pedido Vazio"
      }

      setSelectedOrderDetails(orderDetail)
   }


   useEffect(() => {

      async function loadOrders() {
         const user_id = String(localStorage.getItem("user_id"))
         console.log(user_id)
         const response = await instace.get(`order/?user_id=${user_id}`, {
            headers: {
               Authorization: "Bearer " + token,
            },
         })
         setOrders(response.data)
      }

      loadOrders()


   }, [])

   return (
      <div className={styles.mainContainer}>
         <section className={styles.ordersListContainer}>
            <header><h3>Pedidos</h3></header>
            <main>
               {orders.map((order) => (
                  <div className={styles.orderCardContainer} key={order.id} onClick={() => OnOrdeDetail(order.product)}>
                     <div className={styles.CustomerAndOrderNumber}>
                        <p>Pedido #1</p>
                        <p className={styles.customerName}>{order.customer_name}</p>
                     </div>
                     <div className={styles.orderStatus} style={{ backgroundColor: order.status == "opened" ? "#0FA958" : "#F24E1E" }}>
                        {order.status == "opened" ? "Aberto" : "Fechado"}
                     </div>


                  </div>
               ))}
            </main>
         </section>
         <section className={styles.orderDetailContainer}>
            <div className={styles.orderDetailTextWrapper}>
               <label htmlFor="">Detalhes do Pedido</label>
               <textarea

                  className={styles.detailsTextArea}
                  cols={20}
                  rows={30}
                  readOnly
                  disabled
                  value={decodeURIComponent(selectedOrderDetails)} />
            </div>
         </section>
      </div>
   )
}