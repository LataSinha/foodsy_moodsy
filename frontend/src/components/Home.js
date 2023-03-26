import React, { Fragment, useState, useEffect } from 'react';
import useCollapse from 'react-collapsed'
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import imge1 from '../hocs/Wicked cheese sauce.jpg';
import imge2 from '../hocs/All-in-one veggie pasta.jpg';
import imge3 from '../hocs/Cream cheese and avocado roll.jpg';
import { makeStyles, AppBar, Toolbar, useMediaQuery, useTheme } from '@material-ui/core';
import '../index.css';
import cover from '../hocs/homePagepic.png';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { Divider, Box, Button } from "@mui/material";
import image from './foodsymoodsy.png';
import DrawerComponent from './Drawer';
import './image.css';
import About from './About';
import Footer from './Footer';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Image = styled('img')(({ theme }) => ({
    marginTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: 120
    }
}));
const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    height: "30vw"
};
const Component = styled(Box)`
    // margin-top: 5px;
    background: #FFFFFF;
`

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#000',
        // height:'45px'
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        backgroundColor: '#FFFF',
        borderRadius: '25px',
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    },
    link: {
        color: '#f2f2f2',
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
    link2: {
        color: '#f2f2f2',
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
    suTheme: {
        fontFamily: "Gotham",
        color: '#F25C05',
        marginTop: '70px',
        marginLeft: '30px',
        marginRight: '10px',
        letterSpacing: '3px',
        fontSize: '3em'
    },
    imgTheme: {
        marginTop: '40px'
    },
    grid: {
        marginTop: '10px',
        marginLeft: '50px'
    }

}))

const Home = ({ logout, isAuthenticated }) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [isExpanded, setExpanded] = useState(false)
    const [data, setData] = useState([]);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    const navigate = useNavigate();
    // const getData = async () => {
    //     let d = await axios.get('http://localhost:8000/api/user/dailySuggestions/');
    //     // setData(d.data);
    //     console.log(data);
    //     console.log(d);
    //     return d;
    // }
    useEffect(() => {
        // let d = await getData();
        const getData = async () => {
        let d = await axios.get('http://localhost:8000/api/user/dailySuggestions/');
        setData(d.data);
        console.log(d.data)
        }
        getData();
    }, []);
    const handleClickSignup1 = e => {
        e.preventDefault()
        // handleCloseSignup();
        navigate("/signup")
    };
    const handleClickLogin1 = e => {
        e.preventDefault()
        // handleCloseLogin();
        navigate("/loginRecommendation")
    };
    const handleRoot = (e) => {
        e.preventDefault()
        navigate('/');
    }
    const handleLogout = e => {
        e.preventDefault();
        logout();
        navigate("/");
    }
    const RegisterNgo = () => {
        navigate("/registerNGO")
    }

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };
    const handleClick = (e) => {
        e.preventDefault()
        let id = e.target.id;
        //   navigate("/recommended_food_for_mood/"+id);
       
        window.open("/dailySuggestions/?item="+id, '_blank')
    }
    const guestLinks = () => (
        <Fragment>
            {/* <li className='nav-item'>
                <NavLink className='nav-link' to='/signup'>Sign Up</NavLink>
            </li> */}
            {/* <li className='nav-item'>
                <NavLink className='nav-link' to='/signin'>Sign Ip</NavLink>
            </li> */}
            <Grid item xs={1}>
                <a className={classes.link} onClick={handleClickSignup1} >Sign Up</a>
            </Grid>
            <Grid item xs={1}>
                <a className={classes.link} onClick={handleClickLogin1}>Sign In</a>
            </Grid>
        </Fragment>
    );
    const authLinks = () => (
        // <li className='nav-item'>
        //     <a className='nav-link' href='#!' onClick={logout}>Logout</a>
        // </li>
        <Grid item xs={1}>
            <a className={classes.link} onClick={handleLogout}>Sign Out</a>
        </Grid>
    );
    return (
        <>
            <div >
                <AppBar className={classes.root} elevation={0} position="static" >
                    <Toolbar>
                        {isMobile ? (
                            <DrawerComponent />
                        ) : (
                            <Grid container
                                alignItems="center">
                                <Grid item>
                                    <img src={image} className='img' />
                                </Grid>
                                <Grid item sm></Grid>
                                <Grid item xs={1}>
                                    <a className={classes.link} onClick={handleRoot}>Home</a>
                                </Grid>
                                {isAuthenticated ? authLinks() : guestLinks()}
                                {/* <Grid item xs={1.5}>
                                    <a href='#suggestions' className={classes.link2}>Suggestions</a>
                                </Grid> */}
                                <Grid item xs={2}>
                                    <a style={{display:'flex'}} onClick={RegisterNgo} className={classes.link}>Register for NGO</a>
                                </Grid>
                                <Grid item xs={1}>
                                    <a href='#about' className={classes.link}>About Us</a>
                                </Grid>
                            </Grid>)}
                    </Toolbar>
                </AppBar>
            </div>

            <div >
                <br />
                <Grid container >
                    <Grid item xs={6}>
                        <Grid item xs={3} lg={3}>
                            <span className='h1Theme'>How</span>
                            <span className='h1Theme' style={{ color: '#F25C05' }}>Food</span>
                        </Grid>
                        <Grid item xs={3} lg={3}>
                            <span className='h1Theme'>Impacts</span>
                        </Grid>
                        <Grid item xs={3} lg={3}>
                            <span className='h1Theme'>Your</span>
                            <span className='h1Theme' style={{ color: '#F25C05' }}>Mood</span>
                            <span className='h1Theme'>!</span>
                        </Grid>
                        <div>
                            <p className='pTheme'>When we consider the connection between the brain and the gut, it’s important to know that 90% of serotonin receptors are located in the gut. </p>
                            <p className='pTheme1'{...getCollapseProps()}>There is anatomical and physiologic two-way communication between the gut and brain via the vagus nerve. The gut-brain axis offers us a greater understanding of the connection between diet and disease, including depression and anxiety.<br />
                                A more recent explanation for the way in which our food may affect our mental wellbeing is the effect of dietary patterns on the gut microbiome—a broad term that refers to the trillions of microbial organisms, including bacteria, viruses, and archaea, living in the human gut.
                                The gut microbiome interacts with the brain in bidirectional ways using neural, inflammatory, and hormonal signalling pathways. The role of altered interactions between the brain and gut microbiome on mental health has been proposed on the basis of the following evidence:
                                emotion-like behaviour in rodents changes with changes in the gut microbiome, major depressive disorder in humans is associated with alterations of the gut microbiome, and transfer of faecal gut microbiota from humans with depression into rodents appears to induce animal
                                behaviours that are hypothesised to indicate depression-like states. We should be careful about using food as the only treatment for mood, and when we talk about mood problems we are referring to mild and moderate forms of depression and anxiety.<br />
                                Studies have found that the change in seasons often leads to an increase in emotional eating. In this study, individuals who feel blue during the winter and fall months, due to the short days, experience an increase in snacking, craving starchy foods and sugary foods,
                                as well as eating more in the evenings. Foods sweetened with sugar like soda and cookies, as well as flour-based foods like bread, crackers and baked goods might give you a quick energy boost, but their low nutritional value could leave you with
                                low energy and in a down mood later on.<br />
                                There are plenty of foods that affect your mood in a positive way. Ease into it and you'll see rewards.
                            </p>
                            <button className='BtnTheme'
                                {...getToggleProps({
                                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                                })}
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>

                            {/* <button className='BtnTheme'>Read more</button> */}
                        </div>

                    </Grid>

                    <Grid item xs={6} container justifyContent="center">
                        <Image src={cover} className={classes.imgTheme} />
                    </Grid>
                </Grid>
                <Grid container justifyContent='center'>
                    <div className={classes.suTheme}>Daily Suggestions</div>
                </Grid>
                <br></br>
                <div>
                    <a name='suggestions'>
                        <Component>
                            {/* <Divider /> */}
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={4000}
                                keyBoardControl={true}
                                centerMode={true}
                                slidesToSlide={1}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                                containerClass="carousel-container"
                            >


                                {/* <Grid item xs={12} className={classes.grid} spacing={2}> */}
                                    {/* <Card sx={{ maxWidth: 500 }} style={cardStyle}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image={imge1}
                                                alt="dish"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom component="div">
                                                    Blackened corn and smoked tomato salsa
                                                </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <button className='buttonThemeOrder mt-3' onClick={e => handleClick(e)}>Explore More</button>

                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} className={classes.grid} spacing={2}>
                                    <Card sx={{ maxWidth: 345 }} style={cardStyle}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image={imge2}
                                                alt="dish"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Blackened corn and smoked tomato salsa
                                                </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <button className='buttonThemeOrder mt-3' onClick={e => handleClick(e)}>Explore More</button>

                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} className={classes.grid} >
                                    <Card sx={{ maxWidth: 345 }} style={cardStyle}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image={imge3}
                                                alt="dish"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Blackened corn and smoked tomato salsa
                                                </Typography>

                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <button className='buttonThemeOrder mt-3' onClick={e => handleClick(e)}>Explore More</button>

                                        </CardActions>

                                    </Card> */}
                                    
                                     {/* <Grid item xs={12} className={classes.grid}> */}
                                     {/* <div> */}
                                    {data && Object.keys(data).map((food, id) => (
                                       <Grid item xs={12} className={classes.grid}>
                                            <Card sx={{ maxWidth: 500 }} style={cardStyle}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="194"
                                                        image={data[food].ImageLink}
                                                        alt={data[food].Dish}
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h6" component="div">
                                                            {data[food].Dish}
                                                        </Typography>

                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    {console.log(id, data[food])}
                                                    <button className='buttonThemeOrder mt-3' id={data[food].Dish} onClick={e => handleClick(e)}>Explore More</button>

                                                </CardActions>
                                            </Card>
                                        </Grid>

                                    ))}
                             
                                {/* </div> */}
                            </Carousel>
                        </Component>
                    </a>
                    <br />

                </div>

            </div ><div style={{ backgroundColor: '#000' }}>
                <a name='about'><About /></a>
                <br /><br />
                <Footer />
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Home);