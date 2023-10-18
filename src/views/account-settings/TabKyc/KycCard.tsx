import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { IKycCard } from '@/types/accountSettings'
import Buttons from '@/@core/components/Buttons'
import { ImgStyled } from './TabKYC'

const KycCard = ({ imgSrc, loading, fileType }: IKycCard) => {
  return (
    <CardContent
      className='shadow-sm'
      sx={{
        marginTop: '1em',
        marginBottom: '3em',
      }}
    >
      <Grid container spacing={7}>
        <Grid className='flex justify-center' item sm={4} xs={12}>
          <ImgStyled src={imgSrc} alt='Profile Pic' width={100} height={100} />
        </Grid>

        <Grid item sm={4} xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
          <Box className='flex justify-center m-auto'>
            <Box>
              <input
                type='file'
                className='file-input file-input-bordered flex m-auto'
                style={{ maxWidth: '70%' }}
              />

              <Typography
                className='flex justify-center'
                variant='body2'
                sx={{ marginTop: 5 }}
              >
                {`Allowed PNG or JPEG. (${fileType})`}
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item className='flex justify-center m-auto' sm={4} xs={12}>
          <Buttons
            component='label'
            variant='contained'
            loading={loading}
            disabled={loading}
            htmlFor='account-settings-upload-image'
            sx={{ marginRight: 3.5, width: '50%' }}
          >
            Upload
          </Buttons>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default KycCard
