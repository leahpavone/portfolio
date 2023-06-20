import { Box, Typography, useMediaQuery } from '@mui/material';
import { useWindowSize } from '../../Utilities/useWindowSize';
import { ProjectData } from './ProjectData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const mobile = useMediaQuery('(max-width:899px)');
  const windowSize = useWindowSize();

  return (
    <Box
      sx={{
        minHeight: windowSize.height,
        width: '100%',
        height: '100%',
        // p: { xs: '0px', md: '60px' }
        p: { xs: '0px 0px 60px 0px', sm: '0px 0px 60px 0px', md: '60px' }
      }}>
      <Typography
        sx={{
          fontSize: '42px',
          pb: 4,
          color: 'light',
          textAlign: 'center'
        }}>
        Projects
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 4,
          height: '100%',
          width: '100%'
        }}>
        {ProjectData.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </Box>
    </Box>
  );
};

export default Projects;
