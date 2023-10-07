import {
  Box,
  Button,
  IconButton,
  Snackbar,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useWindowSize } from '../Utilities/useWindowSize';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { StyledTextField } from '../Components/StyledTextField';
import { db } from '../Utilities/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState, useRef } from 'react';
import { Email, GitHub, LinkedIn, Place } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import Footer from './Footer';

export const contactFormSchema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  message: yup.string().required('Required'),
});

const Contact = () => {
  const mobile = useMediaQuery('(max-width:899px)');
  const smallerScreen = useMediaQuery('(max-width:1199px)');
  const windowSize = useWindowSize();
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useRef();

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const onSubmit = async (values, actions) => {
    setLoading(true);
    try {
      emailjs
        .sendForm(
          'service_uviq23i',
          'template_cumpkso',
          form.current,
          'L9wlVL63aq--1smer'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      await addDoc(collection(db, 'contacts'), {
        name: values.name,
        email: values.email,
        message: values.message,
        created: serverTimestamp(),
      });
      setLoading(false);
      setFormSubmitted(true);
      console.log('form submitted');
      actions.resetForm(values);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setFormSubmitted(false);
    }
    return false;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: contactFormSchema,
    onSubmit,
  });

  return (
    <Box
      sx={{
        p: {
          xs: '0px',
          sm: '40px 0px 0px 0px',
          md: '60px 40px 10px 20px',
        },
        height: { xs: '100%', sm: windowSize.height },
        display: smallerScreen && 'flex',
        flexDirection: smallerScreen && 'column',
        justifyContent: smallerScreen && 'space-between',
        // flex: 1
        // justifyContent: smallerScreen && 'flex-end'
      }}
    >
      <Typography
        sx={{
          fontSize: '42px',
          textAlign: 'center',
          color: 'light',
          pb: smallerScreen && 6,
        }}
      >
        Contact
      </Typography>

      <Box
        sx={{
          maxHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          // gap: 4,
          // flex: 1
          // justifyContent: smallerScreen && 'space-between'
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxHeight: '90%',
            minHeight: { xs: '450px', lg: '85vh' },
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            justifyContent: { xs: 'flex-start', sm: 'center' },
            gap: { xs: 4, sm: 4 },
            pt: { xs: 5, sm: 0, md: 0 },
            // overflow: 'hidden'
            // flex: 1
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', lg: '50%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: { xs: 'center', lg: 'space-around' },
              gap: { xs: 3, lg: 3 },
              // height: '100%',
              minHeight: { lg: '280px' },
              maxHeight: { lg: '350px' },
              pb: { lg: 5 },
              // flex: 1
            }}
          >
            <Box
              sx={{
                // height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', lg: '' },
                justifyContent: { lg: 'center' },
                gap: 1,
                flex: smallerScreen && 1,
              }}
            >
              <Typography
                variant='h3'
                sx={{
                  fontSize: { xs: '18px', sm: '20px' },
                }}
              >
                Interested in working with me?
              </Typography>
              <Typography
                variant='h4'
                sx={{
                  fontSize: { xs: '18px', sm: '20px' },
                }}
              >
                Hit me up!
              </Typography>
            </Box>

            {!smallerScreen && (
              <Box
                sx={{
                  width: { lg: 'max-content' },
                  margin: { lg: '0 auto' },
                  // display: 'flex',
                  // flexDirection: 'column',
                  justifyContent: {
                    xs: 'space-between',
                    sm: 'space-around',
                    lg: 'center',
                  },
                  alignItems: { lg: 'center' },
                  flexDirection: { lg: 'column' },
                  gap: { lg: 3 },
                  flexWrap: 'wrap',
                }}
              >
                <Box
                  sx={{
                    minHeight: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    gap: { lg: 2 },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    <span>
                      {' '}
                      <Place
                        sx={{
                          fill: (theme) => theme.palette.light,
                        }}
                      />{' '}
                    </span>
                    <Typography
                      sx={{
                        ml: 1,
                        color: (theme) => theme.palette.light,
                        fontSize: { xs: '14px', sm: '16px' },
                      }}
                    >
                      Los Angeles, California
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      height: '100%',
                    }}
                  >
                    <span>
                      {' '}
                      <Email
                        sx={{
                          fill: (theme) => theme.palette.light,
                        }}
                      />{' '}
                    </span>
                    <Typography
                      sx={{
                        ml: 1,
                        color: (theme) => theme.palette.light,
                        fontSize: { xs: '14px', sm: '16px' },
                      }}
                    >
                      leahpavone@gmail.com
                    </Typography>
                  </Box>
                </Box>

                <Stack
                  direction={{ xs: 'column', lg: 'row' }}
                  sx={{
                    display: 'flex',
                    justifyContent: {
                      xs: 'center',
                      sm: 'center',
                      lg: 'center',
                    },
                    alignItems: 'center',
                    gap: { lg: 2 },
                    mt: { lg: 3 },
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
            )}
          </Box>

          <Box
            sx={{
              width: { xs: '100%', lg: '50%' },
              display: 'flex',
              alignItems: 'center',
              // backgroundColor: 'comp',
            }}
          >
            <Box
              component='form'
              onSubmit={formik.handleSubmit}
              ref={form}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: { xs: '', sm: 'center' },
                gap: 2,
                maxWidth: '600px',
                width: '100%',
                minWidth: { sm: '300px' },
                m: '0 auto',
                minHeight: 'max-content',
                height: '100%',
              }}
            >
              <StyledTextField
                formik={formik}
                type='text'
                name='name'
                label='Name'
                variant='outlined'
                value={formik.values.name}
                placeholder='Full Name'
                error={formik.errors.name && formik.touched.name}
              />
              <StyledTextField
                formik={formik}
                type='email'
                name='email'
                label='Email'
                variant='outlined'
                value={formik.values.email}
                placeholder='Email'
                error={formik.errors.email && formik.touched.email}
              />
              <StyledTextField
                formik={formik}
                type='text'
                name='message'
                label='Message'
                variant='outlined'
                value={formik.values.message}
                placeholder='Message'
                error={formik.errors.message && formik.touched.message}
              />

              <Box
                sx={{
                  display: 'flex',
                  height: '100%',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  onClick={handleClick({
                    vertical: 'top',
                    horizontal: 'right',
                  })}
                  disableRipple
                  variant='outlined'
                  type='submit'
                  disabled={formik.isSubmitting}
                  // disabled
                  size={mobile ? 'small' : 'large'}
                  sx={{
                    width: 'max-content',
                    alignSelf: 'flex-end',
                    borderColor: 'main',
                    lineHeight: { xs: '16px', sm: '28px' },
                    letterSpacing: { xs: 1, sm: 1.2 },
                    p: 1,
                    color: 'dark',
                    backgroundColor: 'main',
                    '&:hover': {
                      borderColor: (theme) => theme.palette.mainDark,
                      color: (theme) => theme.palette.light,
                      backgroundColor: (theme) => theme.palette.mainDark,
                    },
                    '&:disabled': {
                      backgroundColor: 'disabled',
                      color: 'light',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
              {formSubmitted && (
                <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  onClose={handleClose}
                  message='Message sent successfully!'
                  key={vertical + horizontal}
                  autoHideDuration={5000}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      {smallerScreen && (
        <Box
          sx={{
            // height: '100%',
            display: 'flex',
            // flex: 1,
            alignItems: 'flex-end',
          }}
        >
          <Footer />
        </Box>
      )}
      {/* <Box sx={{ bgcolor: 'lightgray', display: 'flex' }}>
          <Email
            fontSize='large'
            sx={{ color: (theme) => theme.palette.main }}
          />
          <Typography>main</Typography>
          <Email
            fontSize='large'
            sx={{ color: (theme) => theme.palette.darker }}
          />
          <Typography>darker</Typography>
          <Email
            fontSize='large'
            sx={{ color: (theme) => theme.palette.dark }}
          />{' '}
          <Typography>dark</Typography>
          <Email
            fontSize='large'
            sx={{ color: (theme) => theme.palette.light }}
          />{' '}
          <Typography>light</Typography>
        </Box> */}
    </Box>
  );
};

export default Contact;
