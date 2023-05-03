import {
  createStyles,
  Title,
  Grid,
  Container,
  Accordion,
  ThemeIcon,
  MantineProvider,
  getStylesRef,
  rem,
} from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

import { CartItem } from './CartItem';
import { Estimate } from './Estimate';


const useStyles = createStyles((theme) => ({
  wrapper: {

  },


}));


export function ShoppingCart() {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <Grid>

          <Grid.Col xs={8}>
            <CartItem />
          </Grid.Col>
          <Grid.Col xs={4}>
            <Estimate/>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}


