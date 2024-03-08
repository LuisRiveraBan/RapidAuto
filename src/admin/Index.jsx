import tokenUtils from "../tokenUtils";

export const Index = () => {
  const username = tokenUtils.getUsername;

  return (
    <>
      <div className="main-container">
        <h1>Bienvenido Admin {username}</h1>
      </div>
    </>
  );
};

export default Index;
