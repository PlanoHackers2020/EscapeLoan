import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, MenuItem } from '@material-ui/core';
import { TextField, Select } from 'formik-material-ui';

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

export default function NewLoanForm(props: Props) {
  const classes = useStyles();

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
