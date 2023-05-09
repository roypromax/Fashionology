import { ReactNode } from 'react';
import { NavLink } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import fashionoLogy from "../assets/fashionology.jpeg"

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("cartData")
    window.location.href = "/";
  };
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box style={{width:'40%', marginRight:'20px'}}>
          <NavLink to='/adminhome'>
            <img style={{width:'40%'}} src={fashionoLogy} alt=""/>
          </NavLink>
          </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://media.licdn.com/dms/image/D4D03AQEr-FMqv6dFVw/profile-displayphoto-shrink_200_200/0/1677616027158?e=1689206400&v=beta&t=tJNNnCc3LovYdVfbZG0vRtUmqKWF8eE8sGPle6nuqzI'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://media.licdn.com/dms/image/D4D03AQEr-FMqv6dFVw/profile-displayphoto-shrink_200_200/0/1677616027158?e=1689206400&v=beta&t=tJNNnCc3LovYdVfbZG0vRtUmqKWF8eE8sGPle6nuqzI'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Samreen</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}