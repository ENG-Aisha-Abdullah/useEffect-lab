import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="bg-gray-200">
        <div className="p-4 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5 justify-center w-[90%] ">
            {products.map((product) => (
              <div
                className="p-4 border rounded-lg shadow-md flex flex-col items-center justify-center"
              >
                <h1 className=" max-w-90 font-bold text-gray-700">{product.title}</h1>
                <img className="h-90 w-90" src={product.image} />
                <p className="text-gray-700">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
