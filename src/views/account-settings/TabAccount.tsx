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
import { editProfile, uploadPic } from '@/api/accountSettings'
import { AccountSettings, SuccessResponse } from '@/types/accountSettings'
import Buttons from '@/@core/components/Buttons'
import Image from 'next/image'
import { useIsLoading } from '@/@core/context/LoadingContext'

const init = {
  name: '',
  email: '',
  phone: '',
  country: '',
  // status: '',
  state: '',
}

const TabAccount = () => {
  const [imgSrc, setImgSrc] = useState<string>('/images/avatars/1.png')
  const [values, setValues] = useState<AccountSettings>(init)

  const { isLoading, mutate } = useMutation(editProfile, {
    onError: (e: ErrorResponse) =>
      toast.error(e.response.data.statusMessage ?? 'Some Error!'),
    onSuccess: (e: SuccessResponse) => {
      toast.success(e.data.statusMessage ?? 'Success')
    },
  })

  const { isLoading: uploadLoading, mutate: uploadMutate } = useMutation(uploadPic, {
    onError: (e: ErrorResponse) =>
      toast.error(e.response.data.statusMessage ?? 'Some Error!'),
    onSuccess: (e: SuccessResponse) => {
      toast.success(e.data.statusMessage ?? 'Success')
    },
  })

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

  const onChangeUpload = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const formData = new FormData()

    const file = e.target.files?.[0]
    if (file) {
      formData.append('file', file, file.name)
      uploadMutate(formData)
    }
  }

  useIsLoading(isLoading || uploadLoading)

  return (
    <CardContent>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' width={100} height={100} />

              <Box>
                <Buttons
                  component='label'
                  variant='contained'
                  loading={uploadLoading}
                  disabled={uploadLoading}
                  htmlFor='account-settings-upload-image'
                  sx={{ marginRight: 3.5 }}
                >
                  Upload New Photo
                  <input
                    hidden
                    type='file'
                    onChange={onChangeUpload}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </Buttons>

                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  Allowed PNG or JPEG.
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
              value={values.phone}
              onChange={handleChange('phone')}
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
                <MenuItem value='India'>India</MenuItem>
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
                // value={values.status}
                // onChange={handleChange('status')}
                value={values.state}
                onChange={handleChange('state')}
              >
                <MenuItem value='active'>Active</MenuItem>
                <MenuItem value='inactive'>Inactive</MenuItem>
                <MenuItem value='pending'>Pending</MenuItem>
              </Select>
            </FormControl>
          </Grid>

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
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount

const ImgStyled = styled(Image)(({ theme }) => ({
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

// const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
//   marginLeft: theme.spacing(4.5),
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     marginLeft: 0,
//     textAlign: 'center',
//     marginTop: theme.spacing(4),
//   },
// }))
