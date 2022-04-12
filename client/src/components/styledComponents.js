import styled from 'styled-components'

export const ListItems = styled.p`
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding: 10px;
  margin: 2px;
  padding-top: 3px;
  padding-bottom: 6px;
  transition: background-color 0.5s;
  transform-origin: center center;
  width: fit-content;
  :hover {
    background-color: ${props => props.bgColor};
    color: black;
  }
`
export const ConnectWalletItem = styled.p`
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  transition: background-color 0.5s;
  transform-origin: center center;
  color: white;
  height: 21px;
  font-family: "Roboto";
  :hover {
    background-color: ${props => props.bgColor};
    color: white;
    font-family: "Roboto";
  }
`