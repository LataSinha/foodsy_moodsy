import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, AppBar, Typography, makeStyles, CardActionArea, Toolbar} from '@material-ui/core';
import '../containers/Button.css';
import '../index.css';
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
    app: {
        backgroundColor: 'white'
    },
    grid: {
        marginLeft: '80px'
    }
}))
const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    height: "30vw"
};

const RecommendedFood = (props) => {
    //    let {mood} = useParams();
    const search = useLocation().search;
    const params = new URLSearchParams(search);
    let email = params.get('email'); // 
    let mood = params.get('mood');
    console.log(email, mood);
    const [data, setData] = useState();
    const classes = useStyles();
    const getData = async () => {
        let d = await axios.get('http://localhost:8000/api/user/recommendedFood/', { params: { email: email, mood: mood } });
        setData(d.data);
        // console.log(data);
        console.log(d);
    }
    useEffect(() => {
        getData();
    }, []);
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    // const handleClick = (e) =>{
    //     e.preventDefault()
    //     window.location.replace('https://mui.com/material-ui/react-card/#main-content')
    // }
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault()
        let id = e.target.id;
        //   navigate("/recommended_food_for_mood/"+id);
        window.open("/recommended_food_for_mood/?email="+email+"&mood="+mood+"&item="+id, '_blank')
    }

    return (
        // <div>
        <Grid container>
            <br />
            <AppBar position="fixed" className={classes.app}>
                <Grid item ></Grid>
                <Grid item sm>
                    <span className='h2Theme' style={{ marginLeft: '139px', color: '#F25C05' }}>Dishes</span>
                    <span className='h2Theme' style={{ color: 'black' }}>You</span>
                    <span className='h2Theme' style={{ color: 'black' }}>Can</span>
                    <span className='h2Theme' style={{ color: 'black' }}>Have</span>
                    <span className='h2Theme' style={{ color: 'black' }}>As</span>
                    <span className='h2Theme' style={{ color: 'black' }}>You</span>
                    <span className='h2Theme' style={{ color: 'black' }}>Are</span>
                    <span className='h2Theme' style={{ color: '#F25C05' }}>{mood}</span>
                </Grid>
            </AppBar>
            <Toolbar/>
            <Grid container className='mt-50' spacing={3}>

                {data && Object.keys(data).map((food, id) => (
                    <Grid item xs={3} className={classes.grid}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                {/* <CardHeader
                            action={
                                <IconButton aria-label="settings">
                                <MoreVertIcon />
                                </IconButton>
                            } 
                  title={data[food].Dish}
                //   subheader={food.recipe.dishType}
                /> */}
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={data[food].ImageLink}
                                    alt={data[food].Dish}
                                />
                                {/* <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {index.description}
                  </Typography> 
                </CardContent> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {data[food].Dish}
                                    </Typography>
                                    
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                {console.log(id,data[food])}
                                <button className='buttonThemeOrder mt-3' id={data[food].Dish} onClick={e => handleClick(e)}>Explore More</button>
                                
                                </CardActions>
                        </Card>
                    </Grid>

                ))}
                {/* // <p>{data && data.title}</p> */}
                {/* </Row>
        // </Container> */}
            </Grid>
            <Footer />
        </Grid>
    )
}

export default RecommendedFood;