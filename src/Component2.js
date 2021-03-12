import React from "react";
import styled from "styled-components";

// 16번 줄에 primary라는 props를 넣어줬기때문에 9번 줄에서 props받아옵니다. props.primary가 세팅되어있는지 체크 한 후 white/blue로 세팅합니다.
const Button = styled.button`
	color: black;
	border: 1px grey solid;
	padding: 10px;
	background: ${(props) => (props.primary ? "white" : "blue")};
`;

function Component2() {
	return (
		<div>
			<div className="exp">Primary button has a primary tag.</div>
			<Button primary>Primary Button</Button>
			<Button>Button</Button>
		</div>
	);
}

export default Component2;
