import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import * as domain from "../domain";
import * as message from "../state/message";

const Message = styled.div`
    font-size: 2em;
    height: 2em;
`;

const Name = styled.span<{ color: string }>`
    color: ${({ color }) => color};
    font-weight: bold;
`;

@connect(({ message }) => message)
export default class extends React.Component<Partial<message.IState>> {
    public render() {
        const { message } = this.props;

        if (!message) {
            return <Message />;
        }

        const bin = domain.bins[message.binId];
        const rubbish = domain.rubbish[message.rubbishId];

        return (
            <Message>
                Put <Name color={rubbish.color}>{rubbish.name}</Name>{" "}
                in <Name color={bin.color}>{bin.name}</Name>.
            </Message >
        );
    }
}
