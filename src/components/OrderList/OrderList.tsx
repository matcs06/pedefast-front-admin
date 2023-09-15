import { useEffect, useState } from "react";
import styles from "./OrderList.module.scss"
import { AiFillDelete } from "react-icons/ai"

import instace from "../../api/hello";
import { useQuery } from "react-query";

interface IToastList {
   id: string;
   backgroundCollor: string;
   title: string;
   description: string;
}


interface IOrderInfo {
   customer_name: string;
   customer_address: string;
   customer_phone: string;
   id: string;
   status: string;
   product: string;
}

interface IOrderList {
   selectedProductId: string;
   OnOrdeDetail: any;
   token: string;
   user_id: string;
   toastList: any
   setToastList: any
}

export default function OrderList({ setToastList, toastList, token, user_id, selectedProductId, OnOrdeDetail }: IOrderList) {

   const [orderStatusList, setOrderStatusList] = useState<"opened" | "closed" | "ongoing" | "nothing">("opened")




   const fetchOrders = async () => {
      try {
         const response = await instace.get<IOrderInfo[]>(`order/?user_id=${user_id}`, {
            headers: {
               Authorization: "Bearer " + token,
            },
         })
         return response.data
      } catch (error) {

      }

   }

   const { data: orders, isLoading, isError } = useQuery("orders", fetchOrders, {
      refetchInterval: 5000,
   })


   const fielteredOrders = orders && orders.filter((order) => order.status === orderStatusList)


   const onDelete = async (order_id: string) => {


      try {

         await instace.delete(`order/?order_id=${order_id}`, {
            headers: {
               Authorization: "Bearer " + token,
            },
         })

         const newToast: IToastList = {
            id: String(toastList.length + 1),
            backgroundCollor: "#5cb85c",
            title: "Sucesso",
            description: `Pedido removido com sucesso!`
         }

         setToastList([...toastList, newToast])
      } catch (error) {

         const newToast: IToastList = {
            id: String(toastList.length + 1),
            backgroundCollor: "#d9534f",
            title: "Erro",
            description: `Erro ao remover pedido!`
         }

         setToastList([...toastList, newToast])

      }

   }

   useEffect(() => {

   }, [toastList])

   return (
      <section className={styles.ordersListContainer}>
         <header className={styles.headerContainer}>
            <h3>Pedidos</h3>
            <ul>
               <li onClick={() => setOrderStatusList("opened")} style={{ background: orderStatusList == "opened" ? "rgb(231, 230, 229)" : "none", color: orderStatusList == "opened" ? "#514A4A" : "#fff" }}>Abertos</li>
               <li onClick={() => setOrderStatusList("ongoing")} style={{ background: orderStatusList == "ongoing" ? "rgb(231, 230, 229)" : "none", color: orderStatusList == "ongoing" ? "#514A4A" : "#fff" }}>Em Entrega</li>
               <li onClick={() => setOrderStatusList("closed")} style={{ background: orderStatusList == "closed" ? "rgb(231, 230, 229)" : "none", color: orderStatusList == "closed" ? "#514A4A" : "#fff" }}>Fechados</li>
            </ul>
         </header>
         <main>
            {fielteredOrders && fielteredOrders.map((order) => (
               <div style={{ background: order.id == selectedProductId ? "aliceblue" : "rgb(231, 230, 229)" }} className={styles.orderCardContainer} key={order.id} onClick={() => OnOrdeDetail(order.product, order.customer_phone, order.id, order.status)}>
                  <div className={styles.CustomerAndOrderNumber}>
                     <p>Pedido:  #{order.id.substring(30)}</p>
                     <p className={styles.customerName}>{order.customer_name}</p>
                  </div>
                  <div>

                     <div className={styles.deleteOrder} onClick={() => onDelete(order.id)}>
                        <AiFillDelete className={styles.delete} size={20} />
                     </div>
                  </div>
               </div>
            ))}
         </main>
      </section>
   )
}