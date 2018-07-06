import * as React from "react";
import styled from "styled-components";

import { rubbish } from "../domain";
import Rubbish from "./Rubbish";

const RubbishList = styled.div`
    display: flex;
`;

export default class extends React.Component {
    public render() {
        return (
            <RubbishList>
                {Object.keys(rubbish).map((id) => <Rubbish id={Number(id)} key={id} />)}
            </RubbishList>
        );
    }
}
