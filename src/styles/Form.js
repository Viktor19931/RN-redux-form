import React from "react";
import styled, {css} from 'styled-components/native'
import {h1FontSize, h2FontSize, h3FontSize, h4FontSize} from './index'

export const Input = styled.TextInput`
  padding-vertical: 5px;
  ${({h1}) => h1 && css`
    font-size: ${h1FontSize};
  `}
  ${({h2}) => h2 && css`
    font-size: ${h2FontSize};
  `}
  ${({h3}) => h3 && css`
    font-size: ${h3FontSize};
  `}
  ${({h4}) => h4 && css`
    font-size: ${h4FontSize};
  `}
`;

export const Control = styled.View`
  margin-bottom: 24px;
`;

export const Seperator = styled.View`
  height: 1px;
  border-top-width: 1px;
  border-top-color: ${props => props.color};
  margin-top: 16px;
  margin-bottom: 16px;
`
