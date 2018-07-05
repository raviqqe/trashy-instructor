import * as React from "react";
import styled from "styled-components";

import { rubbish, RubbishId } from "../domain";

const Rubbish = styled.div`
    color: red;
    font-size: 10em;
`;

interface IProps {
    id: RubbishId;
}

export default class extends React.Component<IProps> {
    public render() {
        const Image = rubbish[this.props.id].image;

        return <Rubbish><Image /></Rubbish>;
    }
}
