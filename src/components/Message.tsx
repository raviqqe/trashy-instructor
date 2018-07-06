import { isEqual } from "lodash";
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

interface IProps extends Partial<message.IState> {}

interface IState {
  message: domain.IMessage | null;
}

@connect(({ message }) => message)
export default class extends React.Component<IProps> {
  public state: IState = {
    message: null
  };

  public timeout = window.setTimeout(() => undefined);

  public render() {
    const { message } = this.state;

    if (!message) {
      return <Message />;
    }

    const bin = domain.bins[message.binId];
    const rubbish = domain.rubbish[message.rubbishId];

    return (
      <Message>
        Put <Name color={rubbish.color}>{rubbish.name}</Name> in{" "}
        <Name color={bin.color}>{bin.name}</Name>.
      </Message>
    );
  }

  public componentDidUpdate(props: IProps) {
    const { message } = this.props;

    if (!isEqual(props.message, message)) {
      clearTimeout(this.timeout);

      this.setState({ message });

      this.timeout = window.setTimeout(
        () => this.setState({ message: null }),
        2000
      );
    }
  }
}
