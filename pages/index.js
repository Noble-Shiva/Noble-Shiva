import Head from 'next/head'
import Header from '../components/Header'
import Profile from '../components/Profile'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black bg-opacity-95 text-gray-100">
      <Head>
        <title>Your Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container mx-auto px-4 py-8 mt-24">
        <Profile />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}