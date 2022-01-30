import React from 'react';
import styled from "styled-components";
import { getPadding, getSpacing } from './GlobalStyling';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;

  > * {
    width: inherit;
    height: inherit;
  }
`;

type FlexProps = {
  flexDirection?: "row" | "column";
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.flexDirection || "row"}
`

type FlexItemProps = {
  flex: React.CSSProperties["flex"]
};

const FlexItem = styled.div<FlexItemProps>`
  flex: ${props => props.flex} 
`

const Navigation = styled.nav`
  background: aliceblue;
  height: ${getSpacing(8)};
`;

const VerticalList = styled.ul`
  display: flex;
`;

const VerticalListItem = styled.li`
  padding: ${getPadding(2)};
`;

function App() {
  return (
    <AppContainer>
      <Flex flexDirection="column">
        <FlexItem flex="1">
          Content
        </FlexItem>
        <Navigation>
          <VerticalList>
            <VerticalListItem>Workouts</VerticalListItem>
            <VerticalListItem>Performance</VerticalListItem>
          </VerticalList>
        </Navigation>
      </Flex>
    </AppContainer>
  );
}

export default App;
