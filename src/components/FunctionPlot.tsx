import React, { useEffect, useRef } from 'react';
import { Box, Slider, Typography, Grid } from '@mui/material';
import functionPlot from 'function-plot';

interface FunctionPlotProps {
  expression: string;
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  onXRangeChange: (min: number, max: number) => void;
  onYRangeChange: (min: number, max: number) => void;
}

const FunctionPlot: React.FC<FunctionPlotProps> = ({
  expression,
  xMin,
  xMax,
  yMin,
  yMax,
  onXRangeChange,
  onYRangeChange,
}) => {
  const plotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!plotRef.current || !expression) return;

    try {
      functionPlot({
        target: plotRef.current,
        width: 800,
        height: 400,
        xAxis: {
          domain: [xMin, xMax],
          label: 'x',
        },
        yAxis: {
          domain: [yMin, yMax],
          label: 'y',
        },
        grid: true,
        data: [
          {
            fn: expression,
            color: '#2196f3',
          },
        ],
      });
    } catch (error) {
      console.error('Error plotting function:', error);
    }
  }, [expression, xMin, xMax, yMin, yMax]);

  return (
    <Box sx={{ p: 2 }}>
      <Box ref={plotRef} sx={{ mb: 2 }} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography gutterBottom>X Range</Typography>
          <Slider
            value={[xMin, xMax]}
            onChange={(_, newValue) => {
              const [min, max] = newValue as number[];
              onXRangeChange(min, max);
            }}
            min={-10}
            max={10}
            step={0.1}
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom>Y Range</Typography>
          <Slider
            value={[yMin, yMax]}
            onChange={(_, newValue) => {
              const [min, max] = newValue as number[];
              onYRangeChange(min, max);
            }}
            min={-10}
            max={10}
            step={0.1}
            valueLabelDisplay="auto"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FunctionPlot; 