"use client"
import { useEffect } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { useStore } from "./store/app-store";

export const App = ({children}) => {
    const store = useStore()
    useEffect (()=>{
        store.checkAuth();
    },[]);
    return (
      <>
            <Header/>
            {children}
            <Footer/>
            </>
    );
};
