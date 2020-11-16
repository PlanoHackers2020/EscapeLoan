import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BasicInfoForm from './BasicInfoFrom';
import PriorLoanForm from './PriorLoanForm';
import NewLoanForm from './NewLoanForm';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return ['Basic Information', 'Prior Loan Details', 'New Loan Request'];
}

export default function RequestStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === 0) {
        return prevActiveStep;
      }
      return prevActiveStep - 1;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(stepIndex: number) {
    switch (stepIndex) {
      case 0:
        return (
          <BasicInfoForm
            firstStep={activeStep === 0}
            lastStep={activeStep === steps.length - 1}
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        );
      case 1:
        return (
          <PriorLoanForm
            firstStep={activeStep === 0}
            lastStep={activeStep === steps.length - 1}
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        );
      case 2:
        return (
          <NewLoanForm
            firstStep={activeStep === 0}
            lastStep={activeStep === steps.length - 1}
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        );
      default:
        return (
          <BasicInfoForm
            firstStep={activeStep === 0}
            lastStep={activeStep === steps.length - 1}
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        );
    }
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>{getStepContent(activeStep)}</div>
        )}
      </div>
    </div>
  );
}
