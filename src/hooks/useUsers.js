import React, { useEffect, useState } from 'react'
import { fatchUser } from '../api/userApi';

export default function useUsers() {
   const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
        let isMounted = true;
     fatchUser().then((data)=>{
        if(isMounted) return setUsers(data);
     }).catch((err)=>{
         if (isMounted) setError(err.message);
     }).finally(()=>{
         if (isMounted) setLoading(false);
     })
    // Avoids setting state on an unmounted component
    return () => {
      isMounted = false;
    };
    
  }, [])
  
  return { users, loading, error };
}
