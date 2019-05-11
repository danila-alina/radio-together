import styled from 'styled-components';
import * as styles from 'constants/styles';

export const PageStep1 = styled.div`
  width: 100%;
  min-height: 100vh;
  color: ${styles.fontColor};
  background: linear-gradient(
    to bottom left,
    #F7BB97, #DD5E89 
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageStep2 = styled.div`
  width: 100%;
  min-height: 100vh;
  color: ${styles.fontColor};
  background-color: ${styles.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  max-width: 750px;
  min-height: 300px;
  margin: 0 auto;
  padding: 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
`;

export const SectionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterSection = styled.section`
  background: linear-gradient(
    to bottom left,
    #F7BB97, #DD5E89 
  );
  padding: 50px;
  border-radius: 15px;
`;

export const RegisterInput = styled.input.attrs(props => ({
  placeholder: props.placeholder,
  type: props.type ? props.type : 'text',
}))`
  width: 100%;
  height: 40px;
  border: none;
  background-color: ${styles.backgroundColor};
  margin-bottom: 15px;
  border-radius: 15px;
  padding: 0 15px;
`;

export const LogInInput = styled.input.attrs(props => ({
  placeholder: props.placeholder,
  type: props.type ? props.type : 'text',
}))`
  width: 100%;
  height: 40px;
  border: 1px solid ${styles.grayColor};
  margin-bottom: 15px;
  border-radius: 15px;
  padding: 0 15px;
`;

export const LogInSection = styled.section`
  box-shadow: 2px 4px 15px 2px rgba(207,207,207,0.5);
  padding: 50px;
  border-radius: 15px;
  margin-left: 20px;
`;

export const Title = styled.div`
  margin-bottom: 20px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.white && styles.whiteColor};
`;

export const Section = styled.section`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.div`
  margin-bottom: 5px;
`;

export const SubmitButton = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 15px;
  border: ${props => (props.colorful ? 'none' : `1px solid ${styles.whiteColor}`)};
  color: ${styles.whiteColor};
  background:  ${props => props.colorful && `linear-gradient(
    to bottom left,
    #F7BB97, #DD5E89 
  )`};
  display: flex;
  justify-content: center;
  align-items: center;
  
  :hover {
    cursor: pointer;
    filter: brightness(97%);
  }
`;

export const PageTitle = styled.h1`
  font-weight: 300;
  font-size: 24px;
  letter-spacing: -2px;
`;

export const SignInButton = styled.div`
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  font-weight: normal;
  font-size: 16px;
  margin-top: 30px;
  border: 1px solid ${styles.grayColor};
  :hover {
    cursor: pointer;
  }
`;
