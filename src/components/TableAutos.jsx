import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axiosInstance from "../axiosConfig";

const TableAutos = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get("/auto");
        const carData = response.data.data;
        setData(
          carData.map((car) => ({
            id: car.idAuto,
            category_id: car.idCategoria.descripcion,
            model: car.modelo,
            engine: car.motor,
            mileage: car.kilometraje,
            status: car.estatus,
            brand: car.marca,
            country: car.pais,
            description: car.descripcion,
            price: car.precio,
            user: car.idusuario.nombre,
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
      sortable: true, // Enable sorting by ID
    },
    {
      name: "Modelo",
      selector: (row) => row.model,
    },
    {
      name: "Motor",
      selector: (row) => row.engine,
    },
    {
      name: "Kilometraje",
      selector: (row) => row.mileage,
    },
    {
      name: "Marca",
      selector: (row) => row.brand,
    },
    {
      name: "País",
      selector: (row) => row.country,
    },
    {
      name: "Descripción",
      selector: (row) => row.description,
      grow: 2,
    },
    {
      name: "Precio",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Categoria",
      selector: (row) => row.category_id,
    },
    {
      name: "Usuario",
      selector: (row) => row.user,
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
      description: {
        minWidth: "500px", // Set minimum width for description column
      },
      state: {
        style: {
          color: (row) => (row.state === "Usado" ? "green" : "red"),
        },
      },
      price: {
        style: {
          textAlign: "right",
        },
      },
    },
    header: {
      style: {
        backgroundColor: "#BDBDBD",
      },
    },
  };

  return (
    <>
      {isLoading ? (
        <p>Cargando autos disponibles...</p>
      ) : data.length > 0 ? (
        <div className="table-container">
          <DataTable
            columns={columns}
            data={data}
            pagination={true}
            paginationPerPage={10}
            customStyles={customStyles}
            selectableRows
            onSelectedRowsChange={(data) => console.log(data)}
          />
        </div>
      ) : (
        <p>No se han encontrado autos disponibles.</p>
      )}
    </>
  );
};

export default TableAutos;
