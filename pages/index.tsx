import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Grid, Skeleton, Container } from '@mantine/core';
import { MainHero } from './components/MainHero';

const inter = Inter({ subsets: ['latin'] })

const child = <Skeleton height={140} radius="md" animate={false} />;


export default function Home() {
  return (
    <>
     <MainHero/>
    <Container my="md">
      
    <Grid>
     
      <Grid.Col xs={4}> An ebike will become your primary form of transport and you'll wonder how you lived without it. Life is just so much easier when you own one. In the long run you'll save buckets of money when compared to car ownership, taxis or public transport. No more time wasted sitting in bumper to bumper traffic either.</Grid.Col>
      <Grid.Col xs={8}>{child}</Grid.Col>
      <Grid.Col xs={8}>{child}</Grid.Col>
      <Grid.Col xs={4}>{child}</Grid.Col>
      <Grid.Col xs={3}>{child}</Grid.Col>
      <Grid.Col xs={3}>{child}</Grid.Col>
      <Grid.Col xs={6}>{child}</Grid.Col>
      <Grid.Col xs={4}> An ebike will become your primary form of transport and you'll wonder how you lived without it. Life is just so much easier when you own one. In the long run you'll save buckets of money when compared to car ownership, taxis or public transport. No more time wasted sitting in bumper to bumper traffic either.</Grid.Col>
      <Grid.Col xs={8}>{child}</Grid.Col>
      <Grid.Col xs={8}>{child}</Grid.Col>
      <Grid.Col xs={4}>{child}</Grid.Col>
      <Grid.Col xs={3}>{child}</Grid.Col>
      <Grid.Col xs={3}>{child}</Grid.Col>
      <Grid.Col xs={6}>{child}</Grid.Col>
      <Grid.Col xs={4}> An ebike will become your primary form of transport and you'll wonder how you lived without it. Life is just so much easier when you own one. In the long run you'll save buckets of money when compared to car ownership, taxis or public transport. No more time wasted sitting in bumper to bumper traffic either.</Grid.Col>
      <Grid.Col xs={8}>{child}</Grid.Col>
      <Grid.Col xs={8}>{child}</Grid.Col>
      <Grid.Col xs={4}>{child}</Grid.Col>
      <Grid.Col xs={3}>{child}</Grid.Col>
      <Grid.Col xs={3}>{child}</Grid.Col>
      <Grid.Col xs={6}>{child}</Grid.Col>
      <Grid.Col xs={4}> An ebike will become your primary form of transport and you'll wonder how you lived without it. Life is just so much easier when you own one. In the long run you'll save buckets of money when compared to car ownership, taxis or public transport. No more time wasted sitting in bumper to bumper traffic either.</Grid.Col>
      <Grid.Col xs={8}>{child}</Grid.Col>
      <Grid.Col xs={8}>{child}</Grid.Col>
      <Grid.Col xs={4}>{child}</Grid.Col>
      <Grid.Col xs={3}>{child}</Grid.Col>
      <Grid.Col xs={3}>{child}</Grid.Col>
      <Grid.Col xs={6}>{child}</Grid.Col>
    </Grid>
  </Container>
    </>

  )
}
