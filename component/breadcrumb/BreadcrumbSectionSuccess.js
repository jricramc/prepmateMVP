// import Link from 'next/link'
// import React from 'react'

// const BreadcrumbSection = ({title,current}) => {
//   return (
//     <div className="fz-inner-page-breadcrumb">
//         <div className="container">
//             <div className="row justify-content-between align-items-center">
//                 <div className="col-12">
//                     <div className="breadcrumb-txt">
//                         <h1>{title}</h1>
//                         <ul className="fz-inner-page-breadcrumb-nav">
//                             <li><Link href="/">Home</Link></li>
//                             <li className="current-page">{current}</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default BreadcrumbSection



import Link from 'next/link'
import React from 'react'

const BreadcrumbSectionSuccess = ({title,current}) => {
  return (
    <div className="fz-inner-page-breadcrumb">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-12">
                    <div className="breadcrumb-txt">
                        <h1>{title}</h1>
                        <ul className="fz-inner-page-breadcrumb-nav">
                            <li><Link href="/">Home</Link></li>
                            <li className="current-page">{current}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadcrumbSectionSuccess