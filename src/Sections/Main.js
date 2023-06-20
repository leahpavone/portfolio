import { Box, Button, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../index.css';
import LeahPhoto from '../Static/leahpavone-square.jpeg';
import { useWindowSize } from '../Utilities/useWindowSize';
import resume from '../Static/resume/resume.pdf';

const Main = () => {
  const mobile = useMediaQuery('(max-width:899px)');
  const windowSize = useWindowSize();

  return (
    <Box
      sx={{
        height: windowSize.height,
        width: '100%',
        // pb: { xs: '80px', lg: 0 }
        p: { xs: '0px 0px 60px 0px', md: '60px' }
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-evenly' },
          alignItems: 'center',
          flexDirection: { xs: 'column', lg: 'row' },
          height: '100%',
          pb: { md: '60px' },
          gap: { xs: 8, md: 2 }
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', lg: 'flex-start' },
            gap: 2
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', lg: 'flex-start' },
              gap: 2
            }}>
            <Typography
              sx={{
                fontSize: { xs: '40px', sm: '52px', md: '72px', lg: '86px' },
                fontWeight: 700,
                lineHeight: '95%',
                textAlign: 'center'
              }}>
              Leah Pavone
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '24px', sm: '42px', md: '52px', lg: '52px' },
                fontWeight: 700,
                lineHeight: '95%',
                textAlign: 'center'
              }}>
              Full Stack Developer
            </Typography>
          </Box>

          <Box
            sx={{
              pt: { xs: 2, sm: 4 },
              width: '100%'
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: { sm: 'space-evenly' },
                gap: { xs: 2, sm: 4 }
              }}>
              <Button
                variant='outlined'
                href='mailto:leahpavone@gmail.com'
                target='_blank'
                size={mobile ? 'small' : 'large'}
                sx={{
                  borderColor: 'light',
                  lineHeight: { xs: '16px', sm: '28px' },
                  letterSpacing: { xs: 1, sm: 1.2 },
                  p: 1,
                  color: 'light',
                  '&:hover': {
                    borderColor: (theme) => theme.palette.main,
                    color: (theme) => theme.palette.main
                  }
                }}>
                Get in Touch
              </Button>
              <Button
                variant='outlined'
                href={resume}
                target='_blank'
                size={mobile ? 'small' : 'large'}
                sx={{
                  borderColor: 'light',
                  lineHeight: { xs: '16px', sm: '28px' },
                  letterSpacing: { xs: 1, sm: 1.2 },
                  p: 1,
                  color: 'light',
                  '&:hover': {
                    borderColor: (theme) => theme.palette.main,
                    color: (theme) => theme.palette.main
                  }
                }}>
                View my Resume
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            maxHeight: { xs: '250px', sm: '350px', md: '400px' },
            maxWidth: { xs: '250px', sm: '350px', md: '400px' },
            // width: '100%',
            // height: '100%',
            flex: 1
          }}>
          <img
            src={LeahPhoto}
            alt='avatar'
            style={{
              maxHeight: '100%',
              width: '100%',
              borderRadius: '50%'
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
