import styled, { keyframes } from 'styled-components';
import InputMask from 'react-input-mask';

export const StyledInputMask = styled(InputMask)`
 height: 54px;
  border-radius: 5px;
  background: white;
  margin-bottom: 15px;
  border: none;
  padding: 0 20px;
  font-weight: 300;
  font-size: 14px;
  color: #4B4B4B;
  &:hover {
  transform: scale(1.009);
  box-shadow: 0px 0px 3px 0px #212529;
  }
`

export const Container = styled.div`
  position: relative;
  // background-color: #212121;
  min-width: 100%;
  min-height: 100vh;
`

export const Form = styled.form`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  width: 300px;
`
export const Input = styled.input`
  height: 54px;
  border-radius: 5px;
  background: white;
  margin-bottom: 15px;
  border: none;
  padding: 0 20px;
  font-weight: 300;
  font-size: 14px;
  color: #4B4B4B;
  &:hover {
  transform: scale(1.009);
  box-shadow: 0px 0px 3px 0px #212529;
  }
`

export const Textarea = styled.textarea`
  font-size: 14px;
  resize: none;
  min-height: 100px;
  max-width: 300px;
  padding-top: 10px;
  height: 54px;
  border-radius: 5px;
  background: white;
  margin-bottom: 15px;
  border: none;
  padding: 10px 20px;
  font-weight: 300;
  font-size: 14px;
  color: #4B4B4B;
`


export const Button = styled.button`
  width: 100%;
  height: 54px;
  font-size: 14px;
  color: white;
  background: #F26527;
  border-radius: 5px;
  border: none;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
  transform: scale(1.009);
  box-shadow: 0px 0px 3px 0px #212529;
  }
`

// .img {
//   display: inline-block;
// }

export const Wrap = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: -20px;
`

export const Subtitle = styled.h2`
  text-align: center;
  color: #F26527;
  font-size: 30px;
  margin: 0 0 0 20px;
  text-transform: uppercase;
`
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Img = styled.img`
  animation: ${spin} infinite 20s linear;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;