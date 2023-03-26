import React, { useState, createContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import axios from 'axios';
import { Grid, TextField, makeStyles } from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import { InputAdornment } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Autocomplete from '@mui/material/Autocomplete';
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import './Button.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import imge from '../components/foodwonder.png'
// import CSRFToken from '../components/CSRFTokens';

const useStyles = makeStyles(theme => ({
    textTheme: {
        width: '90%'
    },
    h1Theme: {
        color: '#F25C05'
    },
    link: {
        color: '#F25C05',
        textDecoration: 'none',
        padding: '0.1rem',
        cursor: 'pointer',
        fontWeight: 'bold',

    },

}))
export const DataContext = createContext(null);
const Signup = ({ signup, isAuthenticated, children }) => {
    const classes = useStyles();
    const [accountCreated, setAccountCreated] = useState(false);
    const [errors, setErrors] = useState({});
    const [preference, setPreference] = useState([]);
    const [age, setAge] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const handleClosePopup = () => setShowPopup(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        phoneNumber: '',
        password: '',
        password2: ''
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


    const { firstName, lastName, gender, email, phoneNumber, password, password2 } = formData;

    const onChange = e => {
        // console.log(firstName);
        setFormData({ ...formData, [e.target.name]: e.target.value })
        validate({ [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(age);
        console.log(gender);
        console.log(lastName);
        console.log(preference);
        console.log(email);
        console.log(phoneNumber);
        console.log(firstName);
        if (password === password2) {
            const res = signup(firstName, lastName, age, gender, email, phoneNumber, password, password2);
            console.log(res);
            // if(res)
            setAccountCreated(true);
            // handleShowPopup();
        }
        // signup(firstName, lastName,age, preference, gender, email, phoneNumber, password, re_password);
    }
    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    }

    if (isAuthenticated) {
        return <Navigate to='/' />
    }
    if (accountCreated) {
        console.log("created");
        // return <Navigate to='/signup_auth' />
    }
    const genderItems = [
        { id: 'male', title: 'Male' },
        { id: 'female', title: 'Female' },
        { id: 'other', title: 'Other' },
    ]

    const ageGroup = [
        '13-18',
        '19-24',
        '25-30',
        '31-36',
        '37-42',
        "43-Above",
    ]

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
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('phoneNumber' in fieldValues)
            temp.phoneNumber = fieldValues.phoneNumber.length > 9 ? "" : "10 numbers required."
        if ('password' in fieldValues)
            temp.password = (/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&@? "]).*/).test(fieldValues.password) ? "" : "Password is not valid."
        if ('re_password' in fieldValues) {
            temp.re_password = formData.password === fieldValues.re_password ? "" : "Password does not match."
        }
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x === "")
    }
    return (
        <DataContext.Provider value={{
            age,
            gender
        }}>
            {children}
            <div className='container mt-3'>
                <h1 className={classes.h1Theme}>Sign Up</h1>
                <p><b>Create your account</b></p>
                <form onSubmit={e => onSubmit(e)}>
                    {/* <CSRFToken /> */}
                    <Grid container>
                        <Grid item xs={7}>
                            <Grid container spacing={2} >
                                <Grid item xs={6}>
                                    <TextField className={classes.textTheme}
                                        variant="standard"
                                        label="First Name"
                                        name="firstName"
                                        value={firstName}
                                        size="small"
                                        required
                                        onChange={e => onChange(e)}

                                        {...(errors.firstName && { error: true, helperText: errors.firstName })}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField className={classes.textTheme}
                                        variant="standard"
                                        label="Last Name"
                                        name="lastName"
                                        value={lastName}
                                        size="small"
                                        onChange={e => onChange(e)}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Autocomplete
                                        // selectOnFocus
                                        id="combo-box-demo"
                                        options={ageGroup}
                                        sx={{ width: 315 }}
                                        inputValue={age}
                                        onInputChange={(event, newAge) => {
                                            setAge(newAge);
                                        }}
                                        renderInput={(params) => <TextField {...params} variant="standard" label="Age Group" />}
                                    />
                                </Grid>
                                <Grid item xs={6}></Grid>
                                <Grid item xs={6} spacing={2}>
                                    <FormControl>
                                        <FormLabel>Gender</FormLabel>
                                        <MuiRadioGroup row
                                            name="gender"
                                            value={gender}
                                            onChange={e => onChange(e)}>
                                            {
                                                genderItems.map(
                                                    item => (
                                                        <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
                                                    )
                                                )
                                            }

                                        </MuiRadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                </Grid>
                                <Grid item xs={6}>
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
                                <Grid item xs={6}>
                                    <TextField className={classes.textTheme}
                                        variant="standard"
                                        label="Phone Number"
                                        name="phoneNumber"
                                        value={phoneNumber}
                                        size="small"
                                        onChange={e => onChange(e)}

                                        {...(errors.phoneNumber && { error: true, helperText: errors.phoneNumber })}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField className={classes.textTheme}
                                        variant="standard"
                                        label="Create Password"
                                        name="password"
                                        autocomplete='on'
                                        value={password}
                                        type="password"
                                        size="small"
                                        required
                                        onChange={e => onChange(e)}

                                        {...(errors.password && { error: true, helperText: errors.password })}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField className={classes.textTheme}
                                        variant="standard"
                                        label="Confirm Password"
                                        name="password2"
                                        value={password2}
                                        type={values.showPassword ? 'text' : 'password'}
                                        size="small"
                                        required
                                        autoComplete='on'
                                        {...(errors.re_password && { error: true, helperText: errors.re_password })}
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
                                    />
                                </Grid>
                                <Grid item xs={8}>
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
                                </Grid>
                                <Grid item >
                                    <button className='signupBtnTheme' type='submit'>Register</button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <img src = {imge} style={{height:'100%',width:'100%',marginRight:'30%'}}/>
                        </Grid>
                    </Grid>
                </form> 

                <Dialog fullWidth='true'
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
                            <Link to='/loginRecommendation' className={classes.link}>Food Recommendation</Link>
                        </Grid>
                        {/* <Grid xs={8}>
                    <Link to='/loginDonation' className={classes.link}>Food Donation</Link>
                    </Grid> */}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClosePopup}>Cancel</Button>
                    </DialogActions>
                </Dialog>
                {/* <Grid container>
                <div>
                    <button className='googleSignupTheme mt-2' onClick={continueWithGoogle}>
                        <img src={image} className='img1' />Continue With Google</button>
                </div>
            </Grid> */}
                <p >
                    Already have an account? <Link to='/loginRecommendation' className={classes.link}>Sign In For Food Recommendation</Link>
                    {/* <span><Link to='/loginDonation' className={classes.link}>Sign In For Food Donation</Link></span> */}
                </p>
               
            </div>
         </DataContext.Provider>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);