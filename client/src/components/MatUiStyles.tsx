import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


const MatUiStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
      backgroundColor: '#694ed6',
        '&:hover': {
          backgroundColor: '#C137A2'
        }
      },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      color: '#694ed6',
    },
    currentColor: {
      
      color :'#694ed6',
    },

    icon: {
        iconColor: '#694ed6 !important',
        backgroundColor: '#694ed6 !important',
        color: '#694ed6 !important',
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#694ed6',
        '&:hover': {
          backgroundColor: '#C137A2'
        }
      },
    progressBar: {
        width: '100%',
        backgroundColor: '#694ed6',
        iconColor: '#694ed6',
      },
     textField: {
        margin: theme.spacing(1),
        color: '#694ed6',
      },
  })
);

export default MatUiStyles;
