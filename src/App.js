import React from 'react';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Table2 from './components/Tablee';
import InitialScreen from './components/InitialScreen';

import './App.css';

const THEME = createMuiTheme({
  typography: {
   "fontFamily": "\"Montserrat\", sans-serif",
   "fontSize": 14,
  }
});

function App() {
  const [source, setSource] = React.useState('');

  console.log('app updating');

  return (
    <MuiThemeProvider theme={THEME}>
      <div style={{paddingTop: 50, minHeight: '100vh', margin: '0 auto', color: 'yellow', backgroundColor: 'black'}}>
        {!source &&  <InitialScreen setSource={setSource} />}
        {source && <Table2 style={{marginBottom: 100 }} source={source} />}
      </div>
    </MuiThemeProvider>
  );
}

export default App;