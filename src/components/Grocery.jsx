/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

import { useState } from "react";

const getProductsUpdated = (prevProductsState, product, value) => {
  const newPrevProductsState = [...prevProductsState];
  const foundIndex = newPrevProductsState.findIndex(
    (x) => x.name === product.name
  );
  newPrevProductsState[foundIndex] = {
    name: product.name,
    votes: newPrevProductsState[foundIndex].votes + value
  };
  return newPrevProductsState;
};

function Product({ product, setProductsState }) {
  function handlePlus() {
    // logic to vote a product
    setProductsState((prevProductsState) =>
      getProductsUpdated(prevProductsState, product, 1)
    );
  }

  function handleMinus() {
    // logic to unvote a product
    setProductsState((prevProductsState) =>
      getProductsUpdated(prevProductsState, product, -1)
    );
  }

  return (
    <li>
      <span>
        {product.name} - votes: {product.votes}
      </span>
      <button className="btn" onClick={handlePlus}>
        <span>+</span>
      </button>
      <button className="btn" onClick={handleMinus}>
        <span>-</span>
      </button>
    </li>
  );
}

const renderProducts = (productsState, setProductsState) =>
  productsState.map((product) => (
    <Product
      key={product.name}
      product={product}
      setProductsState={setProductsState}
    />
  ));

export function Grocery({ products }) {
  const [productsState, setProductsState] = useState(products);

  return <ul>{renderProducts(productsState, setProductsState)}</ul>;
}
