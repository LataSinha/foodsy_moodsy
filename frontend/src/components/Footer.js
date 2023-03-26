import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../index.css';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import image from './foodsymoodsy.png';
import './image.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const useStyles = makeStyles(theme => ({
        link: {
            color: '#fff',
            textDecoration: 'none',
            padding: '0.1rem',
            cursor: 'pointer',
            // fontWeight: 'bold',
            '&.active': {
                color: '#f2f2f2'
            },
            '&:hover': {
                color: '#FF8D29'
            }
    
        }
    }))

const Footer = () => {
  const classes = useStyles();
    const handleClick1 = (e) =>{
        e.preventDefault()
        window.location.replace('https://mui.com/material-ui/react-card/#main-content')
    }
  return (
    <>
    <div className='footer' style={{margin:'0px',padding:'0px'}}>
      <Grid container>
        <Grid item xs={4}>
            <img src = {image} className='img1' /><br/>
            <Typography style={{display:'flex'}}><LocationOnIcon style={{color:'#fff',cursor:'pointer',marginLeft:'15%'}}  sx={{ fontSize: '40px' }}/><h6 style={{color:'#fff'}}>Centre for Development of Advanced Computing</h6></Typography>
            <p style={{color:'#fff',marginLeft:'17%'}}> B-30, Sector-62, Institution Area, </p>
            <p style={{color:'#fff',marginLeft:'17%'}}>Noida - 201307</p>
            <p style={{color:'#fff',marginLeft:'17%'}}>Uttar Pradesh (India)</p>
            <p style={{color:'#fff',marginLeft:'17%'}}>Phone: +91-120-2210800</p>
        </Grid>
        <Grid item xs={4} >
            <h5 style={{color:'#fff',fontSize:'bold',marginTop:'3%'}}>Useful Links</h5><br/>
            <Link to='/' className={classes.link}>Home</Link><br/><br/>
            <Link to='/signup' className={classes.link}>Sign Up</Link><br/><br/>
            <Link to='/suggestions' className={classes.link}>Daily Suggestions</Link><br/><br/>
            <Link to='/about' className={classes.link}>About Us</Link><br/>
        </Grid>
        <Grid item xs={4}>
            <h5 style={{color:'#fff',fontSize:'bold',marginTop:'3%'}}>Follow Us</h5><br/>
            <Typography><InstagramIcon style={{color:'#fff',cursor:'pointer'}}  sx={{ fontSize: '50px' }} onClick={handleClick1}/></Typography><br/><br/>
            <Typography><FacebookIcon style={{color:'#fff',cursor:'pointer'}}  sx={{ fontSize: '50px' }} onClick={handleClick1}/></Typography>
        </Grid>
      </Grid>
    </div>
    </>
  )
}

export default Footer;
