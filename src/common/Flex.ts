import styled from "styled-components";

type FlexProps = {
  flexDirection?: "row" | "column";
}
  
export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"}
`

type FlexItemProps = {
  flex: React.CSSProperties["flex"]
};

export const FlexItem = styled.div<FlexItemProps>`
  flex: ${props => props.flex} 
`