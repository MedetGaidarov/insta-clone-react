import React from 'react'
import styled  from 'styled-components'
import tw from 'twin.macro'
import { Logo } from '../logo';
import { SearchBar } from '../searchBar';



const NavbarContainer = styled.div`
  min-height: 50px;
  ${tw`
  w-full
  max-w-screen-2xl
  flex
  flex-row
  items-center
  lg:pl-9
  lg:pr-9
  justify-between
  border-b-2
  border-gray-300
    `}
`;

const LogoContainer = styled.div``;

export function Navbar () 
{
    return <NavbarContainer>
        <LogoContainer>
            <Logo/>
        </LogoContainer>
        <SearchBar></SearchBar>
    </NavbarContainer>;
}