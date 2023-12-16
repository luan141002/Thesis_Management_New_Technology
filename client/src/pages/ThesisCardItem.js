import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom';

const ThesisCardItem = ({ item }) => {

  const navigate = useNavigate();

  const handlieClick = (id) => {
    console.log(id);
    navigate(`${id}`);
  }

  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            height: 200,
            mb: 2,
          }}
        >
          <img src="https://i.postimg.cc/3rnLfY4Y/download.png" width={300} height={300} alt={item.title} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h4" 
          sx={{ fontSize: '1.4rem', '&:hover': { cursor:"pointer" }, }} 
          onClick={()=>handlieClick(item._id)}>
            {item.title}
          </Typography>
          <Typography sx={{ mt: 2, color: 'text.secondary' }}>{item.authors.length > 0 ? item.authors[0].firstName:"chưa có tác giả"}</Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }}>{item.adviser.firstName}</Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
            {item.description}
          </Typography>
          <Box sx={{ '& img': { height: 26 } }}>

            <Typography>{item.major.name}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default ThesisCardItem