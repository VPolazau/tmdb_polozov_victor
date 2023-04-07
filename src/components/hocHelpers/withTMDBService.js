import React from 'react'

import { TMDBServiceConsumer } from '../ServiceContext'

const withTMDBService = () => Wrapped => {
  return props => {
    return (
      <TMDBServiceConsumer>
        {tmdbService => {
          return <Wrapped {...props} tmdbService={tmdbService} />
        }}
      </TMDBServiceConsumer>
    )
  }
}

export {withTMDBService}