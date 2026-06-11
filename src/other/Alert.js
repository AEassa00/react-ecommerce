import {Alert, AlertTitle } from '@mui/material'
import React from 'react'

function AlertAddToCart({massage}) {
  return (
    <div >
        <Alert variant='filled' severity='success'>
            <AlertTitle>Success</AlertTitle>
            This is success {massage}
        </Alert>
    </div>
  )
}

export default AlertAddToCart