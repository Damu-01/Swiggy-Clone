import { useEffect, useState } from "react";


const useConnection = () =>{

    const [isOnline,setIsOnline] = useState(true);
    const hanldeOnline = () =>{
        setIsOnline(true);
    }
    const handleOffline = ()=>{
        setIsOnline(false);
    }

    useEffect(()=>{
        window.addEventListener('online',hanldeOnline)
    
        window.addEventListener('offline',handleOffline)

        return ()=>{
            window.removeEventListener('online',hanldeOnline)
        
            window.removeEventListener('offline',handleOffline)
        }
    },[])
   
    return isOnline;
}

export default useConnection;