import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './components/form/Form';
import { Table } from './components/table/Table';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState();

  

  useEffect(() => {
    // console.log('llamo')
    get_api();
  },[]);
  const get_api = async () => {
    const url ='http://localhost:3000/contacts';
    const resp = await axios.get(url);

    setContacts(resp.data);
  }

  const onSucces = () => {
    get_api();
  }
  

  return (
    <div className="App">
      <Form 
        loading={loading} 
        setLoading={setLoading} 
        onSucces={onSucces}
        setForm={setForm}
        form={form}
        />
      <Table data={contacts} setForm={setForm}/>
    </div>
  );
}

export default App;
