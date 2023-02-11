import React from 'react'
import { UserProvider } from '../components/comps/RefugeeContext'
import { Refugeeform } from '../components/comps/Refugeeform'

export const Home = () => {
  return (
    <div>
      <UserProvider value="Gowtham">
          <Refugeeform />
      </UserProvider>
    </div>
  )
}

//default Home