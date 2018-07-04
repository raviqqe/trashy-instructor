import * as React from "react";
import styled from "styled-components";

import { horizontalMargin } from "../style";
import Bin from "./Bin";

const Bins = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    ${horizontalMargin("0.5rem")}
`;

export default class extends React.Component {
    public render() {
        return (
            <Bins>
                <Bin color="blue" />
                <Bin color="green" />
                <Bin color="black" />
            </Bins>
        );
    }
}
