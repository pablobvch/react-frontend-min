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
    <div className="image-container">
      <img className="img-thumbnail" src={src} alt={`img from ${src}`} />
      <button className="btn btn-danger remove" onClick={() => onRemove(src)}>
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

const renderPlaceHolder = (setStateLinks, links) => {
  return (
    <>
      <div>There are no images to show</div>
      <button
        className="btn btn-primary btn-reset"
        onClick={() => {
          setStateLinks(links);
        }}
      >
        Reset
      </button>
    </>
  );
};

export function ImageGallery({ links }) {
  const [stateLinks, setStateLinks] = useState(links);

  if (stateLinks?.length === 0) {
    return renderPlaceHolder(setStateLinks, links);
  }

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {renderImages(stateLinks, onRemove(stateLinks, setStateLinks))}
    </div>
  );
}
