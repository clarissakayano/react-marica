import { memo } from 'react'

import Header from 'Header/Header'

const PontosTuristicos: React.FC = () => {
  const { t, i18n } = useTranslation()
  const setTitle = useTitle()

  return <Header />
}
export default memo(PontosTuristicos)
