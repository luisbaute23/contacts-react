import axios from "axios";

export function TableRow({data, onSucces, setForm}){
    const onEditClick = () => {
        
        setForm(data);
    }

    const onClickDelete = async (id) => {
        const url ='http://localhost:3000/contacts';
        const url_concat = url + '/' + parseInt(data.id);

        console.log(url_concat);
        await axios.delete(url_concat, data);

        onSucces && onSucces(); // condicional 
        
        // const get_data = await axios.get(url);
        // setData(get_data.data);
    }

    return (
        <tr id="remove_tr">
            <td> {data.name} </td>
            <td> {data.lastname}</td>
            <td> {data.number} </td>
            <td>
                <button data-edit-id={data.id} onClick={onEditClick}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button data-dlt-id={data.id} onClick={onClickDelete}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </td>
        </tr>
)}
