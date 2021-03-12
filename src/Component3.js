import React from "react";
import styled from "styled-components";

const Button = styled.button`
	display: inline-block;
	color: orange;
	cursor: pointer;
	padding: 10px;
	font-size: 17px;
	margin-bottom: 30px;
`;
const Link = ({ className, children }) => (
	<a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
	color: palevioletred;
	font-weight: bold;
`;

// as를 사용해서 다른컴포넌트로 바꿀수있습니다.
// 31번줄의 컴포넌트는 Link로 생성됐지만, as를 써서 ReversedButton의 스타일도 추가되었습니다.
// props로 children이란 컴포넌트 안에 들어있는 내용을 가리킵니다.
const ReverseButton = (props) => (
	<Button {...props} children={props.children.split("").reverse()} />
);

function Component3() {
	return (
		<div>
			<Button as={ReverseButton}>Custom Button with style</Button>
			<div>
				<Link>Normal Link</Link>
				<br />
				<StyledLink>Styled Link</StyledLink>
			</div>
		</div>
	);
}

export default Component3;
