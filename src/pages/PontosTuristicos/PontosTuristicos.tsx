import { memo } from 'react'

import Header from 'Header/Header'
import { useTranslation } from 'react-i18next'

import useTitle from 'hooks/useTitle'

const PontosTuristicos: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  return <Header />
}
export default memo(PontosTuristicos)
