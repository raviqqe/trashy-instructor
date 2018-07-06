import * as React from "react";
import Trash = require("react-icons/lib/fa/trash");
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";

import { BinId, bins } from "../domain";
import { elementToPosition } from "../infra";
import { actionCreators, IActionCreators } from "../state/bins";
import * as environment from "../state/environment";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const animation = keyframes`
    0% {}
    25% { transform: rotate(5deg); }
    75% { transform: rotate(-5deg); }
    100% { transform: rotate(0deg); }
`;

const Bin = styled<{ color: string, shaken: boolean }>(Trash)`
    font-size: 10em;
    color: ${({ color }) => color};
    z-index: 100;
    transform-origin: 50% 100%;
    ${({ shaken }) => shaken ? `animation: ${animation} 0.2s infinite;` : ""}
`;

interface IProps extends Partial<IActionCreators>, Partial<environment.IState> {
    id: BinId;
    shaken?: boolean;
}

interface IState {
    shaken: boolean;
}

@connect(({ bins, environment }, { id }: IProps) => ({ ...bins[id], ...environment }), actionCreators)
export default class extends React.Component<IProps, IState> {
    public state: IState = { shaken: false };
    private ref: any = React.createRef();

    public render() {
        const { shaken } = this.state;
        const { color } = bins[this.props.id];

        return (
            <Wrapper innerRef={this.ref}>
                <Bin color={color} shaken={shaken} />
            </Wrapper>
        );
    }

    public componentDidMount() {
        this.updatePosition();
    }

    public componentDidUpdate(props: IProps) {
        if (!props.windowResized && this.props.windowResized) {
            this.updatePosition();
        }

        if (!this.state.shaken && !props.shaken && this.props.shaken) {
            this.setState({ shaken: true });
            setTimeout(() => this.setState({ shaken: false }), 1000);
        }
    }

    private updatePosition() {
        const { id, setPosition } = this.props;

        this.props.setPosition({ id, position: elementToPosition(this.ref.current) });
    }
}
