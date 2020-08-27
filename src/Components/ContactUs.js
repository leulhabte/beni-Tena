import React from 'react';
import { Container, Typography, Button, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Avatar, Box } from '@material-ui/core';
import useStyles from '../Styling/styling';
import Image from '../Res/dev.jpg';
import Image2 from '../Res/wearmask.jpg';
import Image3 from '../Res/keepdistance.jpg';
import Image4 from '../Res/cover.jpg';

const ContactUs = ()=>{
    const classes = useStyles();
    return(
        <div>
            <Container maxWidth='xl' className={classes.homeContainerHead3}>
                <Typography component='div' className={classes.overlay3}/>
                <Container className={classes.homeTitleHolder}>
                    <Typography variant='h2'>Contact Us</Typography>
                    <Typography variant='h5'>Web app and Mobile App Developers Contact Page</Typography>
                </Container>
            </Container>
            <Container maxWidth='xl'>
                <Container className={classes.container2}>
                    <Typography variant='h5' className={classes.homeHeader}>Developers</Typography>
                    <Divider variant='middle' className={classes.divider}/>
                </Container>
                <Container className={classes.homeBody}>
                    <Grid container spacing={5}>
                        <Grid container item lg={6} xs={12}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar src={Image} className={classes.avatar}/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='body1' className={classes.homeBodyText}>
                                            Name Leul Habte
                                        </Typography>
                                        <Typography variant='body1' className={classes.homeBodyText}>
                                            E-mail: leulh63@gmail.com
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid container item lg={6} xs={12}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar src={Image} className={classes.avatar}/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='body1' className={classes.homeBodyText}>
                                            Name Mehiretab Teshome
                                        </Typography>
                                        <Typography variant='body1' className={classes.homeBodyText}>
                                            E-mail: mehiretabteshome@gmail.com
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid container item lg={6} xs={12}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar src={Image} className={classes.avatar}/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='body1' className={classes.homeBodyText}>
                                            Name Mebratu Kumera
                                        </Typography>
                                        <Typography variant='body1' className={classes.homeBodyText}>
                                            E-mail: aronikakume1996@gmail.com
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid container item lg={6} xs={12}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <Avatar src={Image} className={classes.avatar}/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='body1' className={classes.homeBodyText}>
                                            Name Tsehay Birhanu
                                        </Typography>
                                        <Typography variant='body1' className={classes.homeBodyText}>
                                            E-mail: alulabirhanu7@gmail.com
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Container>
                <Box my={15}/>
            </Container>
        </div>
    );
}

export default ContactUs;