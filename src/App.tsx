import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box, TextField, Button, Typography, Paper } from '@mui/material';
import FunctionPlot from 'function-plot';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [expression, setExpression] = useState('');
  const [error, setError] = useState('');

  const handleVisualize = () => {
    try {
      // TODO: Implement visualization logic
      setError('');
    } catch (err) {
      setError('Invalid mathematical expression');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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

          <Paper elevation={3} sx={{ p: 3, height: '400px' }}>
            {/* Visualization area will be added here */}
            <Typography variant="body1" align="center" sx={{ mt: 4 }}>
              Enter a mathematical expression to see its visualization
            </Typography>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App; 