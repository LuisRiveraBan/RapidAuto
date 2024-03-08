import ListAutos from "../components/ListAutos";
import ListCategories from "../components/ListCategories";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="categories-container">
            <ListCategories />
          </div>

          <div className="autos-container">
            <ListAutos />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
