import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, MenuItem } from '@material-ui/core';
import { TextField, Select } from 'formik-material-ui';
import MatUiStyles from './MatUiStyles';


interface Props {
  firstStep: boolean;
  lastStep: boolean;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
}

export default function NewLoanForm(props: Props) {
  const classes = MatUiStyles();

  return (
    <div>
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
              name="amount"
              type="text"
              label="Total Amount"
            />
            <Field
              fullWidth
              className={classes.textField}
              component={Select}
              name="term"
              type="text"
              label="Term"
            >
              <MenuItem value={6}>Six Months</MenuItem>
              <MenuItem value={12}>Twelve Months</MenuItem>
              <MenuItem value={18}>Eighteen Months</MenuItem>
              <MenuItem value={24}>Twenty Four Months</MenuItem>
            </Field>
            {isSubmitting && <LinearProgress className={classes.progressBar} />}
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
    </div>
  );
}
