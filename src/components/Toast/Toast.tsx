import { useCallback, useEffect, useState } from "react";
import styles from "./Toast.module.scss"

interface IToastList {
   id: string
   backgroundCollor: string;
   title: string;
   description: string;
}

interface IToastProps {
   toastList: IToastList[]
   setToast: Function
}

export default function Toast({ setToast, toastList }: IToastProps) {


   const onDeleteToast = useCallback((id: string) => {
      setToast(toastList.filter((toast: IToastList) => toast.id !== id))

   }, [toastList, setToast])


   useEffect(() => {
      const interval = setInterval(() => {
         if (toastList.length) {
            onDeleteToast(toastList[0].id)
         }
      }, 3000)

      return () => {
         clearInterval(interval)
      }
   }, [toastList, onDeleteToast])

   return (
      <div className={styles.toastContainer}>

         {toastList.map((singletoast: IToastList) => (
            <div key={singletoast.id} className={styles.toast} style={{ backgroundColor: singletoast.backgroundCollor }}>
               <p className={styles.title}>{singletoast.title}</p>
               <div className={styles.descriptionAndExitContainer}>
                  <p className={styles.description}>{singletoast.description}</p>
                  <p style={{ cursor: "pointer" }} onClick={() => onDeleteToast(singletoast.id)}>X</p>
               </div>

            </ div>
         ))}
      </div >
   )


}