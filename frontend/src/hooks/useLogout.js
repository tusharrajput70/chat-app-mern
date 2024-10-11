import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogout = () => {
  const [loading,setLoading]=useState(false);

  const {setAuthUser}=useAuthContext()
  const logout=async()=>{
    setLoading(true);
    try {
        const res=await fetch("/api/auth/logout",{
            method:"POST",
            headers:{"Content-Type":"application/json"}
        })
        // Check if response status is not ok (e.g., 4xx or 5xx responses)
        if (!res.ok) {
            throw new Error("Failed to logout, please try again.");
        }
        const data=await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.removeItem("chat-user");
        setAuthUser(null);
    } catch (error) {
        toast.error(error.message);
    }finally{
        setLoading(false);
    }
  }
  return {loading,logout};
}

export default useLogout