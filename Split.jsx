import * as React from 'react';
import styled from "styled-components";
import { spacingMap } from "./spacingMap";
import Form  from './Form';

const fractions = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto"
};

const Split = styled.div`
  display: grid;
  gap: ${(props) => spacingMap[props.gutter] ?? spacingMap.lg};
  grid-template-columns: ${({ fraction }) =>
    fractions[fraction] ?? fractions["1/2"]};
`;

export default function FormSideBar() {
  return (
    <Split fraction="1/3" gutter="xl">
      <div>
        <h2>Personal Information</h2>
        <span>The information you provide will be displayed publicly.</span>
      </div>
      <Form />
    </Split>
  );
}