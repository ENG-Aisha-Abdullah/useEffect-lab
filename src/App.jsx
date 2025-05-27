import { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const useEffect = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  return (
    <>
      <div className="bg-gray-200">
      <div className="p-4">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={useEffect}
        >
          Products
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-5  justify-items-center ">
          {products.map((product) => (
            <div className="p-4 border rounded-lg shadow-md flex flex-col items-center justify-center">
              <h1>{product.title}</h1>
              <img src={product.image} />
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
