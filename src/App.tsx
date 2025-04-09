import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Chip,
  CircularProgress
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff88',
    },
    secondary: {
      main: '#00b8d4',
    },
    background: {
      default: '#0a1929',
      paper: '#132f4c',
    },
  },
});

interface MCP {
  id: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
}

const sampleMCP: MCP = {
  id: '1',
  name: 'Tool Finder MCP',
  description: 'An intelligent system that helps LLMs find and utilize the most relevant tools and MCPs for any given task.',
  tags: ['LLM', 'Tool Discovery', 'Automation', 'AI'],
  url: 'https://github.com/example/tool-finder-mcp'
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<MCP[]>([]);

  const handleSearch = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResults([sampleMCP]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ 
            color: 'primary.main',
            fontWeight: 'bold',
            mb: 4
          }}>
            MCP Search Engine
          </Typography>
          
          <Paper elevation={3} sx={{ p: 3, mb: 3, backgroundColor: 'background.paper' }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <TextField
                fullWidth
                label="Search for MCPs"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'primary.main',
                    },
                    '&:hover fieldset': {
                      borderColor: 'primary.light',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
                startIcon={<SearchIcon />}
                sx={{ minWidth: '120px' }}
              >
                Search
              </Button>
            </Box>
          </Paper>

          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <CircularProgress color="primary" />
            </Box>
          ) : results.length > 0 ? (
            <Grid container spacing={3}>
              {results.map((mcp) => (
                <Grid item xs={12} key={mcp.id}>
                  <Card sx={{ backgroundColor: 'background.paper' }}>
                    <CardContent>
                      <Typography variant="h5" component="h2" gutterBottom color="primary">
                        {mcp.name}
                      </Typography>
                      <Typography variant="body1" paragraph>
                        {mcp.description}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {mcp.tags.map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
                            color="primary"
                            variant="outlined"
                            size="small"
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        startIcon={<CodeIcon />}
                        href={mcp.url}
                        target="_blank"
                      >
                        View MCP
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="body1" color="text.secondary">
                Enter a search query to find relevant MCPs
              </Typography>
            </Paper>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App; 