import React from 'react';
import { Container } from 'react-bootstrap';
import { ContainerProps } from 'react-bootstrap/Container';

interface MainContainerProps {
  className: string;
  children?: JSX.Element | JSX.Element[]
}

type Props = MainContainerProps & ContainerProps

const MainContainer: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <Container
      className={`px-1 px-sm-0${className ? ` ${className}` : ''}`}
      {...rest}
    >
      {children}
    </Container>
  );
}

export default MainContainer;
