import { Box, useMediaQuery } from '@mui/material';
import DrawerNavigation from './Components/DrawerNavigation';
import { About, Projects, Contact, Main } from './Sections';
import useScrollPosition from './Utilities/useScrollPosition';
import { useWindowSize } from './Utilities/useWindowSize';
import * as Scroll from 'react-scroll';
import { useEffect, useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Element } from 'react-scroll';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const windowSize = useWindowSize();
  const scroll = Scroll.animateScroll;
  const scrollPosition = useScrollPosition();
  const mobile = useMediaQuery('(max-width:899px)');

  const options = { duration: 1000 };

  const scrollToTop = () => {
    scroll.scrollToTop(options);
  };

  const scrollFromMain = () => {
    mobile ? scroll.scrollTo(890) : scroll.scrollTo(950);
  };

  useEffect(() => {
    if (loading || !windowSize.height) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [loading, windowSize]);

  return (
    <>
      <Box
        sx={{
          height: '100%',
          minHeight: windowSize.height,
          width: '100%',
          maxWidth: '100vw',
          backgroundColor: 'dark',
          color: 'main',
          overflow: 'hidden',
          fontFamily: `'Montserrat', sans-serif`
        }}>
        <DrawerNavigation loading={loading} />

        <Box
          sx={{
            flexGrow: 1,
            width: '100%',
            p: {
              xs: '40px',
              md: '40px 40px 40px 140px',
              xl: '60px 60px 60px 140px'
            }
          }}>
          <Element name='main' className='element'>
            <Main />
          </Element>
          <Element name='projects' className='element'>
            <Projects />
          </Element>
          <Element name='about' className='element'>
            <About />
          </Element>
          <Element name='contact' className='element'>
            <Contact />
          </Element>
        </Box>
      </Box>
      {scrollPosition > 0 && (
        <Box
          onClick={scrollToTop}
          sx={{
            cursor: 'pointer',
            position: 'fixed',
            bottom: { xs: 15, md: 20 },
            right: { xs: 15, md: 50 },
            height: '50px',
            width: '50px',
            backgroundColor: 'transparent',
            borderRadius: '50%',
            border: '3px solid #fff6f6',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow:
              '0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%)'
          }}>
          <KeyboardArrowUp fontSize='large' sx={{ color: '#fff6f6' }} />
        </Box>
      )}
      {scrollPosition < 10 && (
        <Box
          onClick={scrollFromMain}
          sx={{
            cursor: 'pointer',
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: {
              xs: 'translateX(-50%)',
              md: 'translateX(calc(-50% + 50px))',
              lg: 'translateX(-50%)'
            },
            height: '50px',
            width: '50px',
            backgroundColor: 'transparent',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <KeyboardArrowDown
            fontSize='large'
            sx={{ color: '#fff6f6', animation: 'jumpInfinite 1.5s infinite' }}
          />
        </Box>
      )}
    </>
  );
}

export default App;
