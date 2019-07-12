import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Home from '@material-ui/icons/Home';
import Manage from '@material-ui/icons/Settings';
import Heart from '@material-ui/icons/Favorite';
import People from '@material-ui/icons/People';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';


const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        color : 'white',  
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }
}));


const mapStateToProps = ({objects}) => ({
    objects:objects.length
});


export default connect(mapStateToProps)(function UI(props) {

    const classes = useStyles();

    const theme = useTheme();

    const [open, setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }


    function handleDrawerClose() {
        setOpen(false);
    }


    return (
        <div className={classes.root}>

        <CssBaseline />

        <AppBar
            position="relative"
            className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })}
        >
            <Toolbar>

                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />

                </IconButton>
                
                <Typography variant="h6" noWrap>
                    Marker!
                </Typography>

            </Toolbar>

        </AppBar>


        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >

            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose} >
                    {theme.direction === 'ltr' ? 
                    <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>


            <Divider />

            <List>
                <NavLink to = '/' exact>
                    <ListItem>
                    <ListItemIcon><Home/></ListItemIcon>
                    <ListItemText>Home</ListItemText>
                    </ListItem>
                </NavLink>


                <NavLink to = '/manage'>
                    <ListItem>
                    <ListItemIcon><Manage/></ListItemIcon>
                    <ListItemText>
                        Manage {props.objects>0?
                            <div className = 'badge'>
                            {props.objects}
                            </div>:''}
                    </ListItemText>
                    </ListItem>
                </NavLink>
        
                {/*
                <NavLink to = '#'>
                    <ListItem>
                    <ListItemIcon><Heart/></ListItemIcon>
                    <ListItemText>My Places</ListItemText>
                    </ListItem>
                </NavLink>*/
                }

                <NavLink to = '/about'>
                    <ListItem>
                    <ListItemIcon><People/></ListItemIcon>
                    <ListItemText>About-Us</ListItemText>
                    </ListItem>
                </NavLink>
            </List>

        </Drawer>
        </div>
    );
});