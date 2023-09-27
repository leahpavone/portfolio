import { Email, GitHub, LinkedIn, Phone } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { useWindowSize } from './Utilities/useWindowSize';

const InProgress = () => {
  return (
    <Box
      sx={{
        height: useWindowSize.height,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        // backgroundColor: 'dark',
        // color: 'main',
      }}
    >
      <Typography
        sx={{
          fontFamily: `'Montserrat', sans-serif`,
          fontSize: '64px',
        }}
      >
        Making some cool updates!
      </Typography>
      <Typography
        sx={{
          fontFamily: `'Montserrat', sans-serif`,
          fontSize: '20px',
        }}
      >
        If you have a project you would like to discuss, please get in touch!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <IconButton
          href='mailto:leahpavone@gmail.com'
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
          <Email
            fontSize='large'
            sx={{ color: (theme) => theme.palette.main }}
          />
        </IconButton>
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
          <LinkedIn
            fontSize='large'
            sx={{ color: (theme) => theme.palette.main }}
          />
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
          <GitHub
            fontSize='large'
            sx={{ color: (theme) => theme.palette.main }}
          />
        </IconButton>

        {/* <GitHub />
        <LinkedIn /> */}
      </Box>
    </Box>
  );
};

export default InProgress;
