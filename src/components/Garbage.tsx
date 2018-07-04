import * as React from "react";
import Apple = require("react-icons/lib/fa/apple");
import styled from "styled-components";

const Garbage = styled(Apple)`
    color: red;
    font-size: 10em;
`;

export default class extends React.Component {
    public render() {
        return <Garbage />;
    }
}
