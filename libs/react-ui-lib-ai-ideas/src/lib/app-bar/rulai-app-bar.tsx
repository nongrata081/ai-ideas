import { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import styles from './rulai-app-bar.module.scss';

const navItems = ['Home', 'About', 'Contact'];

/* eslint-disable-next-line */
export interface RulaiAppBarProps {}

export class RulaiAppBar extends Component<RulaiAppBarProps> {
  override render() {
    return (
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            random ai ideas
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

export default RulaiAppBar;
