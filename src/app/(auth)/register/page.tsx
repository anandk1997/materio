'use client'
import { useState, Fragment, ChangeEvent, MouseEvent, ReactNode } from 'react'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import MuiFormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel'
import Google from 'mdi-material-ui/Google'
import Github from 'mdi-material-ui/Github'
import Twitter from 'mdi-material-ui/Twitter'
import Facebook from 'mdi-material-ui/Facebook'
import themeConfig from '@/configs/themeConfig'
import BlankLayout from '@/@core/layouts/BlankLayout'
import FooterIllustrationsV1 from '@/views/pages/auth/FooterIllustration'
import { toast } from 'react-hot-toast'
import { signUp } from '@/api/auth'
import { useMutation } from '@tanstack/react-query'
import { Signup, ErrorResponse, SuccessResponse } from '@/types/auth'
import Buttons from '@/@core/components/Buttons'
import { useRouter } from 'next/navigation'
import { MaterioIcon } from '@/@core/Icons'

const RegisterPage = () => {
  const theme = useTheme()
  const router = useRouter()
  const [values, setValues] = useState<Signup>({
    email: '',
    sponsorId: '',
    name: '',
  })

  const { isLoading, mutate } = useMutation((data: Signup) => signUp(data), {
    onError: (e: ErrorResponse) =>
      toast.error(e.response.data.statusMessage ?? 'Some Error!'),
    onSuccess: (e: SuccessResponse) => {
      toast.success(e.data.statusMessage ?? 'Registered Successfully')
      localStorage.setItem('usertoken', e.data.data.token ?? '')
      router.push('/')
    },
  })

  const handleChange = (prop: keyof Signup) => (e: ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [prop]: e.target.value })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(values)
  }

  return (
    <Box className='flex justify-center content-center align-items-center h-[100vh]'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box
            sx={{
              mb: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MaterioIcon {...{ theme }} />

            <Typography
              variant='h6'
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '1.5rem !important',
              }}
            >
              {themeConfig.templateName}
            </Typography>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5 }}>
              Adventure starts here 🚀
            </Typography>
            <Typography variant='body2'>
              Make your app management easy and fun!
            </Typography>
          </Box>

          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-register-password'>Name</InputLabel>
              <OutlinedInput
                label='Name'
                value={values.name}
                id='auth-register-password'
                onChange={handleChange('name')}
                sx={{ marginBottom: 4 }}
              />
            </FormControl>

            <TextField
              fullWidth
              type='email'
              label='Email'
              value={values.email}
              onChange={handleChange('email')}
              sx={{ marginBottom: 4 }}
            />

            <TextField
              autoFocus
              fullWidth
              id='sponsorId'
              label='Sponsor ID'
              value={values.sponsorId}
              onChange={handleChange('sponsorId')}
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Fragment>
                  <span>I agree to </span>
                  <Link href='/' passHref className='text-decoration-none'>
                    <LinkStyled
                      onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                    >
                      privacy policy & terms
                    </LinkStyled>
                  </Link>
                </Fragment>
              }
            />

            <Buttons
              fullWidth
              size='large'
              type='submit'
              variant='contained'
              loading={isLoading}
              disabled={isLoading}
              sx={{ marginBottom: 7, background: theme.palette.primary.main }}
            >
              Sign up
            </Buttons>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                Already have an account?
              </Typography>
              <Typography variant='body2'>
                <Link passHref href='/login' className='text-decoration-none'>
                  <LinkStyled className='text-decoration-none'>
                    Sign in instead
                  </LinkStyled>
                </Link>
              </Typography>
            </Box>

            <>
              {/* <Divider sx={{ my: 5 }}>or</Divider>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Link href='/' passHref>
                  <IconButton
                    component='a'
                    onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                  >
                    <Facebook sx={{ color: '#497ce2' }} />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton
                    component='a'
                    onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                  >
                    <Twitter sx={{ color: '#1da1f2' }} />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton
                    component='a'
                    onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                  >
                    <Github
                      sx={{
                        color: theme =>
                          theme.palette.mode === 'light'
                            ? '#272727'
                            : theme.palette.grey[300],
                      }}
                    />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton
                    component='a'
                    onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                  >
                    <Google sx={{ color: '#db4437' }} />
                  </IconButton>
                </Link>
              </Box> */}
            </>
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

RegisterPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterPage

const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' },
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main,
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(4),
    '& .MuiFormControlLabel-label': {
      fontSize: '0.875rem',
      color: theme.palette.text.secondary,
    },
  })
)
