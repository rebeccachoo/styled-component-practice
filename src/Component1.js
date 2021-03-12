import React from "react";
import styled from "styled-components";

// 메인컨테이너는 섭컨테이너를 받아와서 스타일을 추가한다. 이렇게 스타일을 추가 할수있다.
const SubContainer = styled.div`
	margin: 10px;
	color: red;
`;
const MainContainer = styled(SubContainer)`
	padding: 10px;
	border: 1px black solid;
`;
const BlackColor = styled.div`
	color: black;
`;

// prop으로 인자를 받아온 후에 글자 색깔을 바꿀수 있습니다.
// line 35줄에 보면 inputColor="pink" 이렇게 인자를 주고 난후 22번 줄에서 props가 있으면 인자대로 색을 바꾸고 없으면 까만색으로 바꿉니다.
const Input = styled.input`
	padding: 0.5em;
	margin: 0.5em;
	color: ${(props) => props.inputColor || "black"};
`;

function Component1() {
	return (
		<MainContainer>
			mainContainer
			<div className="exp">
				This MainContainer will be inherited from SubContainer
			</div>
			<BlackColor>
				No inputColor <Input defaultValue="@probablyup" type="text" />
				<br />
				inputColor="pink"
				<Input defaultValue="@probablyup" inputColor="pink" type="text" />
			</BlackColor>
		</MainContainer>
	);
}

export default Component1;
