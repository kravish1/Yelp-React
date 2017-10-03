import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import EntryService from '../EntryService';

class EditItem extends Component {

  handleUpdate(event){
    event.preventDefault();
    if(this.props.entries[this.props.index]){
        this.addEntryService = new EntryService();
        var name = document.getElementsByName('name')[0].value,
        address = document.getElementsByName('address')[0].value,
        description = document.getElementsByName('description')[0].value;
        this.addEntryService.updateData({
                                      id : this.props.entries[this.props.index]._id,
                                      name : name,
                                      address : address,
                                      description : description});
    }

  }

  render(){
    return(
      <div>
          <div className='feature'>
              Welcome to
              <br />
              <input type='text' defaultValue={this.props.entries[this.props.index].name} name='name'/>
              <br />
              <div className='actions'>
                <Link to='/Edit' className="teal edit" onClick={this.handleUpdate.bind(this)}>Update</Link>
              </div>
          </div>
          <div className='metadata'>
              <div className='address'>
                  Address:
                  <br />
                  <input type='text' defaultValue={this.props.entries[this.props.index].address} name='address'/>
              </div>
              <div className='description'>
                  Description:
                  <br />
                  <textarea defaultValue={this.props.entries[this.props.index].description} name='description'></textarea>
              </div>
          </div>
      </div>
    );
  }
}

export default EditItem;
