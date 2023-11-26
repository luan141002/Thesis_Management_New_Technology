import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import {IconButton} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import authService from '../services/authServices';
import { ArrowBackIos } from '@mui/icons-material';


export default function RegisterAccount() {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/login');
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = {
            email: formData.get('email'),
            password:  formData.get('password'),
        };
        const isSignedIn = await authService.signIn(data);
        if (isSignedIn) {
            console.log(isSignedIn);
            localStorage.setItem('token', JSON.stringify(isSignedIn))
            navigate('/');
        }
        else {
            alert('Sai tài khoản hoặc mật khẩu!');
        }
        
    };

  return (
      <Grid container component="main" sx={{ height: '100vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" >
              Reigster Account
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="first-name"
                label="First Name"
                name="first-name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="last-name"
                label="Last Name"
                name="last-name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reigster
              </Button>
              <Grid container>
                <Grid item xs>
                  <Box>
                    
                    <Link href="/login" variant="body2">
                        Have An Account? 
                    </Link>
                  </Box>
                </Grid>
                
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}