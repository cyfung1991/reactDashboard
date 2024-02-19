import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { 
        field: 'img',
        headerName: 'Avatar',
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />
        }
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        width: 200,
        editable: false,
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        type: 'string',
        width: 200,
        editable: false,
    },
    {
        field: 'verified',
        headerName: 'Verified',
        type: 'boolean',
        width: 150,
        editable: false,
    },
];

const Users = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
            { open && <Add slug="user" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Users