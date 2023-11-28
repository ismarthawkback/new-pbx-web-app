import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
  { field: 'email', headerName: 'Email', width: 200 },
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
  const [filterModel, setFilterModel] = React.useState({
    items: [],
  });

  const rows = React.useMemo(() => generateRows(), []);

  

  return (
    <div style={{ height: '60vh', width: '100%' }}>
    
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        filterModel={filterModel}
        onFilterModelChange={(model) => setFilterModel(model)}
        slots={{
            toolbar : GridToolbar
        }}
      />
      
    </div>
  );
};

export default FilterTableExample;
