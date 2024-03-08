const AutoCard = ({ auto }) => {
  const {
    modelo,
    motor,
    kilometraje,
    estado,
    marca,
    pais,
    descripcion,
    precio,
    imagen, // assuming imagen is a string representing the image filename
  } = auto;

  const imagePath = `/assets/img/${imagen}`; // construct the image path

  return (
    <div className="auto-card bg-slate-50">
      {/* Single Image */}
      <div className="image-container">
        <div className="h-full w-full overflow-hidden">
          <img
            src="../assets/img/img-1.jpg"
            alt={modelo}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="content">
        <div className="flex flex-col">
          <h5 className="text-xl font-bold">{modelo}</h5>
          <p className="text-sm text-slate-800">{marca}</p>
        </div>
        <div className="flex flex-row">
          <p className="text-sm text-slate-800">{estado}</p>
          <p className="text-sm text-slate-800">{kilometraje} km</p>
        </div>
        <div className="mt-2">
          <p className="text-sm text-slate-800">{motor}</p>
          <p className="text-sm text-slate-800">$ {precio}</p>
          <p className="text-sm text-slate-800">{pais}</p>
          <p className="text-sm text-slate-800">{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default AutoCard;
