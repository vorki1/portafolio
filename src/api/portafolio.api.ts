const API_URL =
  process.env.VUE_APP_API_URL
console.log(API_URL)

export async function obtenerPortfolio() {

  const response = await fetch(
    `${API_URL}?action=portfolio`
  )

  if (!response.ok) {

    throw new Error(
      'Error obteniendo portfolio'
    )
  }

  const json =
    await response.json()
  console.log(
      'DATA APPS SCRIPT:',
      json
    )
  return json.data
}