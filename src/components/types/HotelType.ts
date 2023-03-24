import { AddressType, CategoryType } from './CollectionType'
import { ImageType } from './ImageType'

export type HotelType = {
  id: number
  nome: string
  email: string
  capa: string
  lat: string
  lng: string
  images: ImageType
  categorias: CategoryType[]
  enderecos: AddressType[]
}

export type Restricoes = {
  icone: string
  label: string
}

export type ItemType = {
  nome: string
  email: string
  site: string
  icone: string
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
  formas_pagamento: {
    gratuito: number
    icone: string
    label: string
  }[]

  horario_funcionamento: {
    label: string
    horario: {
      abre: string
      fecha: string
    }
  }[]
  id: number
  label: string
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
    site: string
  }[]
  restricoes: Restricoes[]
  faixa_preco: number
  cozinhas: {
    label: string
    refeicoes: {
      label: string
    }
  }
  refeicoes: {
    label: string
  }
}
