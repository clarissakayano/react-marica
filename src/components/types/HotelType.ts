import { CategoryType } from './CollectionType'
import { ImageType } from './ImageType'

export type HotelType = {
  id: number
  nome: string
  capa: string
  lat: string
  lng: string
  images: ImageType
  categorias: CategoryType[]
  enderecos: {
    id: string
    lat: string
    lng: string
    label: string
  }[]
}

export type ItemType = {
  addresses: {
    id: number
    label: string
    lat: number
    lgn: number
  }[]
  phones: {
    id: number
    nome: string
    number: number
  }[]
  categorias: {
    id: number
    label: string
  }[]
  descricao_t: string
  dicas_t: string
  estruturas: {
    icone: string
    label: string
  }[]
  formas_pagamento: []
  gratuito: number
  horario_funcionamento: []
  id: number
  images: {
    id: number
    src: string
    legenda: {
      pt_BR: string
    }
  }[]
  redes: {
    nome: string
    icone: string
    url: string
    user: string
  }[]
  restricoes: {
    label: string
  }[]
}
