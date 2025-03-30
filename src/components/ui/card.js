const Card = ({ children }) => {
    return <div className="card p-4 shadow-md rounded-lg">{children}</div>;
  };
  
  const CardContent = ({ children }) => {
    return <div className="card-content">{children}</div>;
  };
  
  export { Card, CardContent };
  