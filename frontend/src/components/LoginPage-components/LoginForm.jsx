import { Box, Container, Paper, TextField, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react';

export default function LoginForm() {


  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = () => {

  }
  return (
    <Box
      sx={{
        flex: 1,
        alignSelf : 'stretch'
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "90%",
          padding: 2,
          margin: "60px auto 0 auto",
        }}
      >
        <Stack
        spacing={4}
          sx={{
            alignItems: "center",
          }}
        > 
          <Typography variant='h4'>Login Here !</Typography>
          <TextField label="Username" value={username} onChange={e => setUsername(e.target.value)} fullWidth />
          <TextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth />
          <Button onClick={handleSubmit}>Login</Button>
        </Stack>
        
      </Paper>
    </Box>
  );
}
