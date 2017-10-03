import axios from 'axios';

class EntryService {

  sendData(data){

    axios.post('http://localhost:3001/api',data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
  }

  updateData(data){
    axios.put('http://localhost:3001/api/'+data.id,data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
  }

  deleteData(id){
    axios.delete('http://localhost:3001/api/'+id)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
  }


}

export default EntryService;
