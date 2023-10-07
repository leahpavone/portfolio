import { Box, Grid, Typography } from '@mui/material';
import { useWindowSize } from '../Utilities/useWindowSize';
import {
  jsIcon,
  cssIcon,
  htmlIcon,
  githubIcon,
  reactIcon,
  nodeJSIcon,
  firebaseIcon,
  gcpIcon,
  expressJSIcon,
  // materialUIIcon,
  viteIcon,
} from '../Static/skill-icons';

const About = () => {
  const windowSize = useWindowSize();

  const skills = [
    { skill: 'JavaScript', icon: jsIcon },
    { skill: 'CSS', icon: cssIcon },
    { skill: 'HTML', icon: htmlIcon },
    { skill: 'React', icon: reactIcon },
    { skill: 'Vite', icon: viteIcon },
    { skill: 'NodeJS', icon: nodeJSIcon },
    { skill: 'ExpressJS', icon: expressJSIcon },
    { skill: 'Firebase', icon: firebaseIcon },
    { skill: 'GCP', icon: gcpIcon },
    // { skill: 'GitHub', icon: githubIcon },
    // { skill: 'MaterialUI', icon: materialUIIcon },
  ];

  return (
    <Box
      sx={{
        minHeight: windowSize.height,
        width: '100%',
        p: { xs: '0px 0px 60px 0px', sm: '20px 0px 60px 0px', md: '0px 60px' },

        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        sx={{
          fontSize: '42px',
          pb: 2,
          color: 'light',
          textAlign: 'center',
        }}
      >
        About
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          // justifyContent: { xs: 'space-evenly', xl: 'space-evenly' },
          // alignItems: mobile && 'center',
          // flexDirection: mobile ? 'column' : 'row',
          width: '100%',
          height: '100%',
          gap: 6,
          mt: { xs: '0px', md: '0px' },
          // mb: 'auto',
          flex: 1,
        }}
      >
        <Box
          sx={{
            // maxWidth: mobile ? '100%' : '50%',
            width: '100%',
            // height: '100%',
            // flex: '1 1 auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', sm: 'column' },
              // flexDirection: 'column',
              justifyContent: 'center',
              // flex: 1,
              gap: 2,
              backgroundColor: 'mainDark',
              p: 4,
              borderRadius: '5px',
            }}
          >
            <Typography
              sx={{
                fontSize: '18px',
                // width: { xs: '100%', md: '50%' },
                width: '100%',
              }}
            >
              Hey there, I'm Leah! I'm a <b>Full Stack Developer</b> with 2
              years of experience building beautiful and functional web
              applications. Some of my technical skills include proficiency in
              HTML, CSS, JavaScript, React, Firebase, and Node.js.
            </Typography>

            <Typography
              sx={{
                fontSize: '18px',
                // p: 2,
                // width: { xs: '100%', md: '50%' },
                width: '100%',
              }}
            >
              If you're interested in <b>working with me</b>, feel free to get
              in touch! I'm always open to meeting new people and exploring new
              opportunities.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 6,
            width: '100%',
            // minHeight: '100%'
          }}
        >
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontSize: '28px',
              pt: 2,
              alignSelf: 'center',
              color: (theme) => theme.palette.light,
              // textDecoration: 'underline'
            }}
          >
            Skills
          </Typography>
          <Grid
            container
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: { xs: 'space-evenly', sm: 'center' },
              columnGap: 1.5,
              rowGap: 1.5,
              height: '50%',
            }}
          >
            {skills.map((skill, index) => (
              <Grid
                item
                xs={4}
                sm={3}
                md={3}
                lg={3}
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.skill}
                  style={{ width: '50px', height: '50px' }}
                />
                <Typography
                  variant='caption'
                  sx={{
                    color: 'light',
                  }}
                >
                  {skill.skill}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
