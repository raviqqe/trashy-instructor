import * as React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";

import { IMovement, rubbish, RubbishId } from "../domain";
import { elementToPosition, positionsToMovement } from "../infra";
import * as bins from "../state/bins";
import * as keyboard from "../state/keyboard";

const duration = 1000;

const Rubbish = styled.div<{ movement: IMovement, moving: boolean }>`
    color: red;
    font-size: 10em;
    transition: transform ${duration}ms;
    ${({ movement: { x, y }, moving }) => moving ? `transform: translate(${x}px, ${y}px);` : ""}
`;

interface IProps extends Partial<keyboard.IState> {
    bins?: bins.IState;
    id: RubbishId;
}

interface IState {
    movement: IMovement;
    moving: boolean;
}

@connect(({ bins, keyboard }) => ({ bins, ...keyboard }))
export default class extends React.Component<IProps, IState> {
    public ref: any = React.createRef();
    public state: IState = { movement: { x: 0, y: 0 }, moving: false };

    public render() {
        const { movement, moving } = this.state;
        const Image = rubbish[this.props.id].image;

        return (
            <Rubbish innerRef={this.ref} movement={movement} moving={moving}>
                <Image />
            </Rubbish>
        );
    }

    public componentDidUpdate(props: IProps) {
        const { bins, currentKey, id } = this.props;
        const { binId, key } = rubbish[id];

        if (props.currentKey !== currentKey && key === currentKey) {
            this.setState({
                movement: positionsToMovement(elementToPosition(this.ref.current), bins[binId]),
                moving: true,
            });

            setTimeout(() => this.setState({ moving: false }), duration);
        }
    }
}
