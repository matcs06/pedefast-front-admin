import { useEffect, useState } from "react";
export default function CustomerPage() {

   const [isFirstTime, setIsFirstTime] = useState(true)

   useEffect(() => {
      const username = localStorage.getItem("user_name");
      window.open(`http://moncao.pedefast.com/StartPage/${username}`, 'mywin', "width=500, height=900")

   }, [isFirstTime])


   return <></>;
}