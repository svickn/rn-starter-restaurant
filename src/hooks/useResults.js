import React from 'react'
import yelp from '../api/yelp'

const statusOptions = {
  loading: 'loading',
  idle: 'idle',
  error: 'error',
}

export default () => {
  const [results, setResults] = React.useState([])
  const [error, setError] = React.useState()
  const [status, setStatus] = React.useState(statusOptions.loading)

  const searchApi = async searchTerm => {
    setStatus(statusOptions.loading)
    setError('')
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'baton rouge, la',
        },
      })

      setResults(response.data.businesses)
      setStatus(statusOptions.idle)
    } catch (error) {
      setError('Something went wrong!')
      setStatus(statusOptions.error)
    }
  }

  React.useEffect(() => {
    searchApi('')
  }, [])

  return {searchApi, results, status, error, statusOptions}
}
