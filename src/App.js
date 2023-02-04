import * as React from 'react';
import { Button, Container, MobileStepper } from '@mui/material';
import useStyles from './theme/useStyles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@emotion/react';


function App() {

  const theme = useTheme();
  
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const classes = useStyles;
  return (
    <Container alignContent='center'>
      <MobileStepper
        variant="progress"
        steps={12}
        position="static"
        activeStep={activeStep}
        sx={{ flexGrow: 1}}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 11} sx={classes.btnNextAndBack}>
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={classes.btnNextAndBack}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Container>
  );
}

export default App;
