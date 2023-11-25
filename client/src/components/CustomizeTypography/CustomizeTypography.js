import { Typography, styled } from '@mui/material';

const CustomizeTypography = styled(Typography)(({ fontSize, fontWeight }) => ({
    fontSize: fontSize || '14px',
    fontWeight: fontWeight || 'normal',
}));

export default CustomizeTypography;
