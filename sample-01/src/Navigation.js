// //import { useState, useEffect, useContext } from 'react'
// import { useHistory } from "react-router";
// //import { CurrentUser } from './contexts/CurrentUser';

// function Navigation() {

//     const history = useHistory()

//     //const { currentUser } = useContext(CurrentUser)

//     // let loginActions = (
//     //     <>
//     //         <li style={{ float: 'right' }}>
//     //             <a href="#" onClick={() => history.push("/sign-up")}>
//     //                 Sign Up
//     //             </a>
//     //         </li>
//     //         <li style={{ float: 'right' }}>
//     //             <a href="#" onClick={() => history.push("/login")}>
//     //                 Login
//     //             </a>
//     //         </li>
//     //     </>
//     // )

//     // if (currentUser) {
//     //     loginActions = (
//     //         <li style={{ float: 'right' }}>
//     //             Logged in as {currentUser.firstName} {currentUser.lastName}
//     //         </li>
//     //     )
//     // }

//     return (
//         <nav>
//             <ul>
//                 <li>
//                     <a href="#" onClick={() => history.push("/")}>
//                         Home
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" onClick={() => history.push("/gallery")}>
//                         Gallery
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" onClick={() => history.push("/about")}>
//                         About
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#" onClick={() => history.push("/booking")}>
//                         BOOK A TOUR
//                     </a>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// export default Navigation;