import { useState } from "react";
import { ContainerPage } from "../components/ContainerPage";
import { FocusableInput } from "../components/FocusableInput";

const handleClick = (focused, setFocused) => {
  setFocused(!focused);
};

export const FocusableInputPage = () => {
  const [focused, setFocused] = useState(false);
  return (
    <ContainerPage title={"Focusable Input Page"}>
      <div>
        {/* Comment and uncomment the focused prop to observe the behaviour */}
        <FocusableInput focused={focused} />
        <button
          className="btn btn-primary"
          onClick={() => handleClick(focused, setFocused)}
        >
          {`Set focus: ${focused}`}
        </button>
      </div>
    </ContainerPage>
  );
};
