import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const home = () => {
  const loggedIn = {firstName: 'Priyanka'};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
          //Defining props for header box in first page/ home
            type = "greeting"
            title = "Welcome"
            user ={loggedIn?.firstName || 'Guest'}
            subtext = "Access and manage your account and transactions efficiently."
          />
        </header>
      </div>
    </section>
  )
}

export default home