import React,{Component} from 'react';

class Map extends Component {
  constructor(props){
    super(props);
    if(this.props.index >=0){
    //  console.log(this.props.index);
      // this.initialize(this.props.entries[this.props.index].address,(response) =>{
      //     // var x = parseFloat(response[0]);
      //     // var y = parseFloat(response[1]);
      //     // var mapCanvas = $('.map')[0];
      //     // var map = new google.maps.Map(mapCanvas, {
      //     //       center: {lat: x, lng: y},
      //     //       zoom: 8
      //     // });
      //     // var marker = new google.maps.Marker({
      //     //     position: {lat: x, lng: y},
      //     //     map: map,
      //     //     title: address
      //     // });
      //     console.log(response);
      // });
    }
  }

  // initialize(address,callback){
  //
  //   var coordinates = [];
  //   var geocoder = new google.maps.Geocoder();
  //   geocoder.geocode({ 'address': address }, function(results, status)
  //   {
  //     if (status === google.maps.GeocoderStatus.OK)
  //     {
  //       coordinates[0]=parseFloat(results[0].geometry.location.lat()).toFixed(3);
  //       coordinates[1]=parseFloat(results[0].geometry.location.lng()).toFixed(3);
  //     }
  //     callback(coordinates);
  //   });
  //
  // }

  componentWillUpdate(){
      console.log(this.props.index);
  }


  render(){
    return(
      <div className='map' >
        <h1>Hello</h1>
      </div>
    );
  }
}

export default Map;
