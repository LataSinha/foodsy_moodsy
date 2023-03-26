import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import axios from "axios";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core'
import imge1 from '../hocs/Wicked cheese sauce.jpg';
import imge2 from '../hocs/All-in-one veggie pasta.jpg';
import imge3 from '../hocs/Cream cheese and avocado roll.jpg';
import { makeStyles, useTheme } from '@material-ui/core';
import '../index.css';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import { Divider, Box, Button } from "@mui/material"

const useStyles = makeStyles(theme => ({
    app: {
        backgroundColor: 'white'
    },
    grid: {
        marginLeft: '80px'
    },
    suTheme: {
        fontFamily: "Gotham",
        color: '#F25C05',
        // marginTop: '70px',
        marginLeft: '30px',
        marginRight: '10px',
        letterSpacing: '3px',
        fontSize: '3em'
    },
}))
const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    height: "30vw"
};



const Suggestions = () => {
    const classes = useStyles();
    const theme = useTheme();
    const navigate = useNavigate();
    const search = useLocation().search;
    const params = new URLSearchParams(search);
    let email = params.get('email'); // 
    let mood = params.get('mood');
    console.log(email, mood);
    const [data, setData] = useState();

    useEffect(() => {
        // let d = await getData();
        const getData = async () => {
            let d = await axios.get('http://localhost:8000/api/user/dailySuggestions/');
            setData(d.data);
            console.log(d.data)
        }
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
    const handleClick = (e) => {
        e.preventDefault()
        let id = e.target.id;
        //   navigate("/recommended_food_for_mood/"+id);
        window.open("/dailySuggestions/?item=" + id, '_blank')
    }
    return (
        <>
            <Grid container justifyContent='center'>
                <div className={classes.suTheme}>Daily Suggestions</div>
            </Grid>
            <br></br>
            <Grid container>
                <br />

                <Grid container className='mt-50' spacing={3}>

                    {data && Object.keys(data).map((food, id) => (
                        <Grid item xs={3} className={classes.grid}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={data[food].ImageLink}
                                        alt={data[food].Dish}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
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
                </Grid>
                <Footer />
            </Grid>
        </>
    )
}

export default Suggestions;