// import React from 'react'
// import { TextField } from '@material-ui/core'
// import { useState, useEffect, useRef } from 'react'
// import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
// import { InputAdornment,IconButton } from '@material-ui/core';
// import { createPortal } from 'react-dom';
// import Map from "./Map";
// function NewWindow(props){
//     const [container, setContainer] = useState(null);
//     const newWindow = useRef(window);
//     useEffect(() => {
//       const div = document.createElement("div");
//       setContainer(div);
//     }, []);
//     useEffect(() => {
//       if (container) {
//         newWindow.current = window.open(
//           "",
//           "",
//           "width=600,height=400,left=200,top=200"
//         );
//         newWindow.current.document.body.appendChild(container);
//         const curWindow = newWindow.current;
//         return () => curWindow.close();
//       }
//     }, [container]);
//     return container && createPortal(props.children, container);
// }
// export default function Organization() {
//     const [data,setData] = useState();
//     const handleChange = () =>{
//         setData(true);
//     }
//     const [open, setOpen] = useState();
//     const showMap = ()=>{
//         setOpen(true);
//     }
//   return (
//     <div>
//           <TextField className='container mt-3'
//                             variant="standard"
//                             label="Location"
//                             name="password"
//                             // value={values.password}
//                             fullWidth
//                             size="small"
//                             autocomplete='on'
//                             onChange={handleChange}
//                             required
//                             InputProps={{
//                                 endAdornment: (
//                                     <InputAdornment position="end">
//                                         <IconButton
//                                             // aria-label="toggle password visibility"
//                                             onClick={showMap}
//                                         >
//                                             <AddLocationAltIcon />
//                                         </IconButton>
//                                     </InputAdornment>
//                                 ),
//                             }}
//                         />
//                         {open && 
//                         // <NewWindow>
//                             <Map/>
//         //   </NewWindow>
//           }      
//     </div>
//   )
// }
