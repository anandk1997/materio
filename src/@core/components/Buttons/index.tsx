import { Spinner } from 'react-bootstrap'
import Button from '@mui/material/Button'
import React from 'react'
import { ButtonsProps } from '@/types/button'

const Buttons: React.FC<ButtonsProps> = ({ loading, disabled, children, ...props }) => (
  <Button disabled={disabled || loading} {...props}>
    {loading && (
      <Spinner
        style={{ position: 'absolute' }}
        animation='border'
        role='status'
        size='sm'
      >
        <span className='d-flex visually-hidden'>Loading...</span>
      </Spinner>
    )}
    <span className='d-flex' style={{ visibility: loading ? 'hidden' : 'visible' }}>
      {children}
    </span>
  </Button>
)

export default Buttons
