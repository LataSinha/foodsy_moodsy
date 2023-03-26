import React, { useEffect, useState, useContext } from 'react';
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Grid } from '@material-ui/core';
import axios from 'axios';
import '../index.css';
import Modal from 'react-bootstrap/Modal';
import image from './foodsymoodsy.png';
import './image.css';
import { AppBar, Toolbar, makeStyles, useMediaQuery } from '@material-ui/core'
import Rating from '@mui/material/Rating';
import '../containers/Button.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#112B3C',
        // height: '45px'
    },
    link: {
        color: '#f2f2f2',
        // marginBottom: '20px',
        // marginRight: '20px',
        display: 'flex',
        textDecoration: 'none',
        padding: '0.1rem',
        height: '100 %',
        cursor: 'pointer',
        fontFamily: 'Gotham',
        '&.active': {
            color: '#F25C05'
        },
        '&:hover': {
            color: '#F25C05'
        }
    },
    link1: {
        color: '#F25C05',
    },
    rate: {
        color: '#F25C05'
    }
}))


const RecommendedFoodForMood = ({ logout }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const search = useLocation().search;
    const params = new URLSearchParams(search);
    // let email = params.get('email'); // 
    // let mood = params.get('mood');
    let id = params.get('item');
    const [data, setData] = useState();
    const getData = async () => {
        let d = await axios.get('http://localhost:8000/api/user/dishDetails/', { params: { id: id} });
        setData(d.data);
        console.log(d);

        // setIngredients(.map((line,index)=> ingredients+=(index+1)+line+'\n'));
    }
    useEffect(() => {
        getData();
    }, []);
    const handleSignup = e => {
        e.preventDefault()
        // handleCloseSignup();
        navigate("/signup")
    };
    const handleLogin = e => {
        e.preventDefault()
        // handleCloseLogin();
        navigate("/loginRecommendation")
    };
    
    const handleClick = (e) => {
        e.preventDefault()
        window.location.replace(data.OrderLink)
    }
    const handleRoot = (e) => {
        e.preventDefault()
        navigate('/');
    }
    return (
        <div>
            {
                data && Object.keys(data) &&
                <>
                    <AppBar className={classes.root} elevation={0} position="static" >
                        <Toolbar>
                            <Grid container
                                alignItems="center">
                                <Grid item>
                                    <img src={image} className='img' />
                                </Grid>
                                <Grid item sm></Grid>
                                <Grid item xs={1}>
                                    <a className={classes.link} onClick={handleRoot}>Home</a>
                                </Grid>
                                <Grid item xs={1}>
                                    <a className={classes.link} onClick={handleSignup}>Sign Up</a>
                                </Grid>
                                <Grid item xs={1}>
                                    <a className={classes.link} onClick={handleLogin}>Sign In</a>
                                </Grid>
                                <Grid item xs={1}>
                                    <NavLink to='/about' className={classes.link}>About</NavLink>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                   
                    <br />
                    <br />
                    <br />
                    <h2 style={{ textAlign: 'center' }} className='mt-20'>{data.Dish}</h2><br />
                    <Grid container >
                        <div >
                            <img src={data.ImageLink} style={{ height: '95%', width: '60%', marginLeft: '256px' }} />
                        </div>
                    </Grid>
                    <Grid container>
                        <h3 style={{ marginLeft: '256px' }} className='h3Theme'>Ingredients</h3>
                    </Grid>
                    <pre style={{ marginLeft: '256px', fontFamily: 'Noto Sans' }}>
                        {data.RecipeIngredients}
                        {/* // .map((line,index)=>(index+1+'.\t')+line+'\n') */}
                    </pre>
                    <Grid container>
                        <h3 style={{ marginLeft: '256px' }} className='h3Theme'>Method</h3>
                    </Grid>
                    <p style={{ marginLeft: '256px', marginRight: '222px', fontFamily: 'Noto Sans' }}>
                        {data.Recipe}
                    </p>
                    <button className='swiggyOrder' onClick={e => handleClick(e)}>Order via Swiggy</button>
                    <br/>
                    <br/> 
                   <Footer /> 
               </>
            }



        </div>
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(RecommendedFoodForMood)

// export default RecommendedFoodForMood; 

