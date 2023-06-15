import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Grid, Tab, Tabs, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import '@mui/styles';
import InsightsIcon from '@mui/icons-material/Insights';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  navbar: {
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    boxShadow: 'none',
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
            <Grid xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Tabs
                value={value}
                onChange={(e, val) => setValue(val)}
                textColor="inherit"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                {links.map((link, index) => (
                  <Tab key={index} label={link} component={Link} to={`/${link.toLowerCase()}`} />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={2}>
              <Box>
                <Button sx={{ marginRight: 'auto' }} variant="contained">
                  Download CV
                </Button>
              </Box>
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
