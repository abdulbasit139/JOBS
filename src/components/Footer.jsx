import { Box, Typography, Link as MuiLink, Divider } from '@mui/material';
import { grey } from '@mui/material/colors';

const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: 5, py: 3, textAlign: 'center', backgroundColor: grey[900] }}>
      <Typography variant="h6" component="div">
        JOBS
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <MuiLink href="/" sx={{ mx: 2 }}>HOME</MuiLink>
        <MuiLink href="/contact" sx={{ mx: 2 }}>Contact</MuiLink>
        <MuiLink href="/jobs" sx={{ mx: 2 }}>JOBS</MuiLink>
      </Box>
      <Divider sx={{ my: 3 }} />
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} JOBS. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;