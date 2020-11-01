import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  padding: 5px;
`;

export const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #ffffff;
  font-size: 14px;
`;
