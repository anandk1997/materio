'use client'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
import TypographyTexts from '@/views/typography/TypographyTexts'
import TypographyHeadings from '@/views/typography/TypographyHeadings'
import { useSetLoading } from '@/@core/context/LoadingContext'

const TypographyPage = () => {
  useSetLoading()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <TypographyHeadings />
      </Grid>
      <Grid item xs={12}>
        <TypographyTexts />
      </Grid>
    </Grid>
  )
}

export default TypographyPage
