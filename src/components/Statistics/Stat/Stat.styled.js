import styled from '@emotion/styled';

const randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
export const Item = styled.li`
  width: 40px;
  height: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  background-color: ${randomColor};
`;
export const Label = styled.span`
  font-size: 16px;
  color: white;
`;

export const Percentage = styled.span`
  font-size: 22px;
  color: white;
`;
