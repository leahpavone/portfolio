import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';
import { Email, GitHub, LinkedIn, Place } from '@mui/icons-material';

const Footer = () => {
  const smallerScreen = useMediaQuery('(max-width:1199px)');

  return (
    smallerScreen && (
      <Box
        sx={{
          flex: 1
        }}>
        <Divider
          variant='fullWidth'
          sx={{
            borderTop: '1px solid white'
          }}
        />
        <Box
          sx={{
            pt: smallerScreen ? 2 : 0,
            width: { lg: 'max-content' },
            margin: { lg: '0 auto' },
            display: 'flex',
            justifyContent: {
              xs: 'center',
              sm: 'space-evenly',
              md: 'space-evenly'
            },
            alignItems: { xs: 'center' },
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1, sm: 3, md: 0 }
          }}>
          <Box
            sx={{
              minHeight: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: { xs: 'center', sm: 'flex-start' },
              gap: { xs: 1, sm: 1, md: 2 }
            }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%'
              }}>
              <span>
                {' '}
                <Place
                  sx={{
                    fill: (theme) => theme.palette.light
                  }}
                />{' '}
              </span>
              <Typography
                sx={{
                  ml: 1,
                  color: (theme) => theme.palette.light,
                  fontSize: { xs: '14px', sm: '16px' }
                }}>
                Los Angeles, California
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%'
              }}>
              <span>
                {' '}
                <Email
                  sx={{
                    fill: (theme) => theme.palette.light
                  }}
                />{' '}
              </span>
              <Typography
                sx={{
                  ml: 1,
                  color: (theme) => theme.palette.light,
                  fontSize: { xs: '14px', sm: '16px' }
                }}>
                leahpavone@gmail.com
              </Typography>
            </Box>
          </Box>

          <Stack
            direction={{ xs: 'row', sm: 'row' }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: { xs: 1, sm: 2 },
              '&:hover': { boxShadow: 'none' }
            }}>
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
                  transform: 'translateY(-3px)'
                }
              }}>
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
                  transform: 'translateY(-3px)'
                }
              }}>
              <GitHub fontSize='large' sx={{ color: '#fff6f6' }} />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    )
  );
};

export default Footer;
