import { AddressType, CategoryType } from './CollectionType'
import { ImageType } from './ImageType'

export type TouristicPointType = {
  id: number
  nome: string
  capa: string
  lat: string
  lng: string
  icone: string
  images: ImageType
  categorias: CategoryType[]
  enderecos: AddressType[]
}

export type ItemType = {
  nome: string
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
  viajantes: {
    label: string
  }[]
  restricoes: {
    icone: string
    label: string
  }[]
}
