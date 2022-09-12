export function TableRow({data, setForm}){
    const onEditClick = () => {
        setForm(data);
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
                <button data-dlt-id={data.id}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
            </td>
        </tr>
)}
