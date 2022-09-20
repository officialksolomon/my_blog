import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('An Error occured! Our Engineers are working to fix it')
        }
        let actualData = await response.json()
        setData(actualData)
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [url])

  return [data, loading, error]
}

export default useFetch