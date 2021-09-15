import React from 'react'
import './table.css'


export const ColumnFilter = ({column}) => {
    const {filterValue, setFilter} = column;
    return (
        <span>
            <p className="para">
            <label className="searchLabel">search: </label>
            </p>
            <input value={filterValue || ''} onChange={e=>setFilter(e.target.value)} />
        </span>
    )
}

 
