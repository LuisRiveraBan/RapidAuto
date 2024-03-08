import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axiosInstance from "../axiosConfig"; // Import the configured axios instance

const TableUsuarios = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get("/usuario");
        const userData = response.data.data;
        setData(
          userData.map((user) => ({
            id: user.id_usuario,
            username: user.username,
            name: user.nombre,
            paternal_lastname: user.apellido_Paterno,
            maternal_lastname: user.apellido_Materno,
            email: user.correoElectronico,
            phone: user.celular,
            country: user.pais,
            rol: user.idRol.descripcion,
            state: user.estado,
          })),
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
    },
    {
      name: "Nombre",
      selector: (row) => row.name,
    },
    {
      name: "Apellido Paterno",
      selector: (row) => row.paternal_lastname,
    },
    {
      name: "Apellido Materno",
      selector: (row) => row.maternal_lastname,
    },
    {
      name: "correo Electronico",
      selector: (row) => row.email,
      grow: 2,
    },
    {
      name: "Celular",
      selector: (row) => row.phone,
    },
    {
      name: "Pais",
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: "Rol",
      selector: (row) => row.rol,
      sortable: true,
    },
    {
      name: "Estado",
      selector: (row) => row.state,
    },
  ];

  const customStyles = {
    // Global styles (optional)
    rows: {
      style: {
        fontSize: "14px", // Set font size for table rows
      },
    },
    cells: {
      style: {
        padding: "8px 16px", // Adjust cell padding
      },
      // Specific column styles
      description: {
        minWidth: "500px", // Set minimum width for description column
      },
      state: {
        style: {
          color: (row) => (row.state === "Usado" ? "green" : "red"), // Conditional color for status
        },
      },
      price: {
        style: {
          textAlign: "right", // Align price column to the right
        },
      },
    },
    header: {
      style: {
        backgroundColor: "#BDBDBD", // Set header background color
      },
    },
  };

  return (
    <>
      {isLoading ? (
        <p>Cargando usuarios disponibles...</p>
      ) : data.length > 0 ? (
        <div className="table-container">
          {/* Add a container class for styling */}
          <DataTable
            columns={columns}
            data={data}
            pagination={true} // Enable pagination
            paginationPerPage={10} // Set rows per page
            customStyles={customStyles} // Apply custom styles (optional)
            selectableRows
            onSelectedRowsChange={(data) => console.log(data)}
          />
        </div>
      ) : (
        <p>No se han encontrado usuarios disponibles.</p>
      )}
    </>
  );
};

export default TableUsuarios;
