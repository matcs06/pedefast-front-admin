import { useEffect } from 'react';
import { useUserLogin } from '../../../../context/Context';

export default function Logout() {

   useEffect(() => {
      localStorage.setItem("username", "")
      localStorage.setItem("user_id", "")
      localStorage.setItem("token", "")
      localStorage.setItem("full_name", "")
      localStorage.clear()

      window.location.pathname = ("/admin/login/")

   })

   return 0;
}