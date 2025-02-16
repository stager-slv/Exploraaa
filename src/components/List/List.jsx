

import React from 'react';
import { useState , useEffect , createRef } from 'react';
import {CircularProgress , Grid, Card, CardContent, Typography, Box, FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails.jsx';

const List = ( { places , clicked_idx , isLoading , setType , setRatings } ) => {

    const [elRefs,setElRefs ] = useState([]);

    useEffect( ()=>{
          const refs = Array( places?.length ).fill().map( (_ , i)=> elRefs[i] || createRef() );
          setElRefs( refs )
    }, [ places ] )

  return (
    <>    
      <FormControl fullWidth>
        <InputLabel id="type-label">Type</InputLabel>
        <Select
          labelId="type-label"
          onChange={(e) => setType(e.target.value)}
          label="Select Type"
        >
          <MenuItem value="restaurants">Restaurents</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      
      <br /> < br /> < br /> 

      <FormControl fullWidth>
        <InputLabel id="rating-label">Rating</InputLabel>
        <Select
          labelId="rating-label"
          onChange={(e) => setRatings(e.target.value)}
          label="Select Rating"
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3</MenuItem>
          <MenuItem value={4}>Above 4</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

     <br /> < br /> < br /> 


      {
          !isLoading ? 
                        <Box sx={{ flexGrow: 1, padding: 2  }}>
                            <Grid container spacing={2}  >
                                {/* Iterate over the string array and display each element */}
                                {  
                                places ?.map((place, index) => (
                                                place ? 
                                                        <Grid ref={ elRefs[index] } xs={12} key={index} style={{ margin : '5px' }} >
                                                                <PlaceDetails place={ place } refProp={ elRefs[index] } selected={ Number( clicked_idx )===index } />
                                                        </Grid>
                                                    : null
                                        ) )
                                }
                            </Grid>
                        </Box>
                    :
                        <CircularProgress size="5rem" />
      }    
            

    </>
  )
}

export default List;