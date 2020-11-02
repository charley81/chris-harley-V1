import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Services from '../components/Services'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  )
}
