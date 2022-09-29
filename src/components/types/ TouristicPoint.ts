import { CategoryType } from './CollectionType'

export type TouristicPointType = {
  id: string
  nome: string
  capa: string
  lat: string
  lng: string
  categorias: CategoryType[]
  enderecos: {
    id: string
    lat: string
    lng: string
    label: string
  }[]
}

export type ItemPointType = {
