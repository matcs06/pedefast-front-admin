import { useContext, createContext, useState } from "react";
import { ArrowFunction, FunctionDeclaration, FunctionExpression } from "typescript";

interface IUserLogin {
   username: string;
   user_id: string;
   token: string;
   full_name: string
}

interface IOrderInfo {
   customer_name: string;
   customer_address: string;
   customer_phone: string;
   id: string;
   status: string;
   product: string;
}


export const UserLoginContext = createContext([]) as any

export const CurrentOrdersContext = createContext([]) as any

export function useUserLogin(): any {
   return useContext(UserLoginContext)
}

export function useCurrentOrders(): any {
   return useContext(CurrentOrdersContext)
}

export function MyUserLoginContextWrapper({ children }: any) {
   const [userInfo, setUserInfo] = useState<IUserLogin>()

   const [currentOrders, setCurrentOrders] = useState<IOrderInfo[]>([])

   function UpdateUserInfo(userInfo: IUserLogin) {
      setUserInfo(userInfo)
   }
   return (<UserLoginContext.Provider value={[userInfo, UpdateUserInfo]}>
      <CurrentOrdersContext.Provider value={[currentOrders, setCurrentOrders]}>
         {children}

      </CurrentOrdersContext.Provider>
   </UserLoginContext.Provider>)

}