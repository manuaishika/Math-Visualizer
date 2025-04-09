import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box, TextField, Button, Typography, Paper } from '@mui/material';
import Sidebar from './components/Sidebar';
import FunctionPlot from './components/FunctionPlot';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
});

function App() {
  const [expression, setExpression] = useState('');
  const [error, setError] = useState('');
  const [selectedType, setSelectedType] = useState('2d-function');
  const [xRange, setXRange] = useState([-10, 10]);
  const [yRange, setYRange] = useState([-10, 10]);

  const handleVisualize = () => {
    try {
      // TODO: Add validation for different visualization types
      setError('');
    } catch (err) {
      setError('Invalid mathematical expression');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Sidebar
          selectedType={selectedType}
          onSelectType={setSelectedType}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - 240px)` },
          }}
        >
          <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
              <Typography variant="h3" component="h1" gutterBottom align="center">
                Math Visualizer
              </Typography>
              
              <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <TextField
                    fullWidth
                    label="Enter mathematical expression"
                    variant="outlined"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    error={!!error}
                    helperText={error}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleVisualize}
                    sx={{ minWidth: '120px' }}
                  >
                    Visualize
                  </Button>
                </Box>
              </Paper>

              {selectedType === '2d-function' && (
                <FunctionPlot
                  expression={expression}
                  xMin={xRange[0]}
                  xMax={xRange[1]}
                  yMin={yRange[0]}
                  yMax={yRange[1]}
                  onXRangeChange={(min, max) => setXRange([min, max])}
                  onYRangeChange={(min, max) => setYRange([min, max])}
                />
              )}

              {selectedType !== '2d-function' && (
                <Paper elevation={3} sx={{ p: 3, height: '400px' }}>
                  <Typography variant="body1" align="center" sx={{ mt: 4 }}>
                    {`${selectedType} visualization coming soon!`}
                  </Typography>
                </Paper>
              )}
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App; 