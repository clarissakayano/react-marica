export type CategoryType = {
  id: number
  label: string
  count: number
}

export type AddressType = {
  id: number
  lng: number
  lat: number
  label: string
}

export type CollectionType = {
  id: number
  nome: string
  capa: string
  lat: number | null
  lng: number | null
  endereco: AddressType[]
  categorias: CategoryType[]
  datahora_inicio?: string
}
