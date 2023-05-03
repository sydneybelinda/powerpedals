import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Grid, Skeleton, Container } from '@mantine/core';
import { MainHero } from './components/MainHero';
import { ShoppingCart } from './components/ShoppingCart';
import { PageHero } from './components/PageHero';

const inter = Inter({ subsets: ['latin'] })

const child = <Skeleton height={140} radius="md" animate={false} />;

const heading = {
    ha: "Shopping",
    hb: "Cart",
    sub: "Purchase Items in your cart"

}


export default function Cart() {
  return (
    <>
    <PageHero heading={heading}/>

    <Container my="md">
    <ShoppingCart/>

  </Container>
    </>

  )
}
