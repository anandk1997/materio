'use client'
import Grid from '@mui/material/Grid'
import DatePickerWrapper from '@/@core/styles/libs/react-datepicker'
import FormLayoutsBasic from '@/views/form-layouts/FormLayoutsBasic'
import FormLayoutsIcons from '@/views/form-layouts/FormLayoutsIcons'
import FormLayoutsSeparator from '@/views/form-layouts/FormLayoutsSeparator'
import FormLayoutsAlignment from '@/views/form-layouts/FormLayoutsAlignment'
import 'react-datepicker/dist/react-datepicker.css'
import { useSetLoading } from '@/@core/context/LoadingContext'

const FormLayouts = () => {
  useSetLoading()

  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <FormLayoutsBasic />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormLayoutsIcons />
        </Grid>
        <Grid item xs={12}>
          <FormLayoutsSeparator />
        </Grid>
        <Grid item xs={12}>
          <FormLayoutsAlignment />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
