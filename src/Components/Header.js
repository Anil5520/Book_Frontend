import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Tabs, Tab } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {NavLink} from 'react-router-dom';

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: '#383845' }} position='sticky'>
        <Toolbar>
          <Typography>
            <MenuBookIcon />
          </Typography>
        <Tabs sx={{ml:'auto'}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e, val) => setValue(val)} >
          <Tab LinkComponent={NavLink} to='/add' label='Add Books' />
          <Tab LinkComponent={NavLink} to='/books' label='Books' />
          <Tab LinkComponent={NavLink} to='/about' label='About Us' />
        </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
