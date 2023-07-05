import { useEffect, useState } from "react";
export default function CustomerPage() {

   const [isFirstTime, setIsFirstTime] = useState(true)
   let username: any = ""

   if (typeof window !== 'undefined') {
      username = String(localStorage.getItem("username"))

   }
   useEffect(() => {
      window.open(`http://moncao.pedefast.com/StartPage/${username}`, 'mywin', "width=500, height=900")

   }, [isFirstTime])


   return <></>;
}