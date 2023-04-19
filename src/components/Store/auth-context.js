import React,{useState} from "react"
const AuthContext= React.createContext({
    token:'',
    userEmail:'',
    isLoggedin:false,
    login:(token,email)=>{},
    logout:()=>{}
})

export const AuthContextProvider = (props)=>{
    const initialtoken= localStorage.getItem('token')
    const intialemail=localStorage.getItem('email')
   const [token,setToken]=useState(initialtoken);
   const [email,setEmail]=useState(intialemail)

   const userIsLoggedIn= !!token;

   const loginHandler=(token,email)=>{
    setToken(token)
    setEmail(email)
    console.log('authcontext',email)
    localStorage.setItem('token',token)
    localStorage.setItem('email',email)
   }

   const logouthandler =()=>{
    setToken(null)
    setEmail(null)
    localStorage.removeItem('token')
   }

   const contextValue= {
    token:token,
    userEmail:email,
    isLoggedin:userIsLoggedIn,
    login:loginHandler,
    logout:logouthandler
   }

   return (<AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>)
}

export default AuthContext