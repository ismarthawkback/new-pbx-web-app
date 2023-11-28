import * as React from 'react';
import { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { IconButton, SpeedDial } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Tune from '@mui/icons-material/Tune';
import Add from '@mui/icons-material/Add';

const actions = [
  { icon: <AddIcon />, name: "Add", onclick : function () {
    console.log("Hello World")
    console.log(selectionModel);
  } },
  { icon: <DeleteForeverIcon />, name: "Delete" },
];

const columns = [
  {
    field: 'edit',
    headerName: 'Edit',
    width: 50,
    sortable: false,
    filterable: false,
    disableColumnMenu: true,
    renderCell: (params) => (
      <IconButton
        onClick={() => handleEditClick(params.row.id)}
        aria-label="edit"
      >
        <EditIcon />
      </IconButton>
    ),
  },
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'firstName', headerName: 'First Name',  width: 200 },
  { field: 'lastName', headerName: 'Last Name',  width: 200 },
  { field: 'age', headerName: 'Age', type: 'number',  width: 200},
  { field: 'email', headerName: 'Email',  width: 200 },
];

// Generate 40 rows of sample data
const generateRows = () => {
  const rows = [];
  for (let i = 1; i <= 40; i++) {
    rows.push({
      id: i,
      lastName: `Last Name ${i}`,
      firstName: `First Name ${i}`,
      age: Math.floor(Math.random() * 100) + 18, // Random age between 18 and 117
      email: `email${i}@example.com`,
    });
  }
  return rows;
};

const FilterTableExample = () => {
  const [selectionModel, setSelectionModel] = React.useState([]);

  const rows = React.useMemo(() => generateRows(), []);

  

  return (
    <div style={{ height: "65vh", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        disableRowSelectionOnClick
        rowSelectionModel={selectionModel}
        onRowSelectionModelChange={setSelectionModel}
      />
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 48 }}
        icon={<Tune />}
        direction="left"
      >
        {selectionModel.length === 0 ? 
        <SpeedDialAction
        icon={<AddIcon />}
        tooltipTitle={"Add Row"}
        onClick={(e) => {
          
        }}
        /> :
        <SpeedDialAction
        icon={<DeleteForeverIcon />}
        tooltipTitle={"Delete Rows"}
        onClick={(e) => {
          
        }}
        />
      }
      </SpeedDial>
    </div>
  );
};

export default FilterTableExample;
