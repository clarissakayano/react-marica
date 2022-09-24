export type TouristicPointType = {
  id: string
  name: string
  capa: string
  lat: string
  lng: string
  categorias: {
    id: string
    label: string
  }[]

  enderecos: {
    id: string
    lat: string
    lng: string
    label: string
  }
}
