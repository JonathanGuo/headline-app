import { grey800, amberA400 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: grey800,
        accent1Color: amberA400,
        textColor: grey800,
    },
});

export default muiTheme;
