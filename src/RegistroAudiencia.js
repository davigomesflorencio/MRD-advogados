import React from 'react';
import { Grid, FormControl, Input, InputLabel, Button } from '@material-ui/core';


function App() {
  return (

    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item={12}>

          <FormControl>
            <InputLabel htmlForm="data">Data</InputLabel>
            <Input id="data" />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlForm="descricao">Recomendação</InputLabel>
            <Input id="descricao" />
          </FormControl>
          <br />
          
          <Button color="primary">
            SALVAR
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
