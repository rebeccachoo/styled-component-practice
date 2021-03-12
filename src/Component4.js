import React from "react";
import styled, { css } from "styled-components";

// 만약 프랍스에 퍼플이 있으면 글자색을 퍼플로 바꾸고
// 그리고 important까지 있으면 바탕화면까지 바꿔준다.
const Example = styled.div`
	${(props) =>
		props.purple &&
		css`
			color: purple;
		` &&
		props.important &&
		css`
			background-color: yellow;
		`}
`;

function Component4() {
	return (
		<div>
			<Example purple>Example 1</Example>
			<Example purple important>
				Example 1
			</Example>
		</div>
	);
}
export default Component4;
