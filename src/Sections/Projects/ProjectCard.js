import {
  Box,
  Button,
  CardMedia,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material';

const ProjectCard = ({ project }) => {
  const mobile = useMediaQuery('(max-width:899px)');

  return (
    <Paper
      sx={{
        background: (theme) => theme.palette.dark,
        borderRadius: '5px',
        p: 4,
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', lg: 'row' },
          gap: 4,
          alignItems: { xs: 'center', lg: 'flex-start' },
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', lg: 'flex-start' },
            width: '100%',
            minHeight: '275px',
            flex: 1,
            gap: 2,
          }}
        >
          <Typography
            component='h1'
            sx={{
              fontSize: { xs: '26px', sm: '30px' },
              fontWeight: 600,
              letterSpacing: 1,
              color: (theme) => theme.palette.main,
            }}
          >
            {project.name}
          </Typography>

          <Box
            sx={{
              fontSize: { md: '20px', lg: '24px' },
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            {project.madeWith.map((tool, index) => (
              <Typography
                key={index}
                sx={{
                  backgroundColor: 'mainDark',
                  // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  p: '8px 12px',
                  borderRadius: '5px',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  fontSize: '14px',
                  letterSpacing: 0.8,
                  lineHeight: '100%',
                }}
              >
                {tool}
              </Typography>
            ))}
          </Box>

          <Box>
            <Typography
              sx={{
                color: 'main',
              }}
            >
              {project.description}
            </Typography>
          </Box>

          <Box
            sx={{
              height: '100%',
              display: 'flex',
              gap: 1,
              alignItems: 'flex-end',
              flex: 1,
            }}
          >
            {project.liveSite !== '' && (
              <Button
                variant='outlined'
                href={project.liveSite}
                target='_blank'
                size={mobile ? 'small' : 'large'}
                sx={{
                  lineHeight: { xs: '16px', sm: '28px' },
                  letterSpacing: { xs: 1, sm: 1.2 },
                  p: 1,
                  color: 'darker',
                  borderColor: 'main',
                  backgroundColor: 'main',
                  '&:hover': {
                    borderColor: (theme) => theme.palette.mainDark,
                    backgroundColor: (theme) => theme.palette.mainDark,
                    color: (theme) => theme.palette.main,
                    // borderColor: (theme) => theme.palette.light,
                    // backgroundColor: (theme) => theme.palette.darker,
                  },
                }}
              >
                Live Site
              </Button>
            )}
            {project.githubRepo !== '' && (
              <Button
                variant='outlined'
                href={project.githubRepo}
                target='_blank'
                size={mobile ? 'small' : 'large'}
                sx={{
                  lineHeight: { xs: '16px', sm: '28px' },
                  letterSpacing: { xs: 1, sm: 1.2 },
                  p: 1,
                  color: 'darker',
                  borderColor: 'main',
                  backgroundColor: 'main',
                  '&:hover': {
                    borderColor: (theme) => theme.palette.mainDark,
                    backgroundColor: (theme) => theme.palette.mainDark,
                    color: (theme) => theme.palette.main,
                    // borderColor: (theme) => theme.palette.light,
                    // backgroundColor: (theme) => theme.palette.darker,
                  },
                }}
              >
                Github Repo
              </Button>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            maxHeight: '100%',
            maxWidth: '500px',
          }}
        >
          <CardMedia
            component='video'
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
            src={project.media}
            sx={{
              height: '100%',
              width: '100%',
              borderRadius: '5px',
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default ProjectCard;
