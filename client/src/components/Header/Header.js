import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import  Navigation from '../Navigation/Navigation'
import AuthNavigation from '../Navigation/AuthNavigation'
import { useTheme } from '@mui/material/styles'
import { Menu, Close } from '@mui/icons-material'
import Logo from '../Logo/Logo'
import AuthUser from '../AuthUser/AuthUser'


// const Header =  () => {
//   const [visibleMenu, setVisibleMenu] = useState(false)
//   const { breakpoints } = useTheme()
//   const matchMobileView = useMediaQuery(breakpoints.down('md'))
//   const user = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')):  {};
//   return (
//     <Box sx={{ backgroundColor: 'background.paper' }}>
//       <Container sx={{ py: { xs: 2, md: 3 } }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <Logo variant="primary" />
//           <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
//             <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
//               <Menu />
//             </IconButton>
//           </Box>
//           <Box
//             sx={{
//               width: '100%',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'space-between',
//               flexDirection: { xs: 'column', md: 'row' },

//               transition: (theme) => theme.transitions.create(['top']),
//               ...(matchMobileView && {
//                 py: 6,
//                 backgroundColor: 'background.paper',
//                 zIndex: 'appBar',
//                 position: 'fixed',
//                 height: { xs: '100vh', md: 'auto' },
//                 top: visibleMenu ? 0 : '-120vh',
//                 left: 0,
//               }),
//             }}
//           >
//             <Box /> {/* Magic space */}
//             <Navigation />
//             {user? <AuthNavigation />:<AuthUser user={user}/>}
          
//             {visibleMenu && matchMobileView && (
//               <IconButton
//                 sx={{
//                   position: 'fixed',
//                   top: 10,
//                   right: 10,
//                 }}
//                 onClick={() => setVisibleMenu(!visibleMenu)}
//               >
//                 <Close />
//               </IconButton>
//             )}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   )
// }

// export default Header


const Header =  () => {
  const [visibleMenu, setVisibleMenu] = useState(false)
  const { breakpoints } = useTheme()
  const matchMobileView = useMediaQuery(breakpoints.down('md'))
  const user = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')):  {};
  return (
    <Box sx={{ backgroundColor: 'background.paper' }}>
      <Box>
          <img
            src={"https://online.hcmute.edu.vn/Portlets/UIS_MySpace/Images/SPKT.jpg"}
            width="100%"
          />
        </Box>
      <Box sx={{ py: { xs: 2, md: 3 }, backgroundColor:'#00558d'}}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', ml: 12, mr: 12 }}>
          <Logo variant="primary" />
          <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
            <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
              <Menu />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },

              transition: (theme) => theme.transitions.create(['top']),
              ...(matchMobileView && {
                py: 6,
                backgroundColor: 'background.paper',
                zIndex: 'appBar',
                position: 'fixed',
                height: { xs: '100vh', md: 'auto' },
                top: visibleMenu ? 0 : '-120vh',
                left: 0,
              }),
            }}
          >
            <Box /> {/* Magic space */}
            <Navigation />
            {user? <AuthNavigation />:<AuthUser user={user}/>}
          
            {visibleMenu && matchMobileView && (
              <IconButton
                sx={{
                  position: 'fixed',
                  top: 10,
                  right: 10,
                }}
                onClick={() => setVisibleMenu(!visibleMenu)}
              >
                <Close />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header



// image 
// https://online.hcmute.edu.vn/Portlets/UIS_MySpace/Images/SPKT.jpg