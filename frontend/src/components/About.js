import React from 'react';
import '../index.css';
import { Grid } from '@material-ui/core';
import imge from './foodwonder.png'
import profile1 from './profile1.jpeg';
import profile3 from './profile3.png'
import profile2 from './profile2.jpg'
import profile4 from './profile4.jpeg'
import profile5 from './profile5.jpeg'

const About = () => (
    <div className='aboutDiv'>
        <Grid container>
            <Grid item xs={7}>
                <h4 style={{ fontFamily: 'Gotham', color: '#fff', marginLeft: '10%', fontSize: '3em' }}>About Us</h4>
                <p style={{ marginLeft: '10%', color: '#fff', textAlign: 'justify' }}>Living in the 21st century we are provided with many services to tackle
                    our hunger cravings. But the abundance of these services in this era
                    have put humankind into a great dilemma of  'What to Eat?'.
                    Many of us just keep scrolling within the options and end by choosing
                    nothing, also somewhere in this process of ordering already prepared
                    food online we are also building a distance from traditional preparation
                    of food.<br /><br />
                    Also, in the current scenario either we have a grand celebration or a
                    little event we all like to meet up and celebrate it together and it is
                    known to most of us that gatherings are incomplete without food and
                    whenever there is a gathering it requires food in bulk quantity and no
                    one can exactly predict how much food is required. Eventually, the
                    major consequence of the above situation is amount of food left ended
                    by getting wasted.
                    Hence we the students of MCA batch 2021-2023 came up with our website FoodsyModsy, it will give suggestions to the users of food according
                    to their mood which will save time and apart from this we will also
                    work for a social cause of saving the food and supply food to the
                    needy. </p>
            </Grid>
            <Grid item xs={5}>
                <img src={imge} style={{ marginRight: '15%', marginTop: '10%' }} />
            </Grid>

        </Grid>
        <Grid >
            <h4 style={{ fontFamily: 'Gotham', color: '#fff', marginLeft: '5%', fontSize: '3em' }}>Our Team</h4>
            <Grid container>
                <Grid item xs={4} >
                    <img src={profile1} style={{ borderRadius: '50%', height: '40%', width: '40%', marginLeft: '30%' }} />
                    <figcaption style={{ marginLeft: '40%', color: '#fff', display: 'block' }}>Nitish Gupta</figcaption>
                    <figcaption style={{ marginLeft: '34%', color: '#fff', display: 'block' }}>Backend Developer</figcaption><br/>
                    <p style={{ marginLeft: '10%', color: '#fff', textAlign: 'justify' }}>Developed the recommendation model for food recommendation based upon the mood.
                        Using python modules such as numpy, panda, beautiful soup.
                        Techniques used collaborative filtering, content based filtering, web scrapping etc.
                        Integration of model with Django backend.</p>
                </Grid>

                <Grid item xs={4}>
                <img src={profile2} style={{ borderRadius: '50%', height: '40%', width: '40%', marginLeft: '30%' }} />
                    <figcaption style={{ marginLeft: '35%', color: '#fff', display: 'block' }}>Arpit Samadhiya</figcaption>
                    <figcaption style={{ marginLeft: '32%', color: '#fff', display: 'block' }}>Backend Developer</figcaption><br/>
                    <p style={{ marginLeft: '10%', color: '#fff', textAlign: 'justify',marginRight:'15%' }}>
                    Used Django REST framework and SQLite database. Developed the APIs for authentication system. 
                    Collaborated with Nitish to develop the APIs for recommendation system.
                    </p>
                </Grid>
                <Grid item xs={4}>
                    <img src={profile3} style={{ borderRadius: '50%', height: '40%', width: '40%', marginLeft: '30%' }} />
                    <figcaption style={{ marginLeft: '40%', color: '#fff', display: 'block' }}>Lata Sinha</figcaption>
                    <figcaption style={{ marginLeft: '32%', color: '#fff', display: 'block' }}>Frontend Developer</figcaption><br/>
                    <p style={{ marginLeft: '10%', color: '#fff', textAlign: 'justify',marginRight:'15%' }}>Used React.js, Redux and MaterialUI in frontend.
                        Designed and developed the authentication system. Designed the pages for mood selection and dishes recommendation.
                        Designed the client side of the recommendation module.
                    </p>
                </Grid>
            </Grid>
            <Grid container>
            <Grid item xs={4}>
                    <img src={profile4} style={{ borderRadius: '50%', height: '50%', width: '40%', marginLeft: '30%' }} />
                    <figcaption style={{ marginLeft: '35%', color: '#fff', display: 'block',textSize:'20%',textWeight:'bold' }}>Somiya Bhardwaj</figcaption>
                    <figcaption style={{ marginLeft: '32%', color: '#fff', display: 'block' }}>Frontend Developer</figcaption><br/>
                    <p style={{ marginLeft: '10%', color: '#fff', textAlign: 'justify',marginRight:'15%' }}>Used React.js, Redux and MaterialUI in frontend.
                    </p>
                </Grid>
                <Grid item xs={4}>
                    <img src={profile5} style={{ borderRadius: '50%', height: '50%', width: '40%', marginLeft: '30%' }} />
                    <figcaption style={{ marginLeft: '35%', color: '#fff', display: 'block',textSize:'20%',textWeight:'bold' }}>Tarun Chawla</figcaption>
                    <figcaption style={{ marginLeft: '32%', color: '#fff', display: 'block' }}>Backend Developer</figcaption><br/>
                    <p style={{ marginLeft: '10%', color: '#fff', textAlign: 'justify',marginRight:'15%' }}> Used Django REST framework and SQLite database. My work is to create databse using SQLite with Arpit.</p>
                </Grid>
            </Grid>
        </Grid>
    </div>

);

export default About;