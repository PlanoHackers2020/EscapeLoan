import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from 'formik-material-ui-pickers';
import DayjsUtils from '@date-io/dayjs';
import MatUiStyles from './MatUiStyles';

interface Values {
  email: string;
  password: string;
}

interface Props {
  firstStep: boolean;
  lastStep: boolean;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
}

export default function BasicInfoForm(props: Props) {
  const classes = MatUiStyles();

  return (
    <div>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validate={(values) => {
            const errors: Partial<Values> = {};
            if (
              values.email &&
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false);
              props.handleNext();
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Field
                halfWidth
                className={classes.textField}
                component={TextField}
                name="firstName"
                type="text"
                label="First Name"
                style = {{width: "35%"}}
              />
              <Field
                className={classes.textField}
                component={TextField}
                name="middleInitial"
                type="text"
                label="Middle Initial"
                style = {{width: "10%"}}
              />    
              <Field
                fullWidth
                className={classes.textField}
                component={TextField}
                name="lastName"
                type="text"
                label="Last Name"
                style = {{width: "35%"}}
              />
                      
              <Field
                className={classes.textField}
                component={TextField}
                name="genSuffix"
                type="text"
                label="Jr, Sr, III, ect."
                style = {{width: "10%"}}
              />
              <br/>
              <br/>
              <br/>
              <Field
                className={classes.textField}
                component={TextField}
                name="socialSecurity"
                type="text"
                label="SSN"
                style = {{width: "45%"}}
              />                      
              <Field
                fullWidth
                format="YYYY-MM-DD"
                component={DatePicker}
                name="dateOfBirth"
                label="Date of Birth"
                style = {{width: "50%"}}
              />
              <br/>
              <br/>
              <br/>
              <Field
                fullWidth
                className={classes.textField}
                component={TextField}
                name="email"
                type="email"
                label="Email"
                style = {{width: "45%"}}
              />
              <Field
                fullWidth
                className={classes.textField}
                component={TextField}
                type="text"
                label="Phone"
                name="phone"
                style = {{width: "30%"}}
              />
              <br/>
              <br/>
              <br/>
              <br/>

              {isSubmitting && (
                <LinearProgress className={classes.progressBar} />
              )}
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
                className={classes.button}
              >
                {props.lastStep ? 'Finish' : 'Next'}
              </Button>
              <Button
                variant="contained"
                color="primary"
                disabled={props.firstStep}
                onClick={props.handleBack}
                className={classes.button}
              >
                Back
              </Button>
            </Form>
          )}
        </Formik>
      </MuiPickersUtilsProvider>
    </div>
  );
}
