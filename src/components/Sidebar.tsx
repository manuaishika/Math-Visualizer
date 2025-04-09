import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import {
  Functions as FunctionsIcon,
  ScatterPlot as ScatterPlotIcon,
  ViewInAr as ViewInArIcon,
  Timeline as TimelineIcon,
  BarChart as BarChartIcon
} from '@mui/icons-material';

interface SidebarProps {
  onSelectType: (type: string) => void;
  selectedType: string;
}

const visualizationTypes = [
  { id: '2d-function', label: '2D Function Plot', icon: <FunctionsIcon /> },
  { id: 'scatter', label: 'Scatter Plot', icon: <ScatterPlotIcon /> },
  { id: '3d-surface', label: '3D Surface', icon: <ViewInArIcon /> },
  { id: 'parametric', label: 'Parametric Curve', icon: <TimelineIcon /> },
  { id: 'statistics', label: 'Statistics', icon: <BarChartIcon /> }
];

const Sidebar: React.FC<SidebarProps> = ({ onSelectType, selectedType }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
        },
      }}
    >
      <List>
        {visualizationTypes.map((type) => (
          <ListItem
            button
            key={type.id}
            onClick={() => onSelectType(type.id)}
            selected={selectedType === type.id}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#ffffff' }}>
              {type.icon}
            </ListItemIcon>
            <ListItemText primary={type.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar; 