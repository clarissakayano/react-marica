export type CategoryType = {
  id: number
  label: string
}

export type AdressType = {
  enderecos: {
    id: number
    lng: number
    label: string | undefined
  }[]
}
export type CollectionType = {
  id: number
  nome: string | null
  capa: string | null
  lat: number | null
  lng: number | null
  endereco: AdressType[]
}
