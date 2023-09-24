'use client'

import { ChangeEvent, MouseEvent, ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
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
import { ErrorResponse, Signin, SuccessResponse } from '@/types/auth'
import { toast } from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { signIn } from '@/api/auth'
import Buttons from '@/@core/components/Buttons'
import { MaterioIcon } from '@/@core/Icons'
import { useLoadingContext } from '@/@core/context/LoadingContext'

const LoginPage = () => {
  const { setLoading } = useLoadingContext()
  const theme = useTheme()
  const router = useRouter()
  const [values, setValues] = useState<Signin>({
    userId: '',
    password: '',
  })

  const handleChange = (prop: keyof Signin) => (event: ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [prop]: event.target.value })

  const { isLoading, mutate } = useMutation((data: Signin) => signIn(data), {
    onError: (e: ErrorResponse) =>
      toast.error(e.response.data.statusMessage ?? 'Some Error!'),
    onSuccess: (e: SuccessResponse) => {
      toast.success(e.data.statusMessage ?? 'Success')
      localStorage.setItem('usertoken', e.data.data.token ?? '')
      router.push('/')
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(values)
  }

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading, setLoading])

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
              Welcome to {themeConfig.templateName}! 👋🏻
            </Typography>
            <Typography variant='body2'>
              Please sign-in to your account and start the adventure
            </Typography>
          </Box>

          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
              autoFocus
              fullWidth
              id='userId'
              label='User ID'
              value={values.userId}
              onChange={handleChange('userId')}
              sx={{ marginBottom: 4 }}
            />

            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'>Password</InputLabel>
              <OutlinedInput
                label='Password'
                value={values.password}
                id='auth-login-password'
                onChange={handleChange('password')}
                type={'password'}
              />
            </FormControl>

            <Box
              sx={{
                mb: 4,
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              <FormControlLabel control={<Checkbox />} label='Remember Me' />
              <Link
                passHref
                href='/'
                className='text-decoration-none'
                onClick={() => setLoading(true)}
              >
                <LinkStyled>Forgot Password?</LinkStyled>
              </Link>
            </Box>

            <Buttons
              fullWidth
              size='large'
              type='submit'
              variant='contained'
              loading={isLoading}
              sx={{ marginBottom: 7 }}
            >
              Login
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
                New on our platform?
              </Typography>
              <Typography variant='body2'>
                <Link
                  passHref
                  href='/register'
                  className='text-decoration-none'
                  onClick={() => setLoading(true)}
                >
                  <LinkStyled>Create an account</LinkStyled>
                </Link>
              </Typography>
            </Box>
            <Divider sx={{ my: 5 }}>or</Divider>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Link href='/' passHref>
                <IconButton
                  component='span'
                  onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                >
                  <Facebook sx={{ color: '#497ce2' }} />
                </IconButton>
              </Link>
              <Link href='/' passHref>
                <IconButton
                  component='span'
                  onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                >
                  <Twitter sx={{ color: '#1da1f2' }} />
                </IconButton>
              </Link>
              <Link href='/' passHref>
                <IconButton
                  component='span'
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
                  component='span'
                  onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                >
                  <Google sx={{ color: '#db4437' }} />
                </IconButton>
              </Link>
            </Box>
          </form>
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginPage

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' },
}))

const LinkStyled = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main,
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    '& .MuiFormControlLabel-label': {
      fontSize: '0.875rem',
      color: theme.palette.text.secondary,
    },
  })
)
