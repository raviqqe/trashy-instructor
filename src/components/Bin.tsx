import * as React from "react";
import Trash = require("react-icons/lib/fa/trash");
import { connect } from "react-redux";
import styled from "styled-components";

import { BinId, bins } from "../domain";
import { elementToPosition } from "../infra";
import { actionCreators, IActionCreators } from "../state/bins";
import * as environment from "../state/environment";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Bin = styled<{ color: string }>(Trash)`
    font-size: 10em;
    color: ${({ color }) => color};
`;

interface IProps extends Partial<IActionCreators>, Partial<environment.IState> {
    id: BinId;
}

@connect(({ environment }) => environment, actionCreators)
export default class extends React.Component<IProps> {
    private ref: any = React.createRef();

    public render() {
        const { color } = bins[this.props.id];

        return (
            <Wrapper innerRef={this.ref}>
                <Bin color={color} />
            </Wrapper>
        );
    }

    public componentDidMount() {
        this.updatePosition();
    }

    public componentDidUpdate() {
        this.updatePosition();
    }

    private updatePosition() {
        const { id, setPosition } = this.props;

        this.props.setPosition({ id, position: elementToPosition(this.ref.current) });
    }
}
