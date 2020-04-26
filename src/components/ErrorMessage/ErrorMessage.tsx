import React from 'react';
import { ErrorContainer, ErrorText, Img } from './ErrorMessageStyled';
import errorImage from '../../assets/error.gif';

type ErrorMessageProps = {
  text?: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }) => {
  return (
    <ErrorContainer>
      <Img src={errorImage} alt="error" />
      <ErrorText>{text}</ErrorText>
    </ErrorContainer>
  );
};

ErrorMessage.defaultProps = {
  text: 'Something went wrong',
};
