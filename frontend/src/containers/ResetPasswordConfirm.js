import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';
import { Grid, TextField, makeStyles } from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import { InputAdornment } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './Button.css';

const useStyles = makeStyles(theme => ({
    textTheme: {
        width: '90%'
    },
    mainDiv: {
        border: '2px solid #F25C05',
        margin: '60px 30vw',
        padding: '20px',
        backgroundColor: '#f9f8f7',
    },
    link: {
        color: '#F25C05',
        textDecoration: 'none',
        padding: '0.1rem',
        cursor: 'pointer',
        fontWeight: 'bold',

    },
    h1Theme:{
        size: '20px'
    }

}))

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    console.log(reset_password_confirm);
    const classes = useStyles();
    const [requestSent, setRequestSent] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
    });
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
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };


    const { new_password, re_new_password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        validate({ [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;
        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    }

    // is the user authenticated
    // Redirect them to page of interest
    if (requestSent) {
        return <Navigate to='/' />
    }

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('new_password' in fieldValues)
            temp.new_password = (/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&@? "]).*/).test(fieldValues.new_password) ? "" : "Password is not valid."
        if ('re_new_password' in fieldValues) {
            temp.re_new_password = formData.new_password === fieldValues.re_new_password ? "" : "Password is not valid."
        }
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    return (
        <div className={classes.mainDiv}>
            <h1 className={classes.h1Theme}>Request Password Reset Confirm</h1>
            <p>Sign in to your account</p>
            <form onSubmit={e => onSubmit(e)}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <TextField className={classes.textTheme}
                            variant="standard"
                            label="Create Password"
                            name="new_password"
                            value={new_password}
                            type="password"
                            size="small"
                            required
                            autocomplete='on'
                            onChange={e => onChange(e)}

                            {...(errors.new_password && { error: true, helperText: errors.new_password })}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField className={classes.textTheme}
                            variant="standard"
                            label="Confirm Password"
                            name="re_new_password"
                            value={re_new_password}
                            type={values.showPassword ? 'text' : 'password'}
                            size="small"
                            autocomplete='on'
                            required
                            {...(errors.re_new_password && { error: true, helperText: errors.re_new_password })}
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
            </form>
        </div>

    );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);