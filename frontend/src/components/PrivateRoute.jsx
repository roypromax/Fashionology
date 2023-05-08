import { useDisclosure } from '@chakra-ui/react';

import { useSelector } from 'react-redux';

export const PrivateRoute = ({children}) => {
  const {onOpen } = useDisclosure();
  
  const {userName} = useSelector((store) => {
    return store.loginReducer;
  });

  return userName ? children: onOpen()
}