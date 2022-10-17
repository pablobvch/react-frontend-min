/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = Array(10).fill({
  /** Add the properties you consider, there are no specific requirements related to what you have to render. Be creative :) */
});

export function ListItemsForNavigation(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeItemRef = useRef();

  useEffect(() => {
    // Focus the item using this effect
    activeItemRef.current.select();
  }, [
    /* Use accordingly the dependencies */
    selectedIndex
  ]);

  const handleKeyDown = (event) => {
    // Add the proper logic to calculate the index that correspond to the item that should be focused.
    if (event.keyCode === 39 || event.keyCode === 40) {
      if (selectedIndex + 1 < 10) {
        setSelectedIndex((prevSelectedIndex) => prevSelectedIndex + 1);
      }
      return;
    }
    if (event.keyCode === 37 || event.keyCode === 38) {
      if (selectedIndex - 1 >= 0) {
        setSelectedIndex((prevSelectedIndex) => prevSelectedIndex - 1);
      }
      return;
    }
  };

  return (
    <>
      {itemsList.length > 0 ? (
        <ul onKeyDown={handleKeyDown}>
          {itemsList.map((item, index) => {
            return (
              <li key={index}>
                <input
                  type="text"
                  ref={index === selectedIndex ? activeItemRef : null}
                ></input>
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
}
