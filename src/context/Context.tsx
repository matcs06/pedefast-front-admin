import { useContext, createContext, useState } from "react";

interface IUserLogin {
   username: string;
   user_id: string;
   token: string;
   full_name: string
}

export const UserLoginContext = createContext([]) as any


export function useUserLogin(): any {
   return useContext(UserLoginContext)
}

export function MyUserLoginContextWrapper({ children }: any) {
   const [userInfo, setUserInfo] = useState<IUserLogin>()

   function UpdateUserInfo(userInfo: IUserLogin) {
      setUserInfo(userInfo)
   }
   return (<UserLoginContext.Provider value={[userInfo, UpdateUserInfo]}>
      {children}
   </UserLoginContext.Provider>)

}