import React from 'react'
import './Table.css'
import { TableRow } from './TableRow'

export function Table({data, setForm}){

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
                    {data.map((contact) => {
                    return(
                        <TableRow key={contact.id} data={contact} setForm={setForm}/>
                    )
                    }
                    )}
                </tbody>
            </table>
        </div>
  )
}

