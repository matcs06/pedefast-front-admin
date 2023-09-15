import styles from "./Orders.module.scss"
import instace from "../../../../api/hello"
import { useEffect, useState } from "react"
import { AiFillDelete } from "react-icons/ai"

import Toast from "../../../../components/Toast/Toast";
import OrderDetail from "../../../../components/OrderDetails/OrderDetails"

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
   const [customerPhone, setCustomerPhone] = useState("")
   const [googleLocationLink, setGoogleLocationLink] = useState("")

   const [toastList, setToastList] = useState<IToastList[]>([])
   const [orderStatusList, setOrderStatusList] = useState<"opened" | "closed" | "ongoing" | "nothing">("opened")

   const [selectedProductId, setSelectedProductId] = useState("")
   const [selectedProductStatus, setSelectedProductStatus] = useState<"opened" | "closed" | "ongoing" | "nothing">("nothing")

   const fielteredOrders = orders.filter((order) => order.status === orderStatusList)

   let token: any = ""
   if (typeof window !== 'undefined') {
      token = String(localStorage.getItem("token"))
   }

   const onUpdateOrderStatus = async (changeOrderStatus: string) => {
      try {

         await instace.patch(`/order`,
            {
               order_id: selectedProductId,
               status: changeOrderStatus
            },
            {
               headers: {
                  Authorization: "Bearer " + token,
               }
            }
         )

         const newToast: IToastList = {
            id: String(toastList.length + 1),
            backgroundCollor: "#5cb85c",
            title: "Sucesso",
            description: `Pedido Atualizado com sucesso!`
         }

         setToastList([...toastList, newToast])
      } catch (error) {

         const newToast: IToastList = {
            id: String(toastList.length + 1),
            backgroundCollor: "#d9534f",
            title: "Erro",
            description: `Erro ao atualizar pedido!`
         }

         setToastList([...toastList, newToast])

      }
   }

   const OnOrdeDetail = (orderDetail: string, customerPhone: string, order_id: string, order_status: any) => {

      setSelectedProductId(order_id)
      setSelectedProductStatus(order_status)

      if (orderDetail == null) {
         orderDetail = "Pedido Vazio"
      }
      const separetedLink = orderDetail.split("link")
      setSelectedOrderDetails(separetedLink[0])
      setGoogleLocationLink(separetedLink[1])

      setCustomerPhone(customerPhone)
   }


   const onLocationClick = () => {
      window.open(decodeURIComponent(googleLocationLink))

   }

   const onWhatsAppClick = () => {


      const topMessage = "Olá, recebemos seu pedido, poderia confirmar se está tudo correto? \n\n"

      const fullTopMessage = window.encodeURIComponent(topMessage)

      const wpplink = `https://wa.me/+55${customerPhone}?text=${fullTopMessage + selectedOrderDetails}`
      window.open(wpplink)
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
            <header className={styles.headerContainer}>
               <h3>Pedidos</h3>
               <ul>
                  <li onClick={() => setOrderStatusList("opened")} style={{ background: orderStatusList == "opened" ? "rgb(231, 230, 229)" : "none", color: orderStatusList == "opened" ? "#514A4A" : "#fff" }}>Abertos</li>
                  <li onClick={() => setOrderStatusList("ongoing")} style={{ background: orderStatusList == "ongoing" ? "rgb(231, 230, 229)" : "none", color: orderStatusList == "ongoing" ? "#514A4A" : "#fff" }}>Em Entrega</li>
                  <li onClick={() => setOrderStatusList("closed")} style={{ background: orderStatusList == "closed" ? "rgb(231, 230, 229)" : "none", color: orderStatusList == "closed" ? "#514A4A" : "#fff" }}>Fechados</li>
               </ul>
            </header>
            <main>
               {fielteredOrders.map((order) => (
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
         <div className={styles.sideDetailContainer}>
            <OrderDetail googleLocationLink={googleLocationLink}
               onLocationClick={onLocationClick}
               onUpdateOrderStatus={onUpdateOrderStatus}
               onWhatsAppClick={onWhatsAppClick}
               selectedOrderDetails={selectedOrderDetails}
               selectedProductStatus={selectedProductStatus} />
         </div>

         <Toast toastList={toastList} setToast={setToastList} />
      </div>
   )
}