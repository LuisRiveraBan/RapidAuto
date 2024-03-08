import DataTable from "react-data-table-component";

function TableAutos() {
  return (
    <div>
      <DataTable
        columns={[]}
        data={[]}
        selectableRows
        // pagination
        // paginationPerPage={4}
        onSelectedRowsChange={(data) => console.log(data)}
      />
    </div>
  );
}

export default TableAutos;
