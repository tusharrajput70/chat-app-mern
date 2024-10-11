import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import { TiStarFullOutline } from 'react-icons/ti'
import useSignup from '../../hooks/useSignup'

const signUp = () => {
  const [inputs,setInputs]=useState({
    fullName:"",
    userName:"",
    password:"",
    confirmPassword:"",
    gender:""
  });

  const {loading,signup}=useSignup();

  const handleSubmit=async(e)=>{

    // for previnting page to submit the form.
    e.preventDefault();
    await signup(inputs);
  }

  const handleCheckboxChange=(gender)=>{
      setInputs({...inputs,gender});
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 bg-gray-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-pink-600">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit} name="signup">
          <div>
            <label className="label p-2">
              <span className="text-base label-text  text-gray-300">Full Name</span>
            </label>
            <input type="text" placeholder="Enter name" className="w-full input input-bordered h-10"  value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}/>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text  text-gray-300">Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10"  value={inputs.userName} onChange={(e)=>setInputs({...inputs,userName:e.target.value})}/>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text  text-gray-300">Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10"  value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text  text-gray-300">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10"  value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}/>
          </div>
          {/* GENDER CHECK GOES HERE */}
          <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/> 
          <Link to="/login" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">
            Already have an account?
          </Link>
          <div>
          <button type="submit" className="btn btn-primary w-full bg-gradient-to-r from-purple-900 to-pink-600 hover:from-purple-800 hover:to-pink-500 border-none text-white" disabled={loading}>
            {loading?<span className='loading loading-spinner'></span>:"Sign up"}
          </button>
          </div>
        </form>
      </div>
    </div>
  ) 
}

export default signUp


// Starter coder for this file 
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const signUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 bg-gray-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           SignUp
//           <span className="text-pink-600">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text  text-gray-300">Full Name</span>
//             </label>
//             <input type="text" placeholder="Enter name" className="w-full input input-bordered h-10" id="" />
//           </div>
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
//             <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10" id="" />
//           </div>
//           <div>
//             <label htmlFor="" className="label">
//               <span className="text-base label-text  text-gray-300">Confirm Password</span>
//             </label>
//             <input type="password" placeholder="Confirm password" className="w-full input input-bordered h-10" id="" />
//           </div>
//           {/* GENDER CHECK GOES HERE */}
//           <GenderCheckbox/> 
//           <a href="#" className="text-sm hover:underline hover:text-blue-400 mt-2 inline-block">
//             Already have an account?
//           </a>
//           <div>
//           <button type="submit" className="btn btn-primary w-full bg-gradient-to-r from-purple-900 to-pink-600 hover:from-purple-800 hover:to-pink-500 border-none text-white">
//             SignUp
//           </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   ) 
// }

// export default signUp