import * as React from "react";
import Trash = require("react-icons/lib/fa/trash");
import styled from "styled-components";

import { BinId, bins } from "../domain";

const Bin = styled<{ color: string }>(Trash)`
    font-size: 10em;
    color: ${({ color }) => color};
`;

interface IProps {
    id: BinId;
}

export default class extends React.Component<IProps> {
    public render() {
        const { color } = bins[this.props.id];

        return <Bin color={color} />;
    }
}
