import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Center } from "@bedrock-layout/center";
import { PadBox } from "@bedrock-layout/padbox";
import styled from "styled-components";
import "@bedrock-layout/css-reset/lib/reset.css";
import FormSideBar from "./Split";

const BaseStyles = styled(Center).attrs(() => ({ as: PadBox }))`
  input {
    border: 1px solid black;
    background: white;
  }

  button {
    color: white;
    background: black;
    border: none;
  }
`;

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BaseStyles padding="mdLg" maxWidth="85rem">
      <FormSideBar />
    </BaseStyles>
  </StrictMode>
);
