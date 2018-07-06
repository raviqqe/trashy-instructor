import * as React from "react";
import { connect } from "react-redux";
import styled, { css, keyframes } from "styled-components";

import { IMovement, rubbish, RubbishId } from "../domain";
import { elementToPosition, positionsToMovement } from "../infra";
import * as bins from "../state/bins";

const duration = 2000;

const animation = ({ x, y }: IMovement) => keyframes`
    0% {
        visibility: visible;
        opacity: 0;
    }

    50% {
        opacity: 1;
        transform: scale(1) translate(0);
    }

    100% {
        transform: scale(0.5) translate(${2 * x}px, ${2 * y}px);
    }
`;

const Rubbish = styled.div<{ movement: IMovement, moving: boolean }>`
    font-size: 10em;
    visibility: hidden;
    transform-origin: 50% 50%;
    ${({ movement, moving }) => moving ? `animation: ${animation(movement)} ${duration}ms;` : ""}

    svg {
        filter: drop-shadow(0 0 0.05em rgba(0, 0, 0, 0.5));
    }
`;

interface IProps extends Partial<bins.IActionCreators> {
    bins?: bins.IState;
    id: RubbishId;
    thrown?: boolean;
}

interface IState {
    movement: IMovement;
    moving: boolean;
}

@connect(({ bins, rubbish }, { id }: IProps) => ({ bins, ...rubbish[id] }), bins.actionCreators)
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
        const { bins, id, shakeBin, thrown } = this.props;
        const { moving } = this.state;
        const { binId, key } = rubbish[id];

        if (!moving && !props.thrown && thrown) {
            shakeBin(binId);

            this.setState({
                movement: positionsToMovement(elementToPosition(this.ref.current), bins[binId].position),
                moving: true,
            });

            setTimeout(() => this.setState({ moving: false }), duration);
        }
    }
}
