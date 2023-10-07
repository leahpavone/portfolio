import { LinkedIn, Menu } from '@mui/icons-material';
import {
  Box,
  Typography,
  List,
  IconButton,
  Drawer,
  Divider,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll/modules';
import lpWhite from '../Static/lp-white.png';
import { GitHub } from '@mui/icons-material';
import { useWindowSize } from '../Utilities/useWindowSize';

function DrawerNavigation(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;
  const windowSize = useWindowSize();

  const [links] = useState([
    { name: 'Projects', slug: 'projects' },
    { name: 'About', slug: 'about' },
    { name: 'Contact', slug: 'contact' },
  ]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeDrawer = () => {
    setMobileOpen(false);
  };

  const drawerWidth = '120px';

  const drawer = (
    <Box
      sx={{
        height: windowSize.height,
        width: drawerWidth,
        flex: 1,
        backgroundColor: 'darker',
        color: 'light',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        pt: 4,
        pb: 4,
        pl: { xs: 1, md: 2 },
        pr: { xs: 1, md: 0 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          maxHeight: '120px',
          maxWidth: '90px',
        }}
      >
        <img
          src={lpWhite}
          alt='lp logo'
          onClick={scroll.scrollToTop}
          style={{
            height: '100%',
            width: '100%',
            scrollBehavior: 'smooth',
          }}
        />
      </Box>

      <Divider />

      <List
        sx={{
          m: '0 auto',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
          flex: 1,
        }}
      >
        {links.map((link, index) => {
          return (
            <Link
              onClick={closeDrawer}
              key={index}
              to={link.slug}
              spy={true}
              smooth={true}
              duration={300}
            >
              <Box
                key={index}
                sx={{
                  cursor: 'pointer',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: 600,
                    WebkitTransition: 'all ease 0.3s',
                    MozTransition: 'all ease 0.3s',
                    transition: 'all ease 0.3s',
                    '&:hover': {
                      scale: '1.05',
                    },
                  }}
                >
                  {link.name}
                </Typography>
              </Box>
            </Link>
          );
        })}
      </List>

      <Divider />

      <Stack
        direction='row'
        sx={{
          height: 'max-content',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          width: 'max-content',
          m: '0 auto',
          pb: 10,
          '&:hover': { boxShadow: 'none' },
        }}
      >
        <IconButton
          href='https://www.linkedin.com/in/leahpavone/'
          target='_blank'
          sx={{
            height: 48,
            width: 48,
            p: 0,
            '&:hover': {
              transition: 'all 0.3s ease-in-out',
              backgroundColor: 'transparent',
              transform: 'translateY(-3px)',
            },
          }}
        >
          <LinkedIn fontSize='large' sx={{ color: '#fff6f6' }} />
        </IconButton>
        <IconButton
          href='https://github.com/leahpavone'
          target='_blank'
          sx={{
            height: 48,
            width: 48,
            p: 0,
            '&:hover': {
              transition: 'all 0.3s ease-in-out',
              backgroundColor: 'transparent',
              transform: 'translateY(-3px)',
            },
          }}
        >
          <GitHub fontSize='large' sx={{ color: '#fff6f6' }} />
        </IconButton>
      </Stack>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='start'
        onClick={handleDrawerToggle}
        sx={{
          ml: 2,
          mt: 2,
          display: { md: 'none' },
          position: 'fixed',
          backgroundColor: 'mainDark',
        }}
      >
        <Menu />
      </IconButton>

      <Box
        component='nav'
        sx={{
          width: { sm: '120px' },
          flexShrink: { sm: 0 },
        }}
        aria-label='navigation links'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 0,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              border: 0,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerNavigation;
