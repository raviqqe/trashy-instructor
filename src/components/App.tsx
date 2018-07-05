import * as React from "react";
import styled from "styled-components";

import { RubbishId } from "../domain";
import Bins from "./Bins";
import Rubbish from "./Rubbish";

const App = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default class extends React.Component {
    public render() {
        return (
            <App>
                <Rubbish id={RubbishId.Apple} />
                <Bins />
            </App>
        );
    }
}
