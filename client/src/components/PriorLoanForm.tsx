import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from 'formik-material-ui-pickers';
import DayjsUtils from '@date-io/dayjs';

interface Props {
  firstStep: boolean;
  lastStep: boolean;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    progressBar: {
      width: '100%',
    },

    textField: {
      margin: theme.spacing(1),
    },
  })
);

export default function PriorLoanForm(props: Props) {
  const classes = useStyles();

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
