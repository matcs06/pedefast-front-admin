import { useRef } from "react";
import styles from "./OrderDetails.module.scss"
import { BsWhatsapp } from "react-icons/bs"
import { TbMapSearch } from "react-icons/tb"
import ReactToPrint, { useReactToPrint } from "react-to-print"

interface IOrderDetail {
   selectedOrderDetails: string;
   selectedProductStatus: string
   onUpdateOrderStatus: Function;
   googleLocationLink: string
   onLocationClick: any;
   onWhatsAppClick: any;


}

export default function OrderDetail({
   selectedOrderDetails,
   selectedProductStatus,
   onUpdateOrderStatus,
   onLocationClick,
   onWhatsAppClick,
   googleLocationLink }: IOrderDetail) {

   const componentRef = useRef(null);;

   return (<>
      {selectedOrderDetails ? (
         <section className={styles.orderDetailContainer}>
            <div className={styles.changeOrderStatus}>
               {selectedProductStatus == "opened" && (
                  <button onClick={() => onUpdateOrderStatus("ongoing")}>Enviar para entrega</button>

               )}

               {selectedProductStatus !== "closed" && (
                  <button onClick={() => onUpdateOrderStatus("closed")}>Fechar Pedido</button>

               )}
            </div>
            <div className={styles.orderDetailTextWrapper}>
               <textarea
                  ref={componentRef}
                  className={styles.detailsTextArea}
                  cols={20}
                  rows={25}
                  readOnly
                  disabled
                  value={decodeURIComponent(selectedOrderDetails)} />
               <ReactToPrint
                  trigger={() => <button className={styles.printButton} style={{ cursor: "pointer" }}>Imprimir pedido!</button>}
                  content={() => componentRef.current}
               />
               {googleLocationLink && (
                  <TbMapSearch title="Localização do cliente" onClick={onLocationClick} className={styles.location} size={25} color="#DC6A6A" />
               )}
               <BsWhatsapp title="Confirmar pedido via WhatsApp" onClick={onWhatsAppClick} className={styles.whatsappButton} size={25} color="#0FA958" />

            </div>
         </section>
      ) :
         (
            <div>Nenhum pedido</div>
         )}

   </>)
}