import React from "react";
import styled from "styled-components";

const SubContainer = styled.div`
	margin: 10px;
	color: red;
`;
const MainContainer = styled(SubContainer)`
	padding: 10px;
	border: 1px black solid;
`;

function Component1() {
	return (
		<MainContainer>
			mainContainer
			<div className="exp">
				This MainContainer will be inherited from SubContainer
			</div>
		</MainContainer>
	);
}

export default Component1;
