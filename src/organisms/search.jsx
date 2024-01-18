import React from 'react'

import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';

const Search = styled('div')(() => ({
    position: 'relative',
    borderRadius: '25px',
    backgroundColor: '#EEF3FD',
    '&:hover': {
      backgroundColor: '#EEF',
    },
  }));
  
  const SearchIconWrapper = styled('div')(() => ({
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(() => ({
    color: 'inherit',
    marginLeft: '40px'
  }));

export default function InputSearch() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{ml:'10px'}}/>
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
      />
    </Search>
  )
}
