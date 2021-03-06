import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  border: 5px solid #ab9df2;
  border-radius: 15px;
  box-shadow: 0px 5px 0px #b4b4b4;
  min-height: 200px;
  min-width: 500px;
  padding: 20px;
`;

export default function PasteArea(props) {
  return <TextArea placeholder="text goes here..." autoFocus {...props} />;
}
