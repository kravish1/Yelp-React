import React,{Component} from 'react';
import {BrowserRouter as Router,
        Route,
        Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../header/header';
import MainEntry from '..//mainEntry/mainEntry';
import Map from '../map/map';
import AddItem from '../AddItem/addItem';
import EditItem from '../EditItem/editItem';

class Wrapper extends Component{

  constructor(props){
    super(props);

    this.state = {
      entries : [],
      currentEntry : -1
    }

    var that = this;

    axios.get('http://localhost:3001/api')
    .then(function(response){
      that.setState({
        entries : response.data
      })
    })
    .catch(function(error){
      console.log(error);
    })


  }

  getSelectedIndex(index){
    this.setState({
      currentEntry : index
    });

  }
  render(){
    return(
      <Router>
          <div>
              <Header />
              <Route exact path='/' component={() => <MainEntry entries={this.state.entries} index={this.state.currentEntry}
                                                                    callbackFromWrapper={this.getSelectedIndex.bind(this)}/>} />
              <Route exact path='/Add' component={() => <AddItem />} />
              <Route exact path='/Edit' component={() => <EditItem entries={this.state.entries} index={this.state.currentEntry}/>} />

          </div>
     </Router>
    );
  }
}

export default Wrapper;
