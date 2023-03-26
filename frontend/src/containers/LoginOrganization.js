// import React, { useState } from 'react';
// import { Link, Navigate } from 'react-router-dom';
// import { Grid, makeStyles } from '@material-ui/core';
// import { TextField } from '@material-ui/core';
// import { connect } from 'react-redux';
// import { login } from '../actions/auth';
// import axios from 'axios';
// import './Button.css';
// import { InputAdornment } from '@material-ui/core';
// import { Visibility } from '@material-ui/icons';
// import { VisibilityOff } from '@material-ui/icons';
// import { IconButton } from '@material-ui/core';
// // import CSRFToken from '../components/CSRFTokens';

// const useStyles = makeStyles(theme => ({
//     mainDiv: {
//         border: '2px solid #F25C05',
//         margin: '60px 30vw',
//         padding: '20px',
//         backgroundColor: '#f9f8f7',
//     },
//     link: {
//         color: '#F25C05',
//         textDecoration: 'none',
//         padding: '0.1rem',
//         cursor: 'pointer',
//         fontWeight: 'bold',
//         '&.active': {
//             color: '#f2f2f2'
//         },
//         '&:hover': {
//             color: '#FF8D29'
//         }

//     },
//     pTheme: {
//         fontWeight: 'bold'
//     },
//     h1Theme: {
//         color: '#F25C05'
//     }
// }))

// const LoginOrganization = ({ login, isAuthenticated }) => {
//     const classes = useStyles();
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const [values, setValues] = useState({
//         email: '',
//         password: '',
//         showPassword: false,
//     });


//     const { email, password } = formData;

//     const handleChange = (prop) => (event) => {
//         setValues({ ...values, [prop]: event.target.value });
//     };


//     const handleClickShowPassword = () => {
//         setValues({
//             ...values,
//             showPassword: !values.showPassword,
//         });
//     };

//     const onSubmit = e => {
//         e.preventDefault();
//         login(email, password);
//     };

//     const continueWithGoogle = async () => {
//         try {
//             const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

//             window.location.replace(res.data.authorization_url);
//         } catch (err) {

//         }
//     }

//     if (isAuthenticated) {
//         return <Navigate to='/' />
//     }
//     return (
//         <div className={classes.mainDiv}>
//             <form onSubmit={e => onSubmit(e)}>
//             {/* <CSRFToken /> */}
//                 <Grid container justifyContent="center">
//                     <Grid item justifyContent='center'>
//                         <Grid item container justifyContent='center'>
//                             <div>
//                                 <h1 className={classes.h1Theme}>Sign In</h1>
//                             </div>
//                         </Grid>
//                         <Grid item container justifyContent='center'>
//                             <div>
//                                 <p className={classes.pTheme}>Sign in to your account</p>
//                             </div>
//                         </Grid>
//                         <TextField className={classes.textTheme}
//                             variant="standard"
//                             label="Email Id"
//                             name="email"
//                             value={values.email}
//                             type="email"
//                             fullWidth
//                             size="small"
//                             onChange={handleChange('email')}
//                         />
//                         <TextField className='container mt-3'
//                             variant="standard"
//                             label="Password"
//                             type={values.showPassword ? 'text' : 'password'}
//                             name="password"
//                             value={values.password}
//                             fullWidth
//                             size="small"
//                             autocomplete='on'
//                             onChange={handleChange('password')}
//                             minLength='8'
//                             required
//                             InputProps={{
//                                 endAdornment: (
//                                     <InputAdornment position="end">
//                                         <IconButton
//                                             aria-label="toggle password visibility"
//                                             onClick={handleClickShowPassword}
//                                         >
//                                             {values.showPassword ? <VisibilityOff /> : <Visibility />}
//                                         </IconButton>
//                                     </InputAdornment>
//                                 ),
//                             }}
//                         />
//                         <Grid container justifyContent='center'>
//                             <div>
//                                 <button className='buttonTheme mt-3' type='submit'>Login</button>
//                             </div>
//                         </Grid>
//                     </Grid>
//                 </Grid>
//             </form>
//             {/* <Grid container justifyContent='center'>
//                 <div>
//                     <button className='googleTheme mt-3' onClick={continueWithGoogle}>
//                         <img src={image} className='img1' />Continue With Google</button>
//                 </div>
//             </Grid> */}
//             <Grid container justifyContent='center'>
//                 <div>
//                     <p className='mt-3'>
//                         Don't have an account? <Link to='/signupAsOrg' className={classes.link}>Sign Up</Link>
//                     </p>
//                     <p className='mt-3'>
//                         Forgot your password? <Link to='/reset-password' className={classes.link}>Reset Password</Link>
//                     </p>
//                 </div>

//             </Grid>

//         </div>
//     );
// };

// const mapStateToProps = state => ({
//     isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps, { login })(LoginOrganization);