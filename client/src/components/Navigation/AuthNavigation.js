import React from 'react'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'

function AuthNavigation() {
    const navigate = useNavigate()
    const handleSignIn = () => {
        navigate('/login')
    }
    return (
        <Box sx={{ '& button:first-child': { mr: 2 } }}>
        <Button disableHoverEffect={true} variant="outlined" onClick={handleSignIn}>
            Sign In
        </Button>
        <Button disableHoverEffect={true}>Sign Up</Button>
        </Box>
    )
}

export default AuthNavigation