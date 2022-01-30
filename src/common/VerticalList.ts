import styled from "styled-components";
import { getPadding } from "../GlobalStyling";

export const VerticalList = styled.ul`
  display: flex;
`;

export const VerticalListItem = styled.li`
  padding: ${getPadding(2)};
`;
