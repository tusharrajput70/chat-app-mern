import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");

  const {loading,login}=useLogin();

  const handleSubmit=async(e)=>{
      e.preventDefault(); 
      await login(userName,password);
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-pink-600">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text  text-gray-300">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"  
            value={userName} onChange={(e)=>setUserName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="label">
              <span className="text-base label-text  text-gray-300">Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" 
            value={password} onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <Link to="/signup" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">
            {"Don't"} have an account?
          </Link>
          <div>
          <button type="submit" className="btn btn-primary w-full bg-gradient-to-r from-purple-900 to-pink-600 hover:from-purple-800 hover:to-pink-500 border-none text-white"
            disabled={loading}
          >
            {loading?<span className="loading loading-spinner"></span>:"Login"}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// Starter Code for this file 
// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 bg-gray-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login
//           <span className="text-pink-500">ChatApp</span>
//         </h1>
//         <form action="">
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text  text-gray-300">Username</span>
//             </label>
//             <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" id="" />
//           </div>
//           <div>
//             <label htmlFor="" className="label">
//               <span className="text-base label-text  text-gray-300">Password</span>
//             </label>
//             <input type="password" placeholder="Enter username" className="w-full input input-bordered h-10" id="" />
//           </div>
//           <a href="#" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">
//             {"Don't"} have an account?
//           </a>
//           <div>
//           <button type="submit" className="btn btn-primary w-full bg-gradient-to-r from-purple-900 to-pink-600 hover:from-purple-800 hover:to-pink-500 border-none text-white">
//             Login
//           </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
