export type SpaceEventsCategoryType = {
  id: number
  label: string
  count: number
}

export type SpaceEventsType = {
  id: number
  nome: string
  capa: string
  lat: number
  lng: number
  enderecos: {
    id: number
    lat: number
    lng: number
    label: string
  }[]
  categorias: SpaceEventsCategoryType[]
  datahora_inicio: string
}

export type ItemSpaceEventsType = {
  addresses: {
    id: number
    label: string
    lat: number
    lng: number
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
    icone: string
    label: string
  }[]
  gratuito: number
  horario_funcionamento: {
    id: number
    label: string
    is24: boolean
    horario: {
      abre: string
      fecha: string
    }
  }[]
  datahora_inicio: string
  images: {
    id: number
    src: string
  }[]
  nome: string
  panorama: []
  phones: {
    id: number
    nome: string
    number: string
    order: number
    whatsapp: boolean
  }[]
  redes: {
    icone: string
    nome: string
    url: string
    user: string
  }[]
  restricoes: {
    icone: string
    label: string
  }[]
  viajantes: {
    label: string
  }[]
}
