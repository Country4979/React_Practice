import styled from 'styled-components';
import './Buttons.css';

const accentColor = 'var(--color)';
const primaryBorder = '0px';

const Button = styled.button`
  cursor: pointer;
  min width: 45px;
  margin: 0;
  padding: 0;
  background-color: inherit;
  border-width: ${(props) =>
      props.variant === 'primary' ? primaryBorder : '2px'};
  border-color: ${(props) =>
      props.variant === 'primary' ? accentColor : 'rgb(241, 85, 28)'}
  color: ${(props) =>
      props.variant === 'primary' ? accentColor : 'rgb(241, 85, 28)'};
  
  display: inline-flex;
  align-items: center;
  font-family: 'Ananda', 'Ananda Black';
  font-weight: bold; 
  font-style: italic;
  font-weight: bold;
 
  justify-content: center;
  min-width: 72px;
  outline-style: none;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: 0 30px;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  text-decoration:  ${(props) => (props.variant ? 'underline' : 'none')};
  transition: background-color 0.2s;
  margin-right: ${(props) => (props.variant ? 0 : '10px')}
`;

export default Button;
