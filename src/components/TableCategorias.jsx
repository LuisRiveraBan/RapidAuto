import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import axiosInstance from "../axiosConfig";

const TableCategorias = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/categoria");
        const catgetoria = response.data.data;
        setData(
          catgetoria.map((cat) => ({
            id: cat.idCategoria,
            description: cat.descripcion,
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
      name: "Descripcion",
      selector: (row) => row.description,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        fontSize: "14px",
      },
    },
    cells: {
      style: {
        padding: "8px 16px",
      },
      description: {
        minWidth: "500px",
      },
      state: {
        style: {
          color: (row) => (row.state === "ACTIVO" ? "green" : "red"),
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
        <p>Cargando categorias disponibles...</p>
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
        <p>No se han encontrado categorias disponibles.</p>
      )}
    </>
  );
};

export default TableCategorias;
