import styles from "./Orders.module.scss"
import instace from "../../../../api/hello"
import { useEffect, useState } from "react"

import OrderList from "../../../../components/OrderList/OrderList"

import Toast from "../../../../components/Toast/Toast";
import OrderDetail from "../../../../components/OrderDetails/OrderDetails"
import { AiOutlineCloseCircle } from "react-icons/ai"

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

   const [selectedOrderDetails, setSelectedOrderDetails] = useState("")
   const [customerPhone, setCustomerPhone] = useState("")
   const [googleLocationLink, setGoogleLocationLink] = useState("")

   const [toastList, setToastList] = useState<IToastList[]>([])

   const [selectedProductId, setSelectedProductId] = useState("")
   const [selectedProductStatus, setSelectedProductStatus] = useState<"opened" | "closed" | "ongoing" | "nothing">("nothing")

   let width = 740;
   if (typeof globalThis?.window?.innerWidth !== "undefined") {
      width = window.innerWidth;
   }

   const [isPhoneSize, setIsPhoneSize] = useState(width <= 730 ? true : false)
   const [openPhoneDetailWindow, setOpenPhoneDetailWindow] = useState(false)

   const openPhoneDetail = isPhoneSize == true && openPhoneDetailWindow == true ? true : false

   let token: any = ""
   let user_id: any = ""
   if (typeof window !== 'undefined') {
      user_id = String(localStorage.getItem("user_id"))
      token = String(localStorage.getItem("token"))
   }

   useEffect(() => {
      const handleWindowResize = () => {
         if (window.innerWidth <= 730) {
            setIsPhoneSize(true)
         } else {
            setIsPhoneSize(false)
         }

      };

      window.addEventListener('resize', handleWindowResize);



      return () => {
         window.removeEventListener('resize', handleWindowResize);
      };
   }, [isPhoneSize, openPhoneDetailWindow]);

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

      setOpenPhoneDetailWindow(true)
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

   return (
      <div className={styles.mainContainer}>
         <OrderList
            selectedProductId={selectedProductId}
            OnOrdeDetail={OnOrdeDetail}
            token={token}
            user_id={user_id}
            toastList={toastList}
            setToastList={setToastList}
         />
         <div className={styles.sideDetailContainer}>
            <OrderDetail googleLocationLink={googleLocationLink}
               onLocationClick={onLocationClick}
               onUpdateOrderStatus={onUpdateOrderStatus}
               onWhatsAppClick={onWhatsAppClick}
               selectedOrderDetails={selectedOrderDetails}
               selectedProductStatus={selectedProductStatus} />
         </div>

         {openPhoneDetail && (
            <div className={styles.smallScreenDetailContainer}>
               <AiOutlineCloseCircle onClick={() => setOpenPhoneDetailWindow(false)} className={styles.exit} size={25} color="#fff" />
               <OrderDetail googleLocationLink={googleLocationLink}
                  onLocationClick={onLocationClick}
                  onUpdateOrderStatus={onUpdateOrderStatus}
                  onWhatsAppClick={onWhatsAppClick}
                  selectedOrderDetails={selectedOrderDetails}
                  selectedProductStatus={selectedProductStatus} />
            </div>
         )}


         <Toast toastList={toastList} setToast={setToastList} />
      </div>
   )
}