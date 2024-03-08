import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axiosInstance from "../axiosConfig";

const TableVentas = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axiosInstance.get("/venta");
        const saleData = response.data.data;
        setData(
          saleData.map((sale) => ({
            id: sale.id_venta,
            car: sale.idauto,
            user: sale.idusuario.nombre,
            creation_date: sale.fecha_creacion,
            price: sale.precio_auto,
            completion_date: sale.fecha_finalizacion,
          })),
        );
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors appropriately (e.g., display error message to user)
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch data on component mount
    fetchData();
  }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true, // Enable sorting by ID
    },
    {
      name: "Auto",
      selector: (row) => row.car,
    },
    {
      name: "Usuario",
      selector: (row) => row.user,
    },
    {
      name: "Fecha Creacion",
      selector: (row) => row.creation_date,
      sortable: true,
    },
    {
      name: "Precio",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Fecha Finalizacion",
      selector: (row) => row.completion_date,
      sortable: true,
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
        <p>Cargando ventas disponibles...</p>
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
        <p>No se han encontrado ventas disponibles.</p>
      )}
    </>
  );
};

export default TableVentas;
