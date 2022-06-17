import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/button';
export const useStyles = makeStyles((theme) => ({ 

    root:{
          flexGrow: 1,
    },
    MenuButton: {
           marginRight: theme.spacing(2),
           color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    appBarTransparent:{
        backgroundColor: 'rgba(67,129,168,0.5)'
    },
    appBarSolid: {
        backgroundColor: 'rgba(67,129,168)'
    }


}));


