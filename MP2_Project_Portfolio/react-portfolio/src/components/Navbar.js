import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Grid, Tab, Tabs, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import InsightsIcon from '@mui/icons-material/Insights';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navbar: {
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  },
  logo: {
    flexGrow: 1,
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    marginRight: '10px',
  },
  drawer: {
    width: 250,
  },
}));

const Navbar = ({ links }) => {
  const classes = useStyles();
  const [value, setValue] = useState();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar position="relative" className={classes.toolbar}>
          <Grid sx={{ placeItems: 'center' }} container>
            <Grid item xs={4} sx={{ display: 'flex' }}>
              <IconButton onClick={handleDrawerToggle}>
                <InsightsIcon sx={{ marginRight: '5%', fontSize: '2rem' }} />
              </IconButton>
              <Typography variant="h6" className={classes.logo} sx={{ marginLeft: '5%' }}>
                JP Adlaon
              </Typography>
            </Grid>
            <Grid xs={8} md={6} item>
              <Tabs
                value={value}
                onChange={(e, val) => setValue(val)}
                textColor="inherit"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                variant="scrollable"
                scrollButtons="auto"
              >
                {links.map((link, index) => (
                  <Tab key={index} label={link} component={Link} to={`/${link.toLowerCase()}`} />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={6} md={2} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              <Button variant="contained" component="a" href="https://drive.google.com/file/d/18Ea_w4yA8QzPtQ2wMn7oVlvZwdLEmSnb/view?usp=sharing" target="_blank">
                Download CV
              </Button>
            </Grid>
            <Grid item xs={2} sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <List className={classes.drawer}>
          {links.map((link, index) => (
            <ListItem key={index} component={Link} to={`/${link.toLowerCase()}`}>
              <ListItemText primary={link} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
