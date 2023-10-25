// import { useState } from "react";

// const DarkMode = () =>{
//     const lightMode = {
//     backgroundColor : 'white',
//     color: 'black'
//     }
//     const darkMode = {
//         backgroundColor: 'black',
//         color: 'white'
//     }

//     const [mode , setMode] = useState(lightMode);

//     const toggleMode = () => {
//         // alert("hii");
//         if (mode.backgroundColor === "white") {
//           setMode(darkMode);
//           console.log(mode, "mode");
//         }
//         else {
//           setMode(lightMode);
//           console.log(mode, "mode");
//         }
//       }
//     return(
//     <div>
//  <input type="checkbox" class="checkbox" id="checkbox" onClick={toggleMode}/>
//   <label for="checkbox" class="checkbox-label" >
//     <i class="fas fa-moon"></i>
//     <i class="fas fa-sun"></i>
//     <span class="ball"></span>
//   </label>
//     </div>
//     )
// }

// export default DarkMode;