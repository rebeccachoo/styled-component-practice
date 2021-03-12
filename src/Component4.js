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

// 리스트는 프랍스로 App.js에서 보내준 값이다.
// 여기 리스트는 그 값을 가지고 active값이 true/false인지 분별해서 스타일을 보여준다.
const List = styled.li`
	list-style: none;
	color: brown;
	${(props) =>
		props.active &&
		css`
			color: orange;
		`}
	&:hover {
		background-color: green;
		cursor: pointer;
	}
`;

function Component4({ lists }) {
	return (
		<div>
			<Example purple>Example 1</Example>
			<Example purple important>
				Example 1
			</Example>
			<br />
			<br />- Only active users will be highlighted with orange color and the
			styled components will recognize if the user is active or not with the
			props.
			<ul>
				{lists.map((list) => {
					console.log(list);
					return (
						<List key={list.id} active={list.active}>
							{list.number}: {list.name}
						</List>
					);
				})}
			</ul>
		</div>
	);
}
export default Component4;
