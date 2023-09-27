import { ChangeEvent, MouseEvent, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import KeyOutline from 'mdi-material-ui/KeyOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import Image from 'next/image'
import Buttons from '@/@core/components/Buttons'
import { ErrorResponse } from '@/types/auth'
import { SuccessResponse, UpdatePassword } from '@/types/accountSettings'
import { toast } from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'
import { updatePassword } from '@/api/accountSettings'
import { useIsLoading } from '@/@core/context/LoadingContext'

const TabSecurity = () => {
  // const [values, setValues] = useState<UpdatePassword>({
  //   newPassword: '',
  //   currentPassword: '',
  //   showNewPassword: false,
  //   confirmNewPassword: '',
  //   showCurrentPassword: false,
  //   showConfirmNewPassword: false,
  // })

  const [values, setValues] = useState<UpdatePassword>({
    oldPassword: '',
    password: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showCurrentPassword: false,
    showConfirmNewPassword: false,
  })

  const { isLoading, mutate } = useMutation(updatePassword, {
    onError: (e: ErrorResponse) =>
      toast.error(e.response.data.statusMessage ?? 'Some Error!'),
    onSuccess: (e: SuccessResponse) => {
      toast.success(e.data.statusMessage ?? 'Success')
    },
  })

  const handleOnChange =
    (prop: keyof UpdatePassword) => (event: ChangeEvent<HTMLInputElement>) =>
      setValues({ ...values, [prop]: event.target.value })

  const handleClickShowCurrentPassword = () =>
    setValues({ ...values, showCurrentPassword: !values.showCurrentPassword })

  const handleClickShowNewPassword = () =>
    setValues({ ...values, showNewPassword: !values.showNewPassword })

  const handleClickShowConfirmNewPassword = () =>
    setValues({
      ...values,
      showConfirmNewPassword: !values.showConfirmNewPassword,
    })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!values.oldPassword || !values.password)
      toast.error('Please Enter Required Fields')
    else
      mutate({
        oldPassword: values.oldPassword,
        password: values.password,
      })
  }

  useIsLoading(isLoading)

  return (
    <form onSubmit={handleSubmit}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={5}>
              <Grid item xs={12} sx={{ marginTop: 4.75 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-current-password'>
                    Current Password
                  </InputLabel>
                  <OutlinedInput
                    label='Current Password'
                    id='account-settings-current-password'
                    type={values.showCurrentPassword ? 'text' : 'password'}
                    // value={values.currentPassword}
                    // onChange={handleOnChange('currentPassword')}
                    value={values.oldPassword}
                    onChange={handleOnChange('oldPassword')}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          aria-label='toggle password visibility'
                          onClick={handleClickShowCurrentPassword}
                        >
                          {values.showCurrentPassword ? (
                            <EyeOutline />
                          ) : (
                            <EyeOffOutline />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12} sx={{ marginTop: 6 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-new-password'>
                    New Password
                  </InputLabel>
                  <OutlinedInput
                    label='New Password'
                    id='account-settings-new-password'
                    // value={values.newPassword}
                    // onChange={handleOnChange('newPassword')}
                    value={values.password}
                    onChange={handleOnChange('password')}
                    type={values.showNewPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          onClick={handleClickShowNewPassword}
                          aria-label='toggle password visibility'
                        >
                          {values.showNewPassword ? <EyeOutline /> : <EyeOffOutline />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-confirm-new-password'>
                    Confirm New Password
                  </InputLabel>
                  <OutlinedInput
                    label='Confirm New Password'
                    id='account-settings-confirm-new-password'
                    type={values.showConfirmNewPassword ? 'text' : 'password'}
                    // value={values.confirmNewPassword}
                    // onChange={handleOnChange('confirmNewPassword')}
                    value={values.password}
                    onChange={handleOnChange('password')}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          edge='end'
                          aria-label='toggle password visibility'
                          onClick={handleClickShowConfirmNewPassword}
                        >
                          {values.showConfirmNewPassword ? (
                            <EyeOutline />
                          ) : (
                            <EyeOffOutline />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            sm={6}
            xs={12}
            sx={{
              display: 'flex',
              marginTop: [7.5, 2.5],
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              width={183}
              alt='avatar'
              height={256}
              src='/images/pages/pose-m-1.png'
            />
          </Grid>
        </Grid>
      </CardContent>

      <Divider sx={{ margin: 0 }} />

      <CardContent>
        <Box sx={{ mt: 11 }}>
          <Buttons
            type='submit'
            variant='contained'
            loading={isLoading}
            disabled={isLoading}
            sx={{ marginRight: 3.5 }}
          >
            Save Changes
          </Buttons>
        </Box>
      </CardContent>
    </form>
  )
}
export default TabSecurity

// interface UpdatePassword {
//   newPassword: string
//   currentPassword: string
//   showNewPassword: boolean
//   confirmNewPassword: string
//   showCurrentPassword: boolean
//   showConfirmNewPassword: boolean
// }
