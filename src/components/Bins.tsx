import * as React from "react";
import styled from "styled-components";

import Bin from "./Bin";

const Bins = styled.div`
    display: flex;
    justify-content: center;
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
