import React from 'react'
import yelp from '../api/yelp'

const statusOptions = {
  loading: 'loading',
  idle: 'idle',
  error: 'error',
}

export default id => {
  const [result, setResult] = React.useState(null)
  const [error, setError] = React.useState()
  const [status, setStatus] = React.useState(statusOptions.loading)

  const query = async id => {
    setStatus(statusOptions.loading)
    setError('')
    try {
      const response = await yelp.get(`/${id}`)
      setResult(response.data)
      setStatus(statusOptions.idle)
    } catch (error) {
      setError('Something went wrong!')
      setStatus(statusOptions.error)
    }
  }

  React.useEffect(() => {
    query(id)
  }, [id])

  return [result, status, error, statusOptions]
}
