import {Card,createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
}));

interface SwitchesCardProps {
  title: string;
  description: string;
  data: {
    title: string;
    description: string;
  }[];
}

export function Estimate({ title, description, data }: SwitchesCardProps) {
  const { classes } = useStyles();


  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
Blah
    </Card>
  );
}