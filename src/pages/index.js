import React from 'react'
import Hero from '../components/Hero'
import Jobs from '../components/Jobs'
import Layout from '../components/Layout'
import Services from '../components/Services'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
    </Layout>
  )
}
