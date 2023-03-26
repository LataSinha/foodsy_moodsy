// import React,{useState} from 'react';
// import {connect} from 'react-redux';
// import {verify} from '../actions/auth';
// import './Button.css';
// import { makeStyles } from '@material-ui/core';
// // import CSRFToken from '../components/CSRFTokens';
// import { useNavigate } from "react-router-dom";
// // import { match } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// const useStyles = makeStyles(theme => ({
//     mainDiv: {
//         border: '2px solid #F25C05',
//         margin: '60px 30vw',
//         padding: '20px',
//         backgroundColor: '#f9f8f7',
//     }
// }))

// const Activate = ({ verify}) =>{
//     const classes = useStyles();
//     const [verified, setVerified] = useState(false);
//     let {uid,token} = useParams();
//     const verify_account= e => {
//         e.preventDefault();
//         console.log("hello");
//         const userid = uid
//         const usertoken = token;
//         console.log(userid,usertoken);
//         verify(userid, usertoken);
//         setVerified(true);
//         // navigate("/");
//     }
//     // if(verified) {
//     //     // return <Navigate to = '/' />
//     //     navigate("/");
//     // }
//     // const handleClick=()=>{
//     //     return <Navigate to = '/'/>
//     // }
//     return (
//         <div className={classes.mainDiv}>
//            <div 
//                 className='d-flex flex-column justify-content-center align-items-center'
//             >
//                 <h1>Verify your account:</h1>
//             <form onSubmit={verify_account}>
//             {/* <CSRFToken/> */}
//             <button
//                 style={{ marginTop: '50px' }}
//                 type='submit'
//                 className='signupBtnTheme1'
//                 // onClick={handleClick}
//             >
//                 Verify
//             </button>
//             </form>
//            </div>
//         </div>

//     );
// };

// export default connect(null,{verify})(Activate);