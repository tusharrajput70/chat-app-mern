import  { useState,useEffect } from 'react'
import toast from 'react-hot-toast'

const useGetConversations=()=> {
  const [loading,setLoading]=useState(false);
  const [conversations,setConversations]=useState([]);

  useEffect(()=>{
    const getConversations=async()=>{
      setLoading(true);
        try {
          //for get req we don't need to put any other fields in fetch function
          const res=await fetch("/api/users");
          const data=await res.json();
          if(data.error){
            throw new Error(data.error);
          }
          setConversations(data);
        } catch (error) {
          toast.error(error.message);
        }
        finally{
          setLoading(false);
        }
      }
      getConversations();
  },[])
  return {loading,conversations}
}

export default useGetConversations