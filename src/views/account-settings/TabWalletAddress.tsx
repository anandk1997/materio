import { ChangeEvent, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { SuccessResponse, WalletAddress } from '@/types/accountSettings'
import { useMutation } from '@tanstack/react-query'
import { ErrorResponse } from '@/types/auth'
import { useIsLoading } from '@/@core/context/LoadingContext'
import { toast } from 'react-hot-toast'
import { walletAddress } from '@/api/accountSettings'
import Buttons from '@/@core/components/Buttons'

const TabWalletAddress = () => {
  const [values, setValues] = useState<WalletAddress>({
    address: '',
    addressType: '',
  })

  const handleOnChange =
    (prop: keyof WalletAddress) => (e: ChangeEvent<HTMLInputElement>) =>
      setValues({ ...values, [prop]: e.target.value })

  const { isPending, mutate } = useMutation({
    mutationFn: walletAddress,
    onError: (e: ErrorResponse) =>
      toast.error(e.response.data.statusMessage ?? 'Some Error!'),
    onSuccess: (e: SuccessResponse) => toast.success(e.data.statusMessage ?? 'Success'),
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!values.address || !values.addressType) toast.error('All Fields Required')
    else mutate(values)
  }

  useIsLoading(isPending)

  return (
    <form onSubmit={handleSubmit}>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Grid container spacing={5}>
              <Grid item xs={12} sx={{ marginTop: 6 }}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-new-password'>Address</InputLabel>
                  <OutlinedInput
                    label='Address'
                    value={values.address}
                    id='account-settings-new-password'
                    onChange={handleOnChange('address')}
                  />
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor='account-settings-confirm-new-password'>
                    Address Type
                  </InputLabel>
                  <OutlinedInput
                    label='Address Type'
                    value={values.addressType}
                    id='account-settings-confirm-new-password'
                    onChange={handleOnChange('addressType')}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>

      <Divider sx={{ margin: 0 }} />

      <CardContent>
        <Box sx={{ mt: 11 }}>
          <Buttons
            type='submit'
            variant='contained'
            loading={isPending}
            disabled={isPending}
            sx={{ marginRight: 3.5 }}
          >
            Save Changes
          </Buttons>
        </Box>
      </CardContent>
    </form>
  )
}
export default TabWalletAddress
