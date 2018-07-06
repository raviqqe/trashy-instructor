import * as React from "react";
import styled from "styled-components";

import { rubbish } from "../domain";
import { horizontalMargin } from "../style";
import Rubbish from "./Rubbish";

const RubbishList = styled.div`
  display: flex;
  ${horizontalMargin("-5rem")};
`;

export default class extends React.Component {
  public render() {
    return (
      <RubbishList>
        {Object.keys(rubbish).map(id => <Rubbish id={Number(id)} key={id} />)}
      </RubbishList>
    );
  }
}
