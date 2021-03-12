import React from "react";
import styled from "styled-components";

const Button = styled.button`
	color: black;
	border: 1px grey solid;
	padding: 10px;
	background: ${(props) => (props.primary ? "white" : "blue")};
`;

function Component3() {
	return (
		<div>
			<div className="exp">Primary button has a primary tag.</div>
			<Button primary>Primary Button</Button>
			<Button>Button</Button>
		</div>
	);
}

export default Component3;
