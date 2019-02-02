import styled from 'styled-components';


// position:  ${props => props.type==="market"  || props.type ==="home" ? "auto;" : "fixed;"}
const Main = styled.div `
  text-align:  ${props => props.type==="home" ? "center;" : "auto;"}
  height:  ${props => props.type==="home"  || props.type==="market"? "auto;" : "100vh;"}
  background: ${props => {
    switch(props.type){
      case "home":
        return "linear-gradient(to bottom, #f09819, #edde5d);"
        break
      case "create":
        return "linear-gradient(to bottom, #ff8a00, #da1b60);"
        break
      case "market":
        return  "linear-gradient(to bottom, #ff8a00, #da1b60);"
        break
      }
    }
  };

  top:0;
  width: 100%;
`;


const Header = styled.h1 `
  font-family: LLCircular,sans-serif;
  font-size: 80px;
  font-weight: 600;
  line-height: 76px;
  margin-top: 0px;
  padding-top:3rem;

`;

export {
  Main,
  Header
}
