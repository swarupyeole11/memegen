// import React, { useState,useEffect } from "react";
// import { useTheme } from "next-themes";
// export default function Counter() {
//     const { systemTheme, theme, setTheme } = useTheme();
//     const [mounted, setMounted] = useState(false);
  
//     useEffect(() => {
//       setMounted(true);
//     }, []);
  
//     if (!mounted) return null;
//     const currentTheme = theme === 'system' ? systemTheme : theme;
  
//     return (
      
//           <div>
//             {currentTheme === 'dark' ? (
//               <button
//                 className="bg-black-700 rounded-md border-purple-400 border-2 p-4 hover:bg-black w-28"
//                 onClick={() => setTheme('light')}
//               >
//               LightMode
//               </button>
//             ) : (
//               <button
//                 className="bg-gray-10 w-28 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
//                 onClick={() => setTheme('dark')}
//               >
//                DarkMode
//               </button>
//             )}
//           </div>
        
      
//     );
//   }
