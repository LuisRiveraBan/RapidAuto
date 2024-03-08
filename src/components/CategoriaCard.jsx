const CategoriaCard = ({ categoria }) => {
  const { id, descripcion, imagen } = categoria;

  return (
    <div className="flex h-40 w-40 flex-col space-y-2 rounded-lg bg-white shadow-md">
      {imagen && (
        <img
          src={imagen}
          alt={descripcion}
          className="h-full w-full rounded-lg object-cover"
        />
      )}
      <div className="flex flex-col items-start justify-end p-2">
        <h5 className="text-sm font-bold text-gray-800">
          {id} - {descripcion}
        </h5>
      </div>
    </div>
  );
};

export default CategoriaCard;
