import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import EntryService from '../EntryService';

class MainEntry extends Component {


  handleSelect(event){
    var select = event.target,
    option = select.options[select.selectedIndex];
    this.props.callbackFromWrapper(option.value);

  }
  handleDelete(event){
    event.preventDefault();
    if(this.props.entries[this.props.index]){
      this.addEntryService = new EntryService();
      this.addEntryService.deleteData(this.props.entries[this.props.index]._id);
    }
  }



  render(){
    return(
      <div>
        <div className='feature'>
            Welcome to
            <br />
            <span>{(this.props.index >= 0) ? this.props.entries[this.props.index].name : ''}</span>
            <div className='dropdown'>
                <button></button>
                <select onChange={this.handleSelect.bind(this)}>
                <option key={-1} value={-1}>Pick a Location...</option>
                  {
                    this.props.entries.map((entry,i) =>
                    <option key={i} value={i}>{entry.name}</option>
                  )
                  }
                </select>
            </div>
            <br />
            <div className='actions'>
              <Link to='/Add' className="green new">New</Link>
              {(this.props.index >=0) ? <Link to='/Edit' className="teal edit">Edit</Link> : <Link to='/' className="teal edit">Edit</Link>}
              <Link to='/Delete' onClick={this.handleDelete.bind(this)} className="red delete">Delete</Link>
            </div>
        </div>
        <div className='metadata'>
            <div className='address'>
                Address:
                <br />
                <span>{(this.props.index >= 0) ? this.props.entries[this.props.index].address : ''}</span>
            </div>
            <div className='description'>
                Description:
                <br />
                <span>{(this.props.index >= 0) ? this.props.entries[this.props.index].description : ''}</span>
            </div>
        </div>
      </div>
    );
  }
}

export default MainEntry;
