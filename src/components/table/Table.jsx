import React from 'react'
import { useState } from 'react'
import './Table.css'
import { TableRow } from './TableRow'

export function Table({data, setData, setForm, onSucces}){
    const [search, setSearch] = useState('');

    const searcher = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }
    let results = [];
    if(!search){
        results = data;
    } else {
        results = data.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
        dato.lastname.toLowerCase().includes(search.toLocaleLowerCase())
        // dato.number.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th> name </th>
                        <th> lastname </th>
                        <th> mumber </th>
                        <th> action </th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {results.map((contact) => {
                    return(
                        <TableRow 
                            key={contact.id} 
                            data={contact} 
                            setForm={setForm}
                            setData={setData}
                            onSucces={onSucces}
                            />
                    )
                    }
                    )}
                </tbody>
            </table>
            <br /> <br /> <br />
            <input 
                type="text" 
                placeholder='search contact'
                value={search}
                onChange={searcher}
            />
        </div>
  )
}

