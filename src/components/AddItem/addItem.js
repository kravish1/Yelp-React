import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import EntryService from '../EntryService';


class AddItem extends Component {



  handleAdd(event){
    event.preventDefault();
    this.addEntryService = new EntryService();
    var name = document.getElementsByName('name')[0].value,
    address = document.getElementsByName('address')[0].value,
    description = document.getElementsByName('description')[0].value;
    this.addEntryService.sendData({name : name,
                                  address : address,
                                  description : description});
  //  this.context.router.history.push('/');
  }
  render(){
    return(
      <div>
          <div className='feature'>
              Welcome to
              <br />
              <input type='text' name='name'/>
              <br />
              <div className='actions'>
              <Link to='/Add' className="green new" onClick={this.handleAdd.bind(this)}>Add</Link>

              </div>
          </div>
          <div className='metadata'>
              <div className='address'>
                  Address:
                  <br />
                  <input type='text' name='address'/>
              </div>
              <div className='description'>
                  Description:
                  <br />
                  <textarea name='description'></textarea>
              </div>
          </div>
      </div>
    );
  }
}

export default AddItem;
