import React from "react";
import styled from "styled-components";

const spacingMap = {
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "2rem",
  xxl: "4rem"
};

const Stack = styled.div`
  display: grid;
  gap: ${(props) =>
    spacingMap[props.gutter] ? spacingMap[props.gutter] : spacingMap.lg};
`;

export default function Form() {
  return (
    <Stack gutter="xl">
      <FormGroup htmlFor="firstName" label="First Name">
        <input type="text" id="firstName" />
      </FormGroup>
      <FormGroup htmlFor="lastName" label="Last Name">
        <input type="text" id="lastName" />
      </FormGroup>
      <FormGroup htmlFor="email" label="Email">
        <input type="text" id="email" />
      </FormGroup>
      <FormGroup htmlFor="address" label="Street Address">
        <input type="text" id="address" />
      </FormGroup>
      <FormGroup htmlFor="city" label="City">
        <input type="text" id="city" />
      </FormGroup>
      <FormGroup htmlFor="state" label="State">
        <input type="text" id="state" />
      </FormGroup>
      <FormGroup htmlFor="zipCode" label="Zip Code">
        <input type="text" id="zipCode" />
      </FormGroup>
    </Stack>
  );
}

function FormGroup(props) {
  return (
    <Stack gutter="md">
      <label htmlFor={props.htmlFor}>{props.label}</label>
      {props.children}
    </Stack>
  );
}
