import React from "react";
import { createGlobalStyle } from "styled-components";

import Component1 from "./Component1.js";
import Component2 from "./Component2.js";
import Component3 from "./Component3.js";
import Component4 from "./Component4.js";

// GlobalStyle is for a wrapper class that wraps all the elements
// You need to import createGlobalStyle from styled-components to use it.
// 글로벌 스타일은 모든 엘레멘트의 상위 컴포넌트로 이곳에 스타일을 넣으면 모든 컴포넌트에 적용된다.
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
  .exp {
    font-size:13px;
    color: grey;
    padding-top:5px;
    padding-bottom:10px;
  }
  h2{
    padding-top: 10px;
  }
`;
// 화면이 grey색깔인것은 body 태그에 그레이로 넣었기 때문이다.
function App() {
	return (
		<>
			<GlobalStyle />
			<h2>* Component 1 </h2>
			<Component1 />
			<h2>* Component 2</h2>
			<Component2 />
			<h2>* Component 3</h2>
			<Component3 />
			<h2>* Component 4</h2>
			<Component4 />
		</>
	);
}

export default App;
