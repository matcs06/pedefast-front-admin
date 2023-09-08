import styles from "./Orders.module.scss"
import instace from "../../../../api/hello"
import { useEffect, useState, useRef } from "react"

import ReactToPrint, { useReactToPrint } from "react-to-print"
import { AiFillDelete } from "react-icons/ai"
import Toast from "../../../../components/Toast/Toast";

interface IOrderInfo {
   customer_name: string;
   customer_address: string;
   customer_phone: string;
   id: string;
   status: string;
   product: string;
}

interface IToastList {
   id: string;
   backgroundCollor: string;
   title: string;
   description: string;
}

export default function Orders() {

   const [orders, setOrders] = useState<IOrderInfo[]>([])
   const [selectedOrderDetails, setSelectedOrderDetails] = useState("")

   const [toastList, setToastList] = useState<IToastList[]>([])

   const componentRef = useRef(null);;


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

      async function loadOrders() {
         const user_id = String(localStorage.getItem("user_id"))
         const response = await instace.get(`order/?user_id=${user_id}`, {
            headers: {
               Authorization: "Bearer " + token,
            },
         })
         setOrders(response.data)
      }

      loadOrders()


   }, [toastList])

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
                     <div>
                        <div className={styles.orderStatus} style={{ backgroundColor: order.status == "opened" ? "#0FA958" : "#F24E1E" }}>
                           {order.status == "opened" ? "Aberto" : "Fechado"}
                        </div>
                        <div className={styles.deleteOrder} onClick={() => onDelete(order.id)}>
                           <AiFillDelete className={styles.delete} size={20} />
                        </div>
                     </div>



                  </div>
               ))}
            </main>
         </section>
         <section className={styles.orderDetailContainer}>

            <div className={styles.orderDetailTextWrapper}>
               <label htmlFor="">Detalhes do Pedido</label>
               <textarea
                  ref={componentRef}
                  className={styles.detailsTextArea}
                  cols={20}
                  rows={30}
                  readOnly
                  disabled
                  value={decodeURIComponent(selectedOrderDetails)} />
               <ReactToPrint
                  trigger={() => <button style={{ cursor: "pointer" }}>Imprimir pedido!</button>}
                  content={() => componentRef.current}
               />
            </div>

         </section>
         <Toast toastList={toastList} setToast={setToastList} />
      </div>
   )
}