import React from "react";
import { createGlobalStyle } from "styled-components";

// GlobalStyle is for a wrapper class that wraps all the elements
// You need to import createGlobalStyle from styled-components to use it.
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
	return (
		<>
			<GlobalStyle />
		</>
	);
}

export default App;
