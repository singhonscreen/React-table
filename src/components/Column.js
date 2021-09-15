import {ColumnFilter} from "./ColumnFilter";
export const Columns = [
{
    Header:'Id',
    accessor:'id',
    Filter: ColumnFilter,
    disableFilters:true
},
{
    Header:'Name' ,
    accessor:'name',
    Filter: ColumnFilter
},
{
    Header:'Class',
    accessor:'class',
    Filter: ColumnFilter
},
{
    Header:'Gender',
    accessor:'gender',
    Filter: ColumnFilter
},
{
    Header:'Marks of finalyear',
    accessor:'marks',
    Filter: ColumnFilter
},

]