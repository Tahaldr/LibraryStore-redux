import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ajoutLivre, deleteLivre } from "./redux/Actions";

const Home = () => {
  const [livres, setLivres] = useState([]);
  const [categorySelected, setCategorySelected] = useState("beauty");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products?limit=7");
      const livres = res.data.products.map((livre) => ({
        id: livre.id,
        category: livre.category,
        title: livre.title,
        price: livre.price,
      }));
      setLivres(livres);
    };

    fetchData();
  }, []);
  // console.log("livres dummy", livres);

  const livresState = useSelector((state) => {
    return state.livres;
  });
  // console.log("livreState", livresState);

  const totalFetch = useSelector((state) => {
    return state.livres.reduce((total, livre) => total + livre.price, 0);
  });

  const handleAdd = (id) => {
    dispatch(ajoutLivre(livres.find((livre) => livre.id == id)));
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <div>
        <div>
          <select
            name="category"
            onClick={(e) => {
              setCategorySelected(e.target.value);
              console.log(categorySelected);
            }}
          >
            <option value="beauty">Beauty</option>
            <option value="fragrances">Fragrances</option>
          </select>
        </div>

        <div>
          {livres.map((livre) => (
            <div key={livre.id}>
              {livre.category == categorySelected && (
                <ul>
                  <li>{livre.id}</li>
                  <li>{livre.title}</li>
                  <li>{livre.price}</li>
                  <li>
                    <button
                      className="btn btn-primary "
                      onClick={() => handleAdd(livre.id)}
                    >
                      Ajouter au panier
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ))}
        </div>

        <p>Total : {totalFetch || 0} DH</p>
        <div>
          {livresState &&
            livresState.map((livre) => (
              <li key={livre.id}>
                <p>{livre.title}</p>
                <p>{livre.price}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteLivre(livre.id))}
                >
                  supprimer de panier
                </button>
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
