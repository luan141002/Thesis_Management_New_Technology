import React from 'react'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import FooterSectionTitle from './FooterSectionTitle'


export const headerNavigations  = [
    {
      label: 'Home',
      path: '/', 
    },
    {
      label: 'Theses',
      path: '/list-thesis',
    },
    {
      label: 'Faculty',
      path: '/list-faculty', 
    },
    {
      label: 'Instruction',
      path: '/instruction', 
    },
    {
      label: 'Notifications',
      path: '/notifications', 
    },
]


const pageMenu = headerNavigations

const companyMenu = [
  { label: 'Contact Us', path: '#' },
  { label: 'Privacy & Policy', path: '#' },
  { label: 'Term & Condition', path: '#' },
  { label: 'FAQ', path: '#' },
]


function NavigationItem ({ label, path }) {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

function FooterNavigation () {
  return (
    <Grid container spacing={2}>
      
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation