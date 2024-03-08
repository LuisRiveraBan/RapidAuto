const CategoriaCard = ({ categoria }) => {
  const { descripcion, img } = categoria;

  return (
    <div className="flex h-40 w-40 flex-col space-y-2 rounded-lg bg-white shadow-md">
      {img && (
        <img
          src={`data:image/jpeg;base64,${img}`}
          alt={`${descripcion} image`}
          className="h-full w-full object-cover"
        />
      )}
      <div className="inset-0 flex flex-col items-start justify-end bg-black bg-opacity-50 p-2">
        <h5 className="text-sm font-bold text-white">{descripcion}</h5>
      </div>
    </div>
  );
};

export default CategoriaCard;
