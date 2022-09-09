import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/form/Form';
import { Table } from './components/table/Table';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [datos, setDatos] = useState({id: '', name: '', lastname: '', number:''});
  
  console.log(datos, 'hi');

  useEffect(() => {
    console.log('llamo')
    get_api();
  },[loading]);
  const get_api = async () => {
    const url ='http://localhost:3000/contacts';
    const resp = await axios.get(url);

    setContacts(resp.data);
  }

  return (
    <div className="App">
      <Form loading={loading} setLoading={setLoading} datos={datos}/>
      <Table data={contacts} setDatos={setDatos}/>
    </div>
  );
}

export default App;
