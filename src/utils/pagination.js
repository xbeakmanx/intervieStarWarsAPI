export const handleNextPage = (setLoading, setData, data) => {
  setLoading(true)
  fetch(`${data.next}`)
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      setLoading(false)
    })
}
export const handlePrevPage = (setLoading, setData, data) => {
  setLoading(true)
  fetch(`${data.previous}`)
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      setLoading(false)
    })
}
