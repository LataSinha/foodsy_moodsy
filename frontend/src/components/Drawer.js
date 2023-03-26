import React,{useState} from 'react';
import { Drawer,List,ListItem,ListItemText,makeStyles,IconButton,Paper,Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(()=>({
    link:{
        color: '#F25C05',
        display: 'flex',
        textDecoration: 'none',
        padding: '0.1rem',
        height: '100 %',
        cursor: 'pointer',
         '&.active': {
            color: '#f2f2f2'
         },
        '&:hover': {
            color: '#f2f2f2'
         }
    },
    icon:{
        color: "#ffff"
    }
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const handleCloseSignup = () => setShowSignup(false);
    const handleShowSignup = () => setShowSignup(true);
    const navigate = useNavigate();
    const handleClickSignup1 = e => {
        e.preventDefault()
        handleCloseSignup();
        navigate("/signup")
    };
    const handleClickSignup2 = e => {
        e.preventDefault()
        handleCloseSignup();
        navigate("/signupAsOrg")
    };
    return(
        <>
            <Drawer  open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                        <a className={classes.link} onClick={handleShowSignup}>Sign Up</a>
                        <Modal show={showSignup} onHide={handleCloseSignup} centered>
                                    <Modal.Header closeButton >
                                        <Modal.Title className={classes.link1}>Sign Up for</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Paper >
                                            <Grid container spacing={4} justifyContent="center">
                                                <Grid item xs={6} >
                                                    <div>
                                                        <button className="popup1Signup" onClick={e => handleClickSignup1(e)}>Food Recommendation/Donation</button>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div>
                                                        <button className="popup2Signup" onClick={e => handleClickSignup2(e)}>Organization</button>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </Paper >
                                    </Modal.Body>
                                    <Modal.Footer></Modal.Footer>
                                </Modal>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/about">About</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/signup">Signup</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                    <ListItemText>
                        <Link to="/loginAs">Login</Link>
                    </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
                </IconButton>
        </>
    )
}
export default DrawerComponent