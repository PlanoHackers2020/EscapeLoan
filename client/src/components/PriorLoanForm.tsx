import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from 'formik-material-ui-pickers';
import DayjsUtils from '@date-io/dayjs';
import MatUiStyles from './MatUiStyles';


interface Props {
  firstStep: boolean;
  lastStep: boolean;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
}


export default function PriorLoanForm(props: Props) {
  const classes = MatUiStyles();

  return (
    <div>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <Formik
          initialValues={{}}
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
                fullWidth
                className={classes.textField}
                component={TextField}
                name="provider"
                type="text"
                label="Loan Provider"
              />
              <Field
                fullWidth
                format="YYYY-MM-DD"
                component={DatePicker}
                name="loanDueDate"
                label="Due Date"
              />
              <Field
                fullWidth
                className={classes.textField}
                component={TextField}
                name="amountDue"
                type="text"
                label="Amount Due"
              />
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
