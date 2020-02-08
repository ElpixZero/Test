import React from 'react';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import Table from './components/Table';
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

  return (
    <MuiThemeProvider theme={THEME}>
      <div style={{paddingTop: 20, minHeight: '100vh', margin: '0 auto', color: 'yellow', backgroundColor: 'black'}}>
        {source ? <Table source={source} />
          : <InitialScreen setSource={setSource} />
        }
      </div>
    </MuiThemeProvider>
  );
}

export default App;