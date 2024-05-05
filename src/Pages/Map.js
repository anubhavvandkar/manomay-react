import { useTheme } from '@emotion/react';
import React from 'react';
import '../Styles/Item.css'
import '../Styles/Map.css'
import {KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';
import { MobileStepper, Button } from '@mui/material';
import SwipeableViews from 'react-swipeable-views-react-18-fix';
import { autoPlay } from 'react-swipeable-views-utils';
import { APP_LOCATIONS } from '../AppConstants'

function Map() {

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const imagesPath = require.context('../Images/Signia/', true);
    const vendorImages = imagesPath.keys();
    const maxSteps = vendorImages.length;
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1)%maxSteps);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => (maxSteps + prevActiveStep - 1)%maxSteps);
    };
    
    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className="item map">
            <h3>Learn more about our vendors: Signia</h3>
            <div className='vendor'>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents>
                    {vendorImages.map((img, index) => (
                    <div key={img}>
                        {Math.abs(activeStep - index) <= 2 ? (
                        <img
                        src={imagesPath(`${img}`)}
                        alt={img}
                        loading="lazy"
                        width={"100%"}
                        />
                        ) : null}
                    </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}>
                        Next
                        {theme.direction === 'rtl' ? (<KeyboardArrowLeft />) : (<KeyboardArrowRight />)}
                    </Button>
                    }
                    backButton={
                    <Button 
                        size="small" 
                        onClick={handleBack}>
                        {theme.direction === 'rtl' ? (<KeyboardArrowRight />) : (<KeyboardArrowLeft />)}
                        Back
                    </Button>
                    }
                />
            </div>
            <h3>Find us here on Google Maps:</h3>
            {APP_LOCATIONS.map((branch) => (
                <div>
                    <p>{branch.branch}</p>
                    <div className='container'>
                        <iframe 
                            className='responsive-iframe'
                            title={branch.branch}
                            src={branch.src}
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            ))}
            </div>
    );
}
  
export default Map;