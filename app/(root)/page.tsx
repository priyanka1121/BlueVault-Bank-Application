import HeaderBox from '@/components/HeaderBox'
import { TotalBalanceBox } from '@/components/ui/TotalBalanceBox';
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

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={125.78}
          
          />
        </header>
      </div>
    </section>
  )
}

export default home