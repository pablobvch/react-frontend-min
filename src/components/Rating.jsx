/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */

import { useState } from "react";

const handleClick = (n, setStars) => {
  setStars((prevStars) => {
    const newStarts = [...prevStars];
    for (let i = 0; i <= newStarts.length - 1; i++) {
      if (i <= n) {
        newStarts[i] = 1;
      } else {
        newStarts[i] = 0;
      }
    }
    return newStarts;
  });
};

const starsArray = [0, 1, 2, 3, 4];

const initialState = [0, 0, 0, 0, 0];

export function Rating() {
  const [stars, setStars] = useState(initialState);

  return (
    <div id="rating">
      {starsArray.map((n) => (
        <span
          key={n}
          className={`span-star ${stars[n] !== 0 ? "span-bold" : ""}`}
          onClick={() => handleClick(n, setStars)}
        >
          *
        </span>
      ))}
    </div>
  );
}
