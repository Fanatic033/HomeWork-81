import {AppBar, styled, Toolbar, Typography} from '@mui/material';

const StyledLink = styled('h6')({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit',
  },
});

const Header = () => {
  return (
    <AppBar position="sticky" sx={{mb: 2}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
          <StyledLink>To Shrink URl</StyledLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
