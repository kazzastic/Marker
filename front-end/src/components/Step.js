import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    }
    })
);


function getSteps() {
    return ['Mark Your Location...', 'Manage them all in the Manage Panel',
    'Track Back your location...'];
}


function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Mark Your Location...';
        case 1:
            return 'Manage them all in the Manage Panel';
        case 2:
            return 'Track Back your location...';
        default:
            return 'Unknown step';
    }
}


export default function HorizontalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();


    function isStepOptional(step) {
        return step === 1;
    }


    function isStepSkipped(step) {
        return skipped.has(step);
    }


    function handleNext() {
        let newSkipped = skipped;

        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(newSkipped);
    }


    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }


    function handleSkip() {
        if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep(prevActiveStep => prevActiveStep + 1);
        setSkipped(prevSkipped => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    }

    function handleReset() {
        setActiveStep(0);
    }


  return (

    <div className={classes.root}>

        <Stepper activeStep={activeStep}>
            
            {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                    labelProps.optional = (
                            <Typography variant="caption">
                                Optional
                            </Typography>);
                }

                if (isStepSkipped(index)) {
                    stepProps.completed = false;
                }

                return (
                    <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                );
                })
            }

        </Stepper>


        <div>
            {activeStep === steps.length ? (
            <div>
                <Typography className={classes.instructions}>
                    All steps completed - you&apos;re finished
                </Typography>
                
                <Button onClick={handleReset} className={classes.button}>
                    Reset
                </Button>
            </div>
            ) : (
            <div></div>
            )}
        </div>

    </div>
  );
}