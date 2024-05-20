import { AppBar, Toolbar, Typography, Link as MuiLink } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom'
const Header = () => {
    return ( 
        <>
        <AppBar position='static' style={{backgroundColor: grey[900]}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link style={{textDecoration: 'none', color: 'white'}} to={'/'}>
                    JOBS
                </Link>
                </Typography>
                <MuiLink component={Link} to={'/'} color="inherit">Home</MuiLink>
                <MuiLink component={Link} to={'/contact'} color="inherit">Contact</MuiLink>
                <MuiLink component={Link} to={'/jobs'} color="inherit">Jobs</MuiLink>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Header 