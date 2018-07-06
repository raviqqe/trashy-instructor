import { isEqual } from "lodash";
import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import * as domain from "../domain";
import * as message from "../state/message";

const Message = styled.div<{ shown: boolean }>`
  font-size: 2em;
  height: 2em;
  transition: opacity 0.1s;
  ${({ shown }) => (shown ? "" : `opacity: 0`)};
`;

const Name = styled.span<{ color: string }>`
  color: ${({ color }) => color};
  font-weight: bold;
`;

interface IProps extends Partial<message.IState> {}

interface IState {
  message: domain.IMessage;
  shown: boolean;
}

@connect(({ message }) => message)
export default class extends React.Component<IProps, IState> {
  public state: IState = {
    message: { binId: domain.BinId.Garbage, rubbishId: domain.RubbishId.Apple },
    shown: false
  };

  public timeout = window.setTimeout(() => undefined);

  public render() {
    const { shown, message } = this.state;
    const bin = domain.bins[message.binId];
    const rubbish = domain.rubbish[message.rubbishId];

    return (
      <Message shown={shown}>
        Put <Name color={rubbish.color}>{rubbish.name}</Name> in{" "}
        <Name color={bin.color}>{bin.name}</Name>.
      </Message>
    );
  }

  public componentDidUpdate(props: IProps) {
    const { message } = this.props;

    if (message !== null && !isEqual(props.message, message)) {
      clearTimeout(this.timeout);

      this.setState({ message, shown: true });

      this.timeout = window.setTimeout(
        () => this.setState({ shown: false }),
        2000
      );
    }
  }
}
