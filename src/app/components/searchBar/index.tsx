import React from 'react'
import styled  from 'styled-components'
import tw from 'twin.macro'


const SearchBarContainer = styled.div`
  ${tw`pt-2 relative mx-auto text-gray-600`}
`;

const SearchInput = styled.input`
 
${tw`
border-2 border-gray-300 bg-white h-7 px-5  text-sm focus:outline-none
`}
`;


export function SearchBar () 
{
    return  <SearchBarContainer>
        <SearchInput type="search" name="search" placeholder="search"></SearchInput>
    </SearchBarContainer>
    
}