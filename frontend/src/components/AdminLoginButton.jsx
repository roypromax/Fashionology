// import React from "react";
// import AdminLogin from './AdminLogin'
// import {
//   MenuItem,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalOverlay,
// } from "@chakra-ui/react";

// export const AdminLoginButton = ({ isOpen, onOpen, onClose, userName }) => {
//   const handleLogout = () => {
//     localStorage.removeItem("userData");
//     window.location.href = "/adminhome";
//   };

//   return (
//     <div>
//       {" "}
//       {userName ? (
//         <MenuItem onClick={handleLogout}>Logout</MenuItem>
//       ) : (
//         <MenuItem onClick={onOpen}>Login</MenuItem>
//       )}
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalCloseButton />
//           <ModalBody>
//             <AdminLogin onClose={onClose} />
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </div>
//   );
// };
