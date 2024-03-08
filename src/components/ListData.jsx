import DataTable from "react-data-table-component";

function ListData() {
  const colums = [
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Apellido",
      selector: (row) => row.apellido,
      sortable: true,
    },
    {
      name: "Edad",
      selector: (row) => row.edad,
      sortable: true,
    },
  ];

  const data = [
    {
      nombre: "juan",
      apellido: "Gil",
      edad: 21,
    },
    {
      nombre: "Maria",
      apellido: "Lopez",
      edad: 30,
    },
    {
      nombre: "Carlos",
      apellido: "Gonzalez",
      edad: 40,
    },
    {
      nombre: "Maria",
      apellido: "Lopez",
      edad: 30,
    },
    {
      nombre: "Ana",
      apellido: "Gomez",
      edad: 20,
    },
    {
      nombre: "Pedro",
      apellido: "Rodriguez",
      edad: 35,
    },
    {
      nombre: "juan",
      apellido: "Gil",
      edad: 21,
    },
    {
      nombre: "Maria",
      apellido: "Lopez",
      edad: 30,
    },
    {
      nombre: "Carlos",
      apellido: "Gonzalez",
      edad: 40,
    },
    {
      nombre: "Maria",
      apellido: "Lopez",
      edad: 30,
    },
    {
      nombre: "Ana",
      apellido: "Gomez",
      edad: 20,
    },
    {
      nombre: "Pedro",
      apellido: "Rodriguez",
      edad: 35,
    },
    {
      nombre: "juan",
      apellido: "Gil",
      edad: 21,
    },
    {
      nombre: "Maria",
      apellido: "Lopez",
      edad: 30,
    },
    {
      nombre: "Carlos",
      apellido: "Gonzalez",
      edad: 40,
    },
    {
      nombre: "Maria",
      apellido: "Lopez",
      edad: 30,
    },
    {
      nombre: "Ana",
      apellido: "Gomez",
      edad: 20,
    },
    {
      nombre: "Pedro",
      apellido: "Rodriguez",
      edad: 35,
    },
    {
      nombre: "juan",
      apellido: "Gil",
      edad: 21,
    },
    {
      nombre: "Maria",
      apellido: "Lopez",
      edad: 30,
    },
    {
      nombre: "Carlos",
      apellido: "Gonzalez",
      edad: 40,
    },
    {
      nombre: "Maria",
      apellido: "Lopez",
      edad: 30,
    },
    {
      nombre: "Ana",
      apellido: "Gomez",
      edad: 20,
    },
    {
      nombre: "Pedro",
      apellido: "Rodriguez",
      edad: 35,
    },
  ];

  return (
    <div>
      <DataTable
        columns={colums}
        data={data}
        selectableRows
        // pagination
        // paginationPerPage={4}
        onSelectedRowsChange={(data) => console.log(data)}
      />
    </div>
  );
}

export default ListData;
