import styled from 'styled-components';

const accentColor = 'rgb(210, 156, 5)';
const visibility = 'inline-flex';

const Button = styled.button`
  cursor: pointer;
  background-color: ${props =>
    props.variant === 'primary' ? accentColor : 'white'};
  border-radius: 9999px;
  border-style: solid;
  border-width: 1px;
  border-color: ${accentColor};
  color: ${props => (props.variant === 'primary' ? 'white' : accentColor)};
  
  display: ${props => (props.visibility === 'primary' ? visibility : 'none')};
  align-items: center;
  font-family: 'Ananda', 'Ananda Black';
  font-weight: bold; 
  font-style: italic;
  justify-content: center;
  min-width: 72px;
  outline-style: none;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  padding: 0 30px;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  text-decoration: none;
  transition: background-color 0.2s;
`;

export default Button;
