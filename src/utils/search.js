export const handleSearchByName = (
  setLoading,
  value,
  setData,
  setActiveSearch
) => {
  setLoading(true)
  fetch(`https://swapi.dev/api/people?search=${value}`)
    .then((response) => response.json())
    .then((data) => {
      setData(data)
      setLoading(false)
      setActiveSearch(true)
    })
}
