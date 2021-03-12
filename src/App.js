import React from "react";
import { createGlobalStyle } from "styled-components";

import Component1 from "./Component1.js";
import Component2 from "./Component2.js";
import Component3 from "./Component3.js";

// GlobalStyle is for a wrapper class that wraps all the elements
// You need to import createGlobalStyle from styled-components to use it.
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

function App() {
	return (
		<>
			<GlobalStyle />
			<h2>* Component 1 (inherit)</h2>
			<Component1 />
			<h2>* Component 2</h2>
			<Component2 />
			<h2>* Component 3</h2>
			<Component3 />
		</>
	);
}

export default App;
