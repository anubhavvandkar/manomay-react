import '../Styles/Navbar.css';
import {AppBar, Tabs, Tab, Grid, Box } from '@mui/material';
import * as React from 'react';

import Home from '../Pages/Home';
import Map from '../Pages/Map';
import Products from '../Pages/Products';
import Services from '../Pages/Services';
import FAQs from '../Pages/FAQs';
import Gallery from '../Pages/Gallery';
import Contact from '../Pages/Contact';

function Navbar(){

    const [selectedTab, setSelectedTab] = React.useState("Home");

    const handleChange = (event, newTab) => {
        setSelectedTab(newTab);
    };

    return (
        <div>
            <AppBar
            position="sticky"
            color="secondary"
            centered>
                <Tabs
                value={selectedTab}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                centered
                allowScrollButtonsMobile
                textColor="#ffffff"
                TabIndicatorProps={{
                    style: {
                      background: "#ffffff"
                    }
                }}>
                    <Tab 
                    value="Home"
                    label="Home"/>
                    <Tab 
                    value="Products"
                    label="Products"/>
                    <Tab 
                    value="Services"
                    label="Services"/>
                    <Tab 
                    value="FAQs"
                    label="FAQs"/>
                    {/* <Tab 
                    value="Gallery"
                    label="Gallery"/> */}
                    <Tab 
                    value="Contact"
                    label="Contact"/>
                </Tabs>
            </AppBar>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container 
                spacing={3} 
                padding={2}>
                    <Grid item xs={12} md={8}>
                        <div>
                            {selectedTab === "Home" ? <Home/> : null}
                            {selectedTab === "Products" ? <Products/> : null}
                            {selectedTab === "Services" ? <Services/> : null}
                            {selectedTab === "FAQs" ? <FAQs/> : null}
                            {selectedTab === "Gallery" ? <Gallery/> : null}
                            {selectedTab === "Contact" ? <Contact/> : null}
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div>
                            <Map/>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Navbar;