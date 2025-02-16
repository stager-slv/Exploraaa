import React, { useState, useEffect,useCallback } from 'react';
import { CssBaseline, Grid } from '@mui/material'; // Updated to @mui/material

import './App.css'

import { getPlaces } from "./api/index.js";
import  Header  from "./components/Header/Header.jsx"
import List from  "./components/List/List.jsx"
import Map from "./components/Map/Map.jsx"

function App() {

  const [ places, setPlaces ]  = useState( [] );
  const [ coordinates , setCoordinates ] = useState( { lat : 0 , lng : 0 } );
  const [ clicked_idx , setClicked_idx ] = useState( -1 );
  const [ isLoading , setIsLoading ] = useState( false );

  const [ type , setType ] = useState( 'restaurants' );
  const [ ratings , setRatings ] = useState( 0 );

  // const [ bounds , setBounds ] = useState( { sw : 0 , ne : 0 } );



  // useEffect( ()=>{
  //      navigator.geolocation.getCurrentPosition( ( { coords : { latitude , longitude} } )=>{
  //            setCoordinates( { lat : latitude , lng : longitude })
  //      } )
  // } , [] );

  // useEffect( ()=>{
  //      console.log( coordinates , bounds );
  //      getPlaces( coordinates.lat , coordinates.lng )
  //       .then( (data)=>{
  //          setPlaces( data );
  //          console.log( data );
  //       })
  // } , [ coordinates , bounds ] );


  useEffect( ()=>{
    console.log( coordinates  );
    setIsLoading( true );
    getPlaces( coordinates.lat , coordinates.lng , type  )
     .then( (data)=>{
        console.log( data );
        setPlaces( data.filter( (place)=>( ( place?.rating>=ratings) || ratings==0 ) ) );
        console.log( places );
        setTimeout ( ()=>{
          setIsLoading( false );
        }, 1000 );
        
     })
} , [ type , ratings, coordinates  ] );

  return (
    // <>
    //     <Header />
    //     <br />
    //     <List places={ places } />
    //     <Map  coordinates={coordinates}  setCoordinates={setCoordinates} setBounds={setBounds} places={places} />
    // </>

    <>

       <CssBaseline />
       <Header />
       <Grid container spacing={3} style={{ height : '90vh', width: '100%' , padding : '0px' , margin : '0px' }}>

          <Grid item xs={12} md={8} style={{  height : '98%',  marginTop : '1px' , display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
            <Map
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              // setBounds={setBounds}
              places={places}
              // setPlaces={setPlaces}
              setClicked_idx={setClicked_idx}
            />
          </Grid>
          <Grid item xs={12} md={4} style={ { height : '98%' , marginTop : '1px' , overflow : 'auto' } } >
              <List
              places={places} 
              clicked_idx={clicked_idx}
              isLoading={isLoading}
              setType={setType}
              setRatings={setRatings}
            />
          </Grid>
      </Grid>
    </>
  )
}

export default App
