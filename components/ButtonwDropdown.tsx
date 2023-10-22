import { type } from 'os'
import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

type ButtonType = {
    label: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonwDropdown = () => {
  return (
    <>
      <Menu >
        <MenuButton as={Button} color='blue' rightIcon={<ChevronDownIcon />}>
            More Options
        </MenuButton>
        <MenuList color='blue'>
            <MenuItem>Option 1</MenuItem>
            <MenuItem>Option 2</MenuItem>
            <MenuItem>Option 3</MenuItem>
            <MenuItem>Option 4</MenuItem>
            <MenuItem>Option 5</MenuItem>
        </MenuList>
        </Menu>
    </>
  )
}

export default ButtonwDropdown
