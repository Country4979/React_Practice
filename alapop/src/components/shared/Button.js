import styled from 'styled-components';

const accentColor = 'rgb(210, 156, 5)';

const Button = styled.button`
  cursor: pointer;
  min width: 45px;
  margin: 0;
  padding: 0;
  background-color: inherit;
  border-width: 0;
  border-color: ${accentColor};
  color: ${props => (props.variant === 'primary' ? accentColor : 'black')};
  display: inline-flex;
  align-items: center;
  font-family: 'Ananda', 'Ananda Black';
  font-weight: bold; 
  font-style: italic;
  font-weight: bold;
 
  justify-content: center;
  min-width: 72px;
  outline-style: none;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  padding: 0 30px;
  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
  text-decoration: underline;
  transition: background-color 0.2s;
`;

export default Button;
