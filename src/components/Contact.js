import React from 'react'
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  Typography
} from '@material-ui/core'

const Contact = (prop) => {
  return(
    <div
      style={{
        display:'flex',
        justifyContent: 'center',
        margin: 20,
        padding: 20

      }}
    >
      <form style={{width:'50%'}}>
        <Typography color='inherit' variant='title'>Contact Form</Typography>
        <FormControl margin='normal' fullWidth>
          <InputLabel htmlFor='name'>Name</InputLabel>
          <Input id='name' type='text' />
        </FormControl>
        <FormControl margin='normal' fullWidth>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input id='email' type='email' />
        </FormControl>
        <FormControl margin='normal' fullWidth>
          <InputLabel htmlFor='messages'>Message</InputLabel>
          <Input id='messages' multiline rows={10} />
        </FormControl>

        <Button variant='contained' color='primary' size='medium'>
          Send
        </Button>
      </form>
    </div>
  )
}

export default Contact