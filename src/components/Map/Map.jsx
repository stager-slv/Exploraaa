import React from 'react';
import { useState } from 'react';
// import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery, Box , AppBar, Toolbar, InputBase,  IconButton } from '@mui/material'; // Updated to Material UI v5 imports
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'; // Updated import for Material UI v5
import Rating from '@mui/material/Rating'; // Updated to Material UI v5 import
import mapStyles from '../../mapStyles'; // Assuming you have a mapStyles.js file
import useStyles from './styles.js'; // Assuming you have custom styles here
import SearchIcon from '@mui/icons-material/Search';


import { Autocomplete , GoogleMap, LoadScript, Marker, OverlayView } from '@react-google-maps/api';

const containerStyle = {
    width: '95%',
    height: '98%'
  };
  
  // List of random cities with their coordinates
//   const cities = [
//     { name: 'New York', location: { lat: 40.7128, lng: -74.0060 } },
//     { name: 'Los Angeles', location: { lat: 34.0522, lng: -118.2437 } },
//     { name: 'Chicago', location: { lat: 41.8781, lng: -87.6298 } },
//     { name: 'Houston', location: { lat: 29.7604, lng: -95.3698 } },
//     { name: 'Phoenix', location: { lat: 33.4484, lng: -112.0740 } }
//   ];

const Map = ({ coordinates, setCoordinates , places  , setClicked_idx  }) => {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();


    const [ autoComplete , setAutoComplete ] = useState( null );


    const handleLoad = ( autoC )=>{
          setAutoComplete( autoC );
    }
  
    const handlePlaceChanged = () => {
         console.log( " Heder Here ---> ");
         const latitude = autoComplete.getPlace().geometry.location.lat();
         const longitude = autoComplete.getPlace().geometry.location.lng(); 
         console.log( "Header Check " , latitude , longitude ); 
         setCoordinates( { lat : latitude , lng : longitude } );
    }
  
    console.log("Map co-ordinates ", coordinates );

    return (
         <div className={classes.mapContainer}>
                 <LoadScript googleMapsApiKey="AIzaSyDs6nNKrPC2UVZiafB_6xwV7-X5uMvYVU0"  libraries={['places']}>
                    
                    <Box sx={{
                        display: 'flex', 
                        alignItems: 'center',
                        backgroundColor: "azure",
                        border : '2px solid darkblue',
                        borderRadius: '7px',
                        padding: '3px',
                        width: 'auto',
                        margin : '3px',
                        maxWidth: '500px', // Max width for the search bar
                        flexGrow: 1,
                        zIndex : 1000
                    }}>
                            <IconButton sx={{ padding: 0 }}>
                                <SearchIcon sx={{ color: 'indigo' }} />
                            </IconButton>

                            <Autocomplete onLoad={ handleLoad } onPlaceChanged={ handlePlaceChanged } >
                                <InputBase
                                    sx={{
                                    ml: 1,
                                    flex: 1,
                                    color: 'darkblue',
                                    '& .MuiInputBase-input': {
                                        padding: '3px',
                                        color: 'darkblue',
                                    },
                                    }}
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Autocomplete>
                        </Box>
                 
                 
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={ coordinates }
                            onDblClick={ ( e )=>{ 
                                console.log(e.latLng.lat() , e.latLng.lng() ); 
                                setCoordinates({ lat: e.latLng.lat(), lng: e.latLng.lng() });
                            } }
                            zoom={11}
                        >
                            { (places && places.length>1) ? places.map((place, index) => (
                                    <div onClick={ (e)=>{ console.log(index); setClicked_idx(index); } }>
                                        <OverlayView
                                            key={index}
                                            position={ { lat : Number(place.latitude) , lng : Number(place.longitude) } }
                                            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                        >
                                            <Paper elevation={3}  className={`${classes.paper} ${classes.markerContainer}`}>
                                                <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                                                <img
                                                    className={classes.pointer}
                                                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                                />
                                                <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                                            </Paper>
                                        </OverlayView>
                                    </div>
                            )) : null }
                        </GoogleMap>
               </LoadScript>
       </div>
    );
  };
  
  export default Map;



      //   <div className={classes.mapContainer}>
    //     <GoogleMapReact
    //       bootstrapURLKeys={{ key: 'AIzaSyDs6nNKrPC2UVZiafB_6xwV7-X5uMvYVU0' }}
    //       defaultCenter={coordinates}
    //       center={coordinates}
    //       defaultZoom={14}
    //       margin={[50, 50, 50, 50]}
    //       options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
    //       onChange={(e) => {
            
    //         setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    //         setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
    //         setPlaces( places );
    //       }}
    //     >
            
        //     <div lat={ coordinates.lat } lng={ coordinates.lng } > City 1 </div>

        //    {places && places.map((place, i) => (
        //     <div
        //       className={classes.markerContainer}
        //       lat={Number(place.latitude)}
        //       lng={Number(place.longitude)}
        //       key={i}
        //     >
        //       {!matches
        //         ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
        //         : (
        //           <Paper elevation={3} className={classes.paper}>
        //             <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
        //             <img
        //               className={classes.pointer}
        //               src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        //             />
        //             <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
        //           </Paper>
        //         )}
        //     </div>
        //   ))} 
    //     </GoogleMapReact>
    //   </div>