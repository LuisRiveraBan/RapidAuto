import TableAutos from "../components/TableAutos";

export const ListadoAutos = () => {
  return (
    <div
      className="main-container container mx-auto px-4 py-8"
      style={{ padding: "80px 20px 0px 300px" }}
    >
      {/* Main container with padding */}
      <div className="mb-4 flex justify-center">
        {/* Centered heading */}
        <h1 className="text-3xl font-bold text-gray-800">Listado de Autos</h1>
      </div>
      <div className="overflow-x-auto rounded-md shadow">
        {/* Table container with shadow and rounded corners */}
        <TableAutos />
      </div>
    </div>
  );
};

export default ListadoAutos;
