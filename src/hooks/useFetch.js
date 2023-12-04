import { useEffect, useState } from 'react'

export default function useFetch(erase, setErase, textApi) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${textApi}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        setErase(false)
      })
  }, [textApi])

  return { data, loading, setLoading, setData }
}
