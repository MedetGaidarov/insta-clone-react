import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import instaLogo from '../../../assets/images/instaLogo.png'


const LogoContainer = styled.div`
  ${tw`
flex
items-center
`};
`;


const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`};
  img {
    width: auto;
    height: 100%;
  }
`;


export function Logo()
{
    return (
      <LogoContainer>
        <Image>
          <img src= {instaLogo}/>
        </Image>
      </LogoContainer>
    );
}