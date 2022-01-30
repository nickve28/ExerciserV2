import React from 'react';
import styled from "styled-components";
import { Flex, FlexItem } from './common/Flex';
import { VerticalList, VerticalListItem } from './common/VerticalList';
import { getPadding, getSpacing } from './GlobalStyling';
import { Navigation } from './modules/Navigation';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;

  > * {
    width: inherit;
    height: inherit;
  }
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
