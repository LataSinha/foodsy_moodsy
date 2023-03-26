import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup2 } from '../actions/auth';
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Grid, TextField, makeStyles } from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import { InputAdornment } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import './Button.css';
import image from './google.jpeg';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    textTheme: {
        width: '120%'
    },
    h1Theme: {
        color: '#F25C05',
        marginTop: '30px'
    },
    link: {
        color: '#F25C05',
        textDecoration: 'none',
        padding: '0.1rem',
        cursor: 'pointer',
        fontWeight: 'bold',

    },
}))

const RegisterNgo = ({ signup2, isAuthenticated }) => {
    const classes = useStyles();
    const [accountCreated, setAccountCreated] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        // role:'organisation'
    });
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    const { name, email, phoneNumber, address } = formData;
    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        validate({ [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        // if (password === re_password) {
            signup2(name, email, phoneNumber, address);
            setAccountCreated(true);
            // handleShowPopup();
        // }
        // signup2(name, email, password, re_password);
    }

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    }
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('name' in fieldValues)
            temp.name = fieldValues.name ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = fieldValues.email ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('phoneNumber' in fieldValues)
            temp.phoneNumber = fieldValues.phoneNumber.length > 9 ? "" : "10 numbers required."
        // if ('password' in fieldValues)
        //     temp.password = (/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&@? "]).*/).test(fieldValues.password) ? "" : "Password is not valid."
        // if ('re_password' in fieldValues) {
        //     temp.re_password = formData.password === fieldValues.re_password ? "" : "Password is not valid."
        // }
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    if (isAuthenticated) {
        return <Navigate to='/' />
    }
    // if (accountCreated) {
    //     return <Navigate to='/loginOrganization' />
    // }
    return (
        <div className='container mt-2'>
            <h1 className={classes.h1Theme}>Contact Us</h1>
            {/* <p><b>Create your account</b></p> */}
            <form onSubmit={e => onSubmit(e)}>
                <Grid container >
                    <Grid item xs={6}>
                        <Grid container spacing={3} >
                            <Grid item xs={8}>
                                <TextField className={classes.textTheme}
                                    variant="standard"
                                    label="Organization Name"
                                    name="name"
                                    value={name}
                                    size="small"
                                    required
                                    onChange={e => onChange(e)}

                                    {...(errors.name && { error: true, helperText: errors.name })}
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <TextField className={classes.textTheme}
                                    variant="standard"
                                    label="Email"
                                    name="email"
                                    value={email}
                                    type="email"
                                    size="small"
                                    required
                                    onChange={e => onChange(e)}

                                    {...(errors.email && { error: true, helperText: errors.email })}
                                />
                            </Grid>
                            {/* <Grid item xs={8}>
                                <TextField className={classes.textTheme}
                                    variant="standard"
                                    label="User ID"
                                    name="userId"
                                    value={userId}
                                    size="small"
                                    onChange={e => onChange(e)}
                                />
                            </Grid> */}
                            <Grid item xs={8}>
                                <TextField className={classes.textTheme}
                                    variant="standard"
                                    label="Phone Number"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    // type="password"
                                    size="small"
                                    required
                                    // autoComplete='on'
                                    onChange={e => onChange(e)}

                                    {...(errors.phoneNumber && { error: true, helperText: errors.phoneNumber })}
                                />
                            </Grid>
                            {/* <Grid item xs={8}>
                                <div>
                                    <a className={classes.link} onClick={handleClickOpen('paper')}>Check Password Criteria</a>
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        scroll={scroll}
                                    >
                                        <DialogTitle id="scroll-dialog-title">Password Criteria</DialogTitle>
                                        <DialogContent dividers={scroll === 'paper'}>
                                            <DialogContentText
                                                id="scroll-dialog-description"
                                                ref={descriptionElementRef}
                                                tabIndex={-1}
                                            >
                                                <h6>1. Password must be of minimum 8 characters.</h6>
                                                <h6>2. Password must contain alphabets.</h6>
                                                <h6>3. Password must contain numerics.</h6>
                                                <h6>4. Password must contain special characters.</h6>
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Cancel</Button>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                            </Grid> */}
                            <Grid item xs={8}>
                                {/* <TextField className={classes.textTheme}
                                    variant="standard"
                                    label="Confirm Password"
                                    name="re_password"
                                    value={re_password}
                                    type={values.showPassword ? 'text' : 'password'}
                                    //  fullWidth
                                    size="small"
                                    required
                                    autocomplete='on'
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                >
                                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    onChange={e => onChange(e)}

                                    {...(errors.re_password && { error: true, helperText: errors.re_password })}
                                /> */}
                                <TextField className={classes.textTheme}
                                    id="outlined-multiline-static"
                                    label="Address"
                                    multiline
                                    rows={2}
                                    // variant="outlined"
                                    name="address"
                                    value={address}
                                    onChange={e => onChange(e)}
                                    // defaultValue="Default Value"
                                />
                            </Grid>
                            <br/>
                            <Grid container>
                            <Grid item >
                                <button className='signupBtnTheme' style={{marginTop:'10%'}} type='submit'>Submit</button>
                            </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <h4 style={{color:'#F25C05',marginTop:'0px'}}>Contact To Know The Availability Of Food</h4>
                        <br/>
                        <p style={{display:'flex',textAlign:'center'}}><LocationOnIcon style={{color:'#000',cursor:'pointer'}}  sx={{ fontSize: '40px' }}/>B-30,Sector-62,Institution Area,Noida-201307,Uttar Pradesh (India)</p>
                        <p style={{display:'flex'}}><b>Preferred Timing:  </b>&nbsp; 9:30 a.m to 9:30 p.m</p>
                        <br/>
                        <Grid container>
                        <Grid item xs={4}>
                            <h6>Nitish Gupta</h6>
                            <h6>9878345112</h6>
                        </Grid>
                        <Grid item xs={4}>
                            <h6>Arpit Samadhiya</h6>
                            <h6>8716342167</h6>
                        </Grid>
                        <Grid item xs={4}>
                            <h6>Lata Sinha</h6>
                            <h6>9819783466</h6>
                        </Grid>
                        </Grid>
                        <br/>
                        <Grid container>
                        <Grid item xs={4}>
                            <h6>Tarun Chawla</h6>
                            <h6>8527136734</h6>
                        </Grid>
                        <Grid item xs={4}>
                            <h6>Somiya Bhardwaj</h6>
                            <h6>9912458612</h6>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
            {/* <Dialog fullWidth='true'
                open={showPopup}
                onClose={handleClosePopup}
            >
                <DialogTitle id="alert-dialog-title">
                    {"You're successfully registered"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <b>Please sign in to continue</b>
                    </DialogContentText>
                    <br />
                    <Grid xs={8}>
                        <Link to='/loginOrganization' className={classes.link}>Sign in</Link>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClosePopup}>Cancel</Button>
                </DialogActions>
            </Dialog> */}
            {/* <Grid container>
                    <div>
                        <button className='googleSignupTheme mt-3' onClick={continueWithGoogle}>
                        <img src ={image} className='img1' />Continue With Google</button>
                    </div>
                </Grid> */}
            {/* <p >
                Already have an account? <Link to='/loginOrganization' className={classes.link}>Sign In</Link>
            </p> */}
        </div>

    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup2 })(RegisterNgo);