import styled from 'styled-components';
import { white, purpleLight, purpleDark } from '~/styles/colors';

export const Container = styled.div`
  max-width: 900px;
  background-color: ${white};
  padding: 30px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  > form {
    display: flex;
    flex-direction: column;
    margin: 50px 0;
  }
`;
export const ImgProfile = styled.img`
  background-color: ${purpleLight};
  border: 1px solid ${purpleDark};
  border-radius: 95px;
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;
