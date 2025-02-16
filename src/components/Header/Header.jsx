import React from 'react';
import { useState, useRef  } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, useTheme } from '@mui/material/styles';

const Header = (  ) => {
  const theme = useTheme();
 

  return (
    // <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main, width: '100%' , margin : '0px' }}>
    //   <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
    //     {/* Left side - Title */}
    //     <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
    //       My App
    //     </Typography>

    //     {/* Center - Search bar */}


    //         <Box sx={{
    //         display: 'flex', 
    //         alignItems: 'center',
    //         backgroundColor: alpha(theme.palette.common.white, 0.15),
    //         borderRadius: theme.shape.borderRadius,
    //         padding: theme.spacing(0, 2),
    //         width: 'auto',
    //         maxWidth: '500px', // Max width for the search bar
    //         flexGrow: 1,
    //         }}>
    //             <IconButton sx={{ padding: 0 }}>
    //                 <SearchIcon sx={{ color: 'white' }} />
    //             </IconButton>
    //         </Box>
        
        

    //     {/* Right side - Example of a button or icon */}
    //     <Box sx={{ display: 'flex' }}>
    //       {/* Add any right-aligned elements here */}
    //     </Box>
    //   </Toolbar>
    // </AppBar>
    <>
     <Box sx={{
                    display: 'flex', 
                    justifyContent : 'center',
                    alignItems: 'center',
                    backgroundColor: "darkblue",
                    color: "azure",
                    padding: '1px',
                    width: '98vw',
                    margin : '3px',
                    zIndex : 1000
     }}>  
           <h2>
                EXPLORA
           </h2>
     </Box>
                 
    </>
  );
};

export default Header;
