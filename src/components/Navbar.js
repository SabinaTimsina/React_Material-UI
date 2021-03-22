// import React, { useState } from "react";
// import {Link} from 'react-router-dom';

// export default function App() {
//   const values = [
//     { id: 1, text: "Home", link:"/" },
//     { id: 2, text: "About", link:"/about" },
//     { id: 3, text: "Contact", link:"/contact" },
//     { id: 4, text: "Blog", link:"/blog" }
//   ];
//   const [activeId, setActiveId] = useState(1);

//   return (
//     <div className="App">
//       <ul>
//         {values.map((val) => (
//           <Link 
//           to = {val.link}
//           key={val.id} 
//           className = {(val.id === activeId)?"active":"hi"}  
//           onClick={() => setActiveId(val.id)}>
//           <li>{val.text}</li>
              
//           </Link>
//         ))}
//       </ul>
//     </div>
//   );
// }