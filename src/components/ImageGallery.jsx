/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */
import { useState } from "react";

function Image({ src, onRemove }) {
  return (
    <div className="image">
      <img src={src} alt={`img from ${src}`} />
      <button className="remove" onClick={() => onRemove(src)}>
        X
      </button>
    </div>
  );
}

const renderImages = (links, onRemove) =>
  links.length > 0
    ? links.map((link, index) => (
        <Image key={index} src={link} onRemove={onRemove}></Image>
      ))
    : null;

const onRemove = (stateLinks, setStateLinks) => (link) => {
  const filteredLinksList = stateLinks.filter(
    (stateLink) => stateLink !== link
  );
  setStateLinks(filteredLinksList);
};

export function ImageGallery({ links }) {
  const [stateLinks, setStateLinks] = useState(links);

  return (
    <div>{renderImages(stateLinks, onRemove(stateLinks, setStateLinks))}</div>
  );
}
