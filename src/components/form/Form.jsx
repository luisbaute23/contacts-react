import axios from 'axios';
import { useForm } from 'react-hook-form';
import './Form.css';

export function Form({loading, setLoading, datos}) {
    const { register, handleSubmit} = useForm();

    const send_data = async (data) => {
        setLoading(true);
        console.log(loading);
        const url ='http://localhost:3000/contacts';
        const form = document.getElementById('form');
    
            data.number = parseInt(data.number);
            if (data.id === ''){
                await axios.post(url, data);
                // console.log(data.number);
            } else {
                const url_concat = url + '/' + parseInt(data.id);
                await axios.put(url_concat, data);
            }
            form.reset();
            setLoading(false);
        }
    console.log(datos, 'flag')
    return (
        <div>
            <h1> Contacs </h1>
            <form onSubmit={handleSubmit(send_data)} id="form">
                <input 
                    {...register("name", { value: datos.name })}
                    type="text" 
                    placeholder="name" 
                    // id="name" 
                    required 
                    />
                <input 
                    {...register('lastname')} 
                    type="text" 
                    placeholder="lastname" 
                    id="lastname" 
                    required /> 
                <input 
                    {...register('number')}
                    type="number" 
                    placeholder="number" 
                    id="number" /> 
                <input 
                    {...register('id')}
                    type="number" 
                    placeholder="id" 
                    id="id_contact"/> 
                <input type='submit' value='save' className="bt_save" id="bt_save"/>
            </form>

        </div>
    )
}