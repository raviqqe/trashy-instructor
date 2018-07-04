import * as React from "react";
import Trash = require("react-icons/lib/fa/trash");
import styled from "styled-components";

const Bin = styled<{ color: string }>(Trash)`
    color: ${({ color }) => color};
`;

interface IProps {
    color: string;
}

export default class extends React.Component<IProps> {
    public render() {
        const { color } = this.props;

        return <Bin color={color} />;
    }
}
