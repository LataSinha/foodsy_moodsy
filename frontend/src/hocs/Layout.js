import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user, googleAuthenticate } from '../actions/auth';
import CardMedia from '@mui/material/CardMedia';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const useStyles = makeStyles(theme => ({
//     // centered: {
//     //     position: 'absolute',
//     //     top: '50%',
//     //     left: '50%',
//     //     transform: 'translate(-50% -50%)',
//     //     fontSize: '100px'
//     // }
//     cardLayout: {
//         marginLeft: '30px',

//     },
//     cardLayout1: {
//         marginLeft: '10px',

//     },
//     cardL: {
//         borderRadius: '10px',
//         height: '95%'
//     },
//     suTheme: {
//         fontFamily: "Gotham",
//         color: '#F25C05',
//         marginTop: '70px',
//         marginLeft: '30px',
//         marginRight: '10px',
//         letterSpacing: '3px',
//         fontSize: '3em'
//     },
//     imgTheme: {
//         marginTop: '40px'
//     }

// }))

const Layout = ({ checkAuthenticated, load_user, children }) => {
    // const classes = useStyles();
    // const navigate = useNavigate();
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };


    // let location = useLocation();
    // useEffect(() => {
        // const values = queryString.parse(location.search);
        // const state = values.state ? values.state : null;
        // const code = values.code ? values.code : null;

        // console.log('State: ' + state);
        // console.log('Code: ' + code);

        // if (state && code) {
        //     props.googleAuthenticate(state, code)
        // } else {
            // checkAuthenticated();
            // load_user();
        // }
    // },[]);
    // const ExpandMore = styled((props) => {
    //     const { expand, ...other } = props;
    //     return <IconButton {...other} />;
    // })(({ theme, expand }) => ({
    //     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    //     marginLeft: 'auto',
    //     transition: theme.transitions.create('transform', {
    //         duration: theme.transitions.duration.shortest,
    //     }),
    // }));
    // const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };
    // const handleClick = (e) =>{
    //     e.preventDefault()
    //     let id = e.target.id;
    //     navigate("/recommended_food_for_mood/"+id);
    // }
    // const settings = {
    //     // className: "center",
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     // centerPadding: "60px",
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     cssEase: "linear"
    // }
    return (
        <div>
            {/* <Navbar /> */}
            {children}
            {/* <br />
            <br />
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
                        <p className='pTheme'>Living in the 21 st century we are provided with many services to tackle our
                            hunger cravings. But the abundance of these services
                        </p>
                        <button className='BtnTheme'>Read more</button>
                    </div>

                </Grid>

                <Grid item xs={6} container justifyContent="center">
                    <img src={image} className={classes.imgTheme} />
                </Grid>
            </Grid>
            <br />
            <Grid container justifyContent='center'>
                <div className={classes.suTheme}>Daily Suggestions</div>
            </Grid>
            <br></br>
            <div>
                <div className='carousel'>
                    <Slider {...settings}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={index.title}
                                subheader={index.category}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={imge1}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {index.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <button className='buttonThemeOrder mt-3' id={index.id} onClick={e => handleClick(e)}>Explore More</button>
                                </CardContent>
                            </Collapse>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={index.title}
                                subheader={index.category}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={imge2}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {index.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <button className='buttonThemeOrder mt-3' id={index.id} onClick={e => handleClick(e)}>Explore More</button>
                                </CardContent>
                            </Collapse>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={index.title}
                                subheader={index.category}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={imge3}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {index.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <button className='buttonThemeOrder mt-3' id={index.id} onClick={e => handleClick(e)}>Explore More</button>
                                </CardContent>
                            </Collapse>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={index.title}
                                subheader={index.category}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={imge}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {index.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <button className='buttonThemeOrder mt-3' id={index.id} onClick={e => handleClick(e)}>Explore More</button>
                                </CardContent>
                            </Collapse>
                        </Card> */}
                        {/* <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src={imge1}></img>
                                </div>
                            </div>
                        </div>
                        <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src={imge2}></img>
                                </div>
                            </div>
                        </div>
                        <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src={imge3}></img>
                                </div>
                            </div>
                        </div>
                        <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src={imge}></img>
                                </div>
                            </div>
                        </div>
                        <div className='card-wrapper'>
                            <div className='card'>
                                <div className='card-image'>
                                    <img src={imge1}></img>
                                </div>
                            </div>
                        </div> */}
                    {/* </Slider>
                </div>
            </div> */}
            {/* <Grid container className={classes.cardLayout}>
                <Grid item xs={3} >
                    <Card sx={{ maxWidth: 240 }} className={classes.cardL}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="145"
                                image={imge}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Pomegranate, ricotta and walnut spaghetti
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 240 }} className={classes.cardL}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="145"
                                image={imge1}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Wicked Cheese Sauce
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 240 }} className={classes.cardL}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="145"
                                image={imge2}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    All-in-one vegie pasta
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{ maxWidth: 240 }} className={classes.cardL}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="145"
                                image={imge3}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cream cheese and avocado roll
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid> */}

        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user, googleAuthenticate })(Layout);