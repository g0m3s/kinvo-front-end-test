import { Header } from '../Header'
import { Home } from '../../views/Home'
import { Grid, Stack } from '@mui/material'

export const ApplicationShell: React.FC = () => {

  return (
    <Stack
      sx={{
        width: '100vw',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Header />
      <Grid
        flex={1}
        container
        direction='row'
        bgcolor='grey.50'
      >
        <Grid
          item
          xs={2}
          padding={2}
          bgcolor='primary.main'
        >
          <div>sidebar</div>
        </Grid>
        <Grid item xs={10} padding={2}>
          <Home />
        </Grid>
      </Grid>
    </Stack>
  )
}
