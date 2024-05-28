import { Typewriter } from 'react-simple-typewriter';
import { HeaderContainer, StyledHeader } from './Styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <StyledHeader> I'm a </StyledHeader>
      <StyledHeader>
        <Typewriter words={['Web Developer', 'Mobile Developer']} loop={0} cursor />
      </StyledHeader>
    </HeaderContainer>
  );
};
