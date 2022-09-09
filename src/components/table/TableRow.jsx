export function TableRow({data, setDatos}){
  return (
    <tr id="remove_tr">
        <td> {data.name} </td>
        <td> {data.lastname}</td>
        <td> {data.number} </td>
        <td>
            <button 
            data-edit-id={data.id}
            onClick={() => setDatos({id: data.id, 
                                    name: data.name, 
                                    lastname: data.lastname, 
                                    number: data.number})}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button data-dlt-id={data.id}>
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </td>
    </tr>
  )}
