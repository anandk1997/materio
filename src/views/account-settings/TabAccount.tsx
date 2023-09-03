import { useState, ElementType, ChangeEvent, SyntheticEvent } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button, { ButtonProps } from '@mui/material/Button'
import Close from 'mdi-material-ui/Close'
import { ErrorResponse } from '@/types/auth'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { editProfile } from '@/api/accountSettings'
import { AccountSettings, SuccessResponse } from '@/types/accountSettings'
import Buttons from '@/@core/components/Buttons'

const init = {
  name: '',
  email: '',
  contact: '',
  country: '',
  status: '',
}

const TabAccount = () => {
  const [openAlert, setOpenAlert] = useState<boolean>(true)
  const [imgSrc, setImgSrc] = useState<string>('/images/avatars/1.png')
  const [values, setValues] = useState<AccountSettings>(init)

  const { isLoading, mutate } = useMutation(
    (data: AccountSettings) => editProfile(data),
    {
      onError: (e: ErrorResponse) =>
        toast.error(e.response.data.statusMessage ?? 'Some Error!'),
      onSuccess: (e: SuccessResponse) => {
        toast.success(e.data.statusMessage ?? 'Success')
      },
    }
  )
  const handleChange =
    (prop: keyof AccountSettings) =>
    (
      e: SelectChangeEvent<string> | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>
      setValues({ ...values, [prop]: e.target.value })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(values)
  }

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(values)
  }

  const onChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)

      reader.readAsDataURL(files[0])
    }
  }

  return (
    <CardContent>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box>
                <ButtonStyled
                  component='label'
                  variant='contained'
                  htmlFor='account-settings-upload-image'
                >
                  Upload New Photo
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>

                <ResetButtonStyled
                  color='error'
                  variant='outlined'
                  onClick={() => setImgSrc('/images/avatars/1.png')}
                >
                  Reset
                </ResetButtonStyled>

                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG. Max size of 800K.
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Name'
              placeholder='Name'
              value={values.name}
              onChange={handleChange('name')}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='email'
              label='Email'
              placeholder='johnDoe@example.com'
              value={values.email}
              onChange={handleChange('email')}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='number'
              label='Contact Number'
              placeholder='Contact'
              value={values.contact}
              onChange={handleChange('contact')}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select
                label='Country'
                value={values.country}
                onChange={handleChange('country')}
              >
                <MenuItem value='admin'>Admin</MenuItem>
                <MenuItem value='author'>Author</MenuItem>
                <MenuItem value='editor'>Editor</MenuItem>
                <MenuItem value='maintainer'>Maintainer</MenuItem>
                <MenuItem value='subscriber'>Subscriber</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                label='Status'
                value={values.status}
                onChange={handleChange('status')}
              >
                <MenuItem value='active'>Active</MenuItem>
                <MenuItem value='inactive'>Inactive</MenuItem>
                <MenuItem value='pending'>Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {openAlert ? (
            <Grid item xs={12} sx={{ mb: 3 }}>
              <Alert
                severity='warning'
                sx={{ '& a': { fontWeight: 400 } }}
                action={
                  <IconButton
                    size='small'
                    color='inherit'
                    aria-label='close'
                    onClick={() => setOpenAlert(false)}
                  >
                    <Close fontSize='inherit' />
                  </IconButton>
                }
              >
                <AlertTitle>
                  Your email is not confirmed. Please check your inbox.
                </AlertTitle>
                <Link href='/' onClick={(e: SyntheticEvent) => e.preventDefault()}>
                  Resend Confirmation
                </Link>
              </Alert>
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <Buttons
              type='submit'
              variant='contained'
              loading={isLoading}
              disabled={isLoading}
              sx={{ marginRight: 3.5 }}
            >
              Save Changes
            </Buttons>

            <Button
              type='reset'
              variant='outlined'
              color='secondary'
              onClick={() => setValues(init)}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius,
}))

const ButtonStyled = styled(Button)<
  ButtonProps & { component?: ElementType; htmlFor?: string }
>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
  },
}))

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
}))
