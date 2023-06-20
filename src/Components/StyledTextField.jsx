import { ErrorOutline } from '@mui/icons-material';
import { Box, TextField, Typography } from '@mui/material';

export const StyledTextField = ({ formik, name, type, label, placeholder }) => {
  return (
    <Box>
      <Typography
        color={formik.touched[name] && formik.errors[name] ? 'error' : 'main'}
        sx={{
          pb: 0.2
        }}>
        {label}
      </Typography>

      <TextField
        multiline={Boolean(name === 'message' && true)}
        minRows={4}
        maxRows={10}
        variant='outlined'
        type={type}
        name={name}
        value={formik.values[name]}
        // placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched[name] && formik.errors[name])}
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            input: {
              color: 'light',
              background: (theme) => theme.palette.mainDark1,
              borderRadius: '5px',
              backdropFilter: 'blur(5px)',
              WebkitBackdropFilter: 'blur(5px)',
              '&:-webkit-autofill': {
                WebkitBoxShadow: '0 0 0 1000px #2c3a3b inset',
                WebkitTextFillColor: (theme) => theme.palette.light,
                caretColor: (theme) => theme.palette.light
              }
            },
            '& fieldset': {},
            '&:hover:not(.Mui-error) fieldset ': {
              borderColor: 'main',
              borderWidth: '2px'
            },
            '&.Mui-focused:not(.Mui-error) fieldset': {
              borderColor: 'main',
              borderWidth: '2px'
            },
            '&.Mui-error fieldset': {
              borderColor: 'error',
              borderWidth: '2px'
            }
          },
          '& .MuiInputBase-multiline': {
            // display: 'flex',
            // minHeight: '200px',
            flex: 1,
            background: (theme) => theme.palette.mainDark1,
            textArea: {
              color: (theme) => theme.palette.light,
              borderRadius: '5px',
              '& fieldset': {
                color: 'light'
              }
            },
            '&:hover:not(.Mui-error) fieldset ': {
              borderColor: 'main',
              borderWidth: '2px'
            },
            '&.Mui-focused:not(.Mui-error) fieldset': {
              borderColor: 'main',
              borderWidth: '2px'
            },
            '&.Mui-error fieldset': {
              borderColor: 'error',
              borderWidth: '2px'
            }
          }
        }}
      />

      {formik.touched[name] && formik.errors[name] && (
        <Typography
          variant='caption'
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            height: 'min-content',
            color: 'error.main',
            pt: 0.4
          }}>
          <ErrorOutline sx={{ height: '16px', width: '16px' }} />
          {formik.touched[name] && formik.errors[name]}
        </Typography>
      )}
    </Box>
  );
};

// export const StyledMultiTextField = ({
//   formik,
//   name,
//   type,
//   label,
//   placeholder
// }) => {
//   return (
//     <Box>
//       <Typography
//         color={formik.touched[name] && formik.errors[name] ? 'error' : 'main'}>
//         {label}
//       </Typography>

//       <TextField
//         // fullWidth
//         multiline
//         minRows={4}
//         variant='outlined'
//         type={type}
//         name={name}
//         value={formik.values[name]}
//         placeholder={placeholder}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         error={Boolean(formik.touched[name] && formik.errors[name])}
//         sx={{
//           '& .MuiInputBase-multiline': {
//             background: (theme) => theme.palette.mainDark1,
//             textArea: {
//               color: (theme) => theme.palette.light,
//               borderRadius: '5px',
//               '& fieldset': {
//                 color: 'light'
//               }
//             },
//             '&:hover:not(.Mui-error) fieldset ': {
//               borderColor: 'main',
//               borderWidth: '2px'
//             },
//             '&.Mui-focused:not(.Mui-error) fieldset': {
//               borderColor: 'main',
//               borderWidth: '2px'
//             },
//             '&.Mui-error fieldset': {
//               borderColor: 'error',
//               borderWidth: '2px'
//             }
//           }
//         }}
//       />

//       {formik.touched[name] && formik.errors[name] && (
//         <Typography
//           variant='caption'
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '5px',
//             height: 'min-content',
//             color: 'error.main'
//           }}>
//           <ErrorOutline sx={{ height: '16px', width: '16px' }} />
//           {formik.touched[name] && formik.errors[name]}
//         </Typography>
//       )}
//     </Box>
//   );
// };
