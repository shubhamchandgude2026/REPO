import { Avatar, Box, Button, Card, CardContent, Chip, Typography } from '@mui/material'

interface User {
  name: string,
  age: number,
  role: string,
  isActive?: boolean
}
const UserCard = ({ name, age, role, isActive }: User) => {
  const parts = name.split(' ');
  const alias: string = (parts[0]?.charAt(0) ?? '') + (parts[1]?.charAt(0) ?? '');
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      {
        isActive ??
        <Chip variant='filled' content='active' sx={{ backgroundColor: "green" }} />

      }
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Avatar sx={{ bgcolor: 'primary.main' }}>{alias}</Avatar>
          <Box>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2" color="text.secondary">{role}</Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary">Age: {age}</Typography>
        <Chip label="Active" color="success" size="small" sx={{ mt: 1 }} />
        <Button variant='contained'>Toggle Active</Button>
      </CardContent>
    </Card>
  )
}

export default UserCard