import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Form.css';

export function Form({setLoading, onSucces, form, setForm}) {
    const { register, handleSubmit, setValue} = useForm({});
    // console.log('isDirty, dirtyFields', isDirty, dirtyFields);

    useEffect(() => {
        if(form){
            setValue('name', form.name)
            setValue('lastname', form.lastname)
            setValue('number', form.number)
            setValue('id', form.id)
            console.log(form);
            setForm(null);
        }
    }, [form]);

    const send_data = async (data) => {
        setLoading(true);
        const url ='http://localhost:3000/contacts';
        const form = document.getElementById('form');
        
    
            data.number = parseInt(data.number);
            if (data.id === ''){
                await axios.post(url, data);
                console.log(data.id);
            } else {
                const url_concat = url + '/' + parseInt(data.id);
                console.log(url_concat, 'soy put');
                // const url_concat = url + '/' + parseInt(data.id);
                await axios.put(url_concat, data);
            }
            form.reset();
            setLoading(false);
            onSucces && onSucces();
    }

    return (
        <div>
            <h1> Contacs </h1>
            <form onSubmit={handleSubmit(send_data)} id="form">
                <input 
                    {...register('name')}
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