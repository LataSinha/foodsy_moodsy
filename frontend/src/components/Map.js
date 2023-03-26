// import React from 'react';
// import BingMapsReact from "bingmaps-react";
// import { useEffect } from 'react';
// // import { useRef, useState, useEffect } from "react";
// // import { createRoot } from "react-dom/client";
// // import { Wrapper, Status } from "@googlemaps/react-wrapper";
// const Microsoft = window.Microsoft ? window.Microsoft : {}
// // export const Map = (props) => {
// //     // const render =() => {
// //     //     return <h1>{status}</h1>;
// //     //   };
// //     console.log("in map")
// //     const [clicks, setClicks] = React.useState([]);
// //   const [zoom, setZoom] = React.useState(3); // initial zoom
// //   const [center, setCenter] = React.useState({
// //     lat: 0,
// //     lng: 0,
// //   });

// //   const onClick = (e) => {
// //     // avoid directly mutating state
// //     setClicks([...clicks, e.latLng]);
// //   };

// //   const onIdle = (m) => {
// //     console.log("onIdle");
// //     setZoom(m.getZoom());
// //     setCenter(m.getCenter().toJSON());
// //   };
// //     return(  
// //       <Wrapper apiKey={"AIzaSyDRYxJkWnvlh1J1S1BRTtz2RNEl93cMBN8"}> 
// //       {/* apiKeyNeha */}
// //         <MyMap  center={center}
// //           onClick={onClick}
// //           onIdle={onIdle}
// //           zoom={zoom}
// //           style={{ flexGrow: "1", height: "100%" }}/>
// //       </Wrapper>
// //     )   
// // };
// // // function useDeepCompareMemoize(value) {
// // //     const ref = React.useRef();
  
// // //     if (!deepCompareEqualsForMaps(value, ref.current)) {
// // //       ref.current = value;
// // //     }
  
// // //     return ref.current;
// // //   }
// // // function useDeepCompareEffectForMaps(callback, dependencies) {
// // //   React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
// // // }

// // const MyMap = ({center,zoom})=>
// //     {
// //         const ref = useRef();
      
// //         useEffect(() => {
// //           new window.google.maps.Map(ref.current, {
// //             center,
// //             zoom,
// //           });
// //         });
      
// //         return <div ref={ref} id="map" />
// //    };
// function Map() {
//   const pushPin = {
//     center: {
//       latitude: 42.360081,
//       longitude: -71.058884
//     },
//     options: {
//       title: "Mt. Everest",
//       draggable:true,
//     },
//   }
//   const pushPins = [pushPin];

// //   Maps.Events.addHandler(pushPin, 'click', function (mouseEvent) {
// //     var pushPinThatWasClicked = mouseEvent.target;
// //     console.log(pushPin.center)
// //     // Do whatever you want with pushPinThatWasClicked 
// // });
// function new_script(src) {
//   return new Promise(function(resolve, reject){
//     var script = document.createElement('script');
//     script.src = src;
//     script.addEventListener('load', function () {
//       resolve();
//     });
//     script.addEventListener('error', function (e) {
//       reject(e);
//     });
//     document.body.appendChild(script);
//   })
// };
// // Promise Interface can ensure load the script only once.
// var my_script = new_script(`https://www.bing.com/api/maps/mapcontrol?key=AvgeELVrXzD7PPGH_qamp6-RNcuSB-nZP3Psvwqe19zAf47HkhWptMZrB2Mm0CcJ&amp;callback=${loadMapScenario}`);
// useEffect(()=>{
//   my_script.then(loadMapScenario());
// })
// function loadMapScenario(){
// var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
// var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
// map.entities.push(pushpin);
// console.log('hi')
// // Binding the events
// Microsoft.Maps.Events.addHandler(pushpin, 'dragend', function () { highlight('pushpinClick'); });
// function highlight(id) {
//   console.log(pushPin.center);
//   setTimeout(function () { document.getElementById(id).style.background = 'white'; }, 1000);
// }
// }
//   return (
//     <>
//     {/* <script type='text/javascript' src={`https://www.bing.com/api/maps/mapcontrol?key=AvgeELVrXzD7PPGH_qamp6-RNcuSB-nZP3Psvwqe19zAf47HkhWptMZrB2Mm0CcJ&amp;callback=${loadMapScenario}`} */}
//      {/* async defer> </script> */}
//     <div id='myMap' style={{width: '100vw', height: '100vh'}}></div>
//     </>
//     // <BingMapsReact
//     //   bingMapsKey=" AvgeELVrXzD7PPGH_qamp6-RNcuSB-nZP3Psvwqe19zAf47HkhWptMZrB2Mm0CcJ"
//     //   height="500px"
//     //   mapOptions={{
//     //     navigationBarMode: "square",
//     //   }}
//     //   width="500px" 
//     //   // viewOptions={{
//     //   //   center: { latitude: 42.360081, longitude: -71.058884 },
        
//     //   // }}
//     //   pushPinsWithInfoboxes={pushPins}
//     //   viewOptions={{ center: { latitude: 42.360081, longitude: -71.058884,mapTypeId: "road", } }}
//     // />
//   );
// }
// export default Map;