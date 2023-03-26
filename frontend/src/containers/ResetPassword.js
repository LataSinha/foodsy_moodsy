import React,{useState} from 'react';
import {Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {reset_password} from '../actions/auth';
import { makeStyles }  from '@material-ui/core';
import './Button.css'

const useStyles = makeStyles(theme => ({
    mainDiv: {
        border: '2px solid #F25C05',
        margin: '60px 30vw',
        padding: '20px',
        backgroundColor: '#f9f8f7',
    },
}))

const ResetPassword = ({reset_password}) =>{
    const classes = useStyles();
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({...formData, [e.target.name]:e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        reset_password(email);
        setRequestSent(true);
    }

    // is the user authenticated
    // Redirect them to page of interest
    if(requestSent) {
        return <Navigate to = '/' />
    }
    return (
        <div className={classes.mainDiv}>
            <h1>Request Password Reset</h1>
            <p>Sign in to your account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input 
                        className='form-control mt-3'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <button className='signupBtnTheme mt-3' type='submit'>Reset Password</button>
            </form>
        </div>

    );
};

export default connect(null,{reset_password})(ResetPassword);