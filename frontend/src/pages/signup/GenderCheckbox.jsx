import React from 'react'

const GenderCheckbox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender==="male"?"selected":""}`}>
            <span className="label-text">Male</span>
            <input type="checkbox" className="checkbox border-slate-900" checked={selectedGender==="male"} onChange={()=>onCheckboxChange("male")} id="male" />
            </label>
        </div>
        <div className='form-control'>
            <label htmlFor="" className={`label gap-2 cursor-pointer ${selectedGender==="female"?"selected":""}`}>
            <span className="label-text">Female</span>
            <input type="checkbox" className="checkbox border-slate-900" checked={selectedGender==="female"} onChange={()=>onCheckboxChange("female")}id="female" />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox

// Started code for this file 
// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex'>
//         <div className='form-control'>
//             <label htmlFor="" className={'label gap-2 cursor-pointer'}>
//             <span className="label-text">Male</span>
//             <input type="checkbox" className="checkbox border-slate-900" id="" />
//             </label>
//         </div>
//         <div className='form-control'>
//             <label htmlFor="" className={'label gap-2 cursor-pointer'}>
//             <span className="label-text">Female</span>
//             <input type="checkbox" className="checkbox border-slate-900" id="" />
//             </label>
//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox