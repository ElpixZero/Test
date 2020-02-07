import React from 'react';
import { createMuiTheme, MuiThemeProvider, makeStyles} from '@material-ui/core/styles';

import Table2 from './components/Tablee';
import InitialScreen from './components/InitialScreen';

const THEME = createMuiTheme({
  typography: {
   "fontFamily": "\"Montserrat\", sans-serif",
   "fontSize": 14,
  }
});

function App() {
  const [source, setSource] = React.useState('');

  console.log('updating app')
  return (
    <MuiThemeProvider theme={THEME}>
      <div style={{paddingTop: 100, margin: '0 auto', color: 'yellow', height: '100vw', backgroundColor: 'black'}}>
        {!source &&  <InitialScreen setSource={setSource} />}
        {source && <Table2 style={{marginBottom: 100 }} source={source} />}
      </div>
    </MuiThemeProvider>
  );
}

export default App;