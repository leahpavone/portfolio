import {
  Box,
  Button,
  IconButton,
  Snackbar,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';
import { useWindowSize } from '../Utilities/useWindowSize';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { StyledTextField } from '../Components/StyledTextField';
import { db } from '../Utilities/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState, useRef } from 'react';
import {
  Email,
  EmailOutlined,
  GitHub,
  LinkedIn,
  Place
} from '@mui/icons-material';
import emailjs from '@emailjs/browser';

export const contactFormSchema = yup.object().shape({
  name: yup.string().required('Required'),
  email: yup.string().email('Please enter a valid email').required('Required'),
  message: yup.string().required('Required')
});

const Contact = () => {
  const mobile = useMediaQuery('(max-width:899px)');
  const windowSize = useWindowSize();
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useRef();

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center'
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
        created: serverTimestamp()
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
      message: ''
    },
    validationSchema: contactFormSchema,
    onSubmit
  });

  return (
    <Box
      sx={{
        minHeight: { xs: '100%', sm: windowSize.height },
        width: '100%',
        p: { xs: '0px 0px 30px 0px', sm: '20px 0px 30px 0px', md: '60px' },
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Typography
        sx={{
          fontSize: '42px',
          textAlign: 'center',
          color: 'light',
          pb: 2
        }}>
        Contact
      </Typography>

      <Box
        sx={{
          width: '100%',
          // height: '100%',
          minHeight: '450px',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          justifyContent: { xs: 'flex-start', sm: 'center' },
          gap: { xs: 4, sm: 4 },
          pt: { xs: 5, sm: 3 },
          flex: { sm: 1 },
          overflow: 'hidden'
        }}>
        <Box
          sx={{
            width: { xs: '100%', lg: '50%' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: { xs: 3, lg: 0 },
            height: '100%',
            minHeight: { lg: '280px' }
          }}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', lg: '' },
              justifyContent: { lg: 'center' },
              gap: 1,
              flex: 1
            }}>
            <Typography
              variant='h3'
              sx={{
                // textAlign: 'center',
                fontSize: { xs: '18px', sm: '20px' }
              }}>
              Interested in working with me?
            </Typography>
            <Typography
              variant='h4'
              sx={{
                fontSize: { xs: '18px', sm: '20px' }
              }}>
              Hit me up!
            </Typography>
          </Box>

          <Box
            sx={{
              width: { lg: 'max-content' },
              margin: { lg: '0 auto' },
              display: 'flex',
              justifyContent: {
                xs: 'space-between',
                sm: 'space-around',
                lg: 'center'
              },
              alignItems: { lg: 'center' },
              flexDirection: { lg: 'column' },
              gap: { lg: 3 },
              flexWrap: 'wrap'
              // flex: { lg: 1 }
              // alignItems: 'space-between'
            }}>
            <Box
              sx={{
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: { lg: 2 }
                // alignItems: { lg: 'center' },
                // pt: 1,
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
              direction={{ xs: 'column', lg: 'row' }}
              sx={{
                display: 'flex',
                justifyContent: {
                  xs: 'center',
                  sm: 'center',
                  lg: 'center'
                },
                // ml: { lg: 3, xl: 0 },
                alignItems: 'center',
                gap: { lg: 2 },
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

        <Box
          sx={{
            width: { xs: '100%', lg: '50%' },
            display: 'flex',
            alignItems: 'center',
            minHeight: '100%'
          }}>
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
              // flex: 1,
              minHeight: 'max-content',
              height: '100%'
            }}>
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
                justifyContent: 'flex-end'
              }}>
              <Button
                onClick={handleClick({
                  vertical: 'top',
                  horizontal: 'right'
                })}
                disableRipple
                variant='outlined'
                type='submit'
                disabled={formik.isSubmitting}
                size={mobile ? 'small' : 'large'}
                sx={{
                  width: 'max-content',
                  alignSelf: 'flex-end',
                  borderColor: 'light',
                  lineHeight: { xs: '16px', sm: '28px' },
                  letterSpacing: { xs: 1, sm: 1.2 },
                  p: 1,
                  color: 'light',
                  '&:hover': {
                    borderColor: (theme) => theme.palette.main,
                    color: (theme) => theme.palette.main
                  },
                  '&:disabled': {
                    backgroundColor: 'mainDark2',
                    color: 'mainDark1'
                  }
                }}>
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
  );
};

export default Contact;
