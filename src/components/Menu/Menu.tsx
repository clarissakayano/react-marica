import { Dispatch, memo, ReactElement, SetStateAction } from 'react'

import { AiFillHome } from 'react-icons/ai'
import { FaUmbrellaBeach, FaRoute, FaRegCalendarAlt } from 'react-icons/fa'
import { GiForkKnifeSpoon, GiMicrophone } from 'react-icons/gi'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { IoMdFlower } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { MdHotel, MdStore } from 'react-icons/md'
import { RiMotorbikeFill } from 'react-icons/ri'
import { SiApacheairflow } from 'react-icons/si'
import { Link } from 'react-router-dom'

import { MenuContainer, MenuOverlay, NavMenu } from './styles'

interface IMenuMobileProps {
  children?: React.ReactNode
  menuIsVisible: boolean
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>
}

const MenuMobile: React.FC<IMenuMobileProps> = ({
  children,
  menuIsVisible,
  setMenuIsVisible,
}) => {
  children as ReactElement
  return (
    <>
      <MenuOverlay
        menuIsVisible={menuIsVisible}
        onClick={() => setMenuIsVisible(false)}
        className="position-fixed"
        style={{ height: '200%', width: '100%' }}
      />

      <MenuContainer isVisible={menuIsVisible}>
        <IoClose
          color="white"
          type="button"
          size={22}
          onClick={() => setMenuIsVisible(false)}
        />
        <div className="d-flex align-self-start justify-content-start">
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <AiFillHome />
                  <NavMenu>Inicial</NavMenu>
                </Link>
              </li>
              <li>
                <Link to="/sobreacidade">
                  <HiOutlineInformationCircle />
                  <NavMenu>Sobre a cidade</NavMenu>
                </Link>
              </li>
              <li>
                <Link to="/pontos">
                  <FaUmbrellaBeach />
                  <NavMenu>Pontos Turísticos</NavMenu>
                </Link>
              </li>
              <li>
                <Link to="/hoteis-e-pousadas">
                  <MdHotel />
                  <NavMenu>Hotéis e Pousadas</NavMenu>
                </Link>
              </li>
              <li>
                <Link to="/bares-e-restaurantes">
                  <GiForkKnifeSpoon />
                  <NavMenu>Bares e Restaurantes</NavMenu>
                </Link>
              </li>
              <li>
                <Link to="/delivery">
                  <RiMotorbikeFill />
                  <NavMenu>Delivery</NavMenu>
                </Link>
              </li>
              <li>
                <Link to="/comercio-local">
                  <MdStore />
                  <NavMenu>Comércio Local</NavMenu>
                </Link>
              </li>
              <li>
                <Link to="/espacos">
                  <GiMicrophone />
                  <NavMenu>Espaços para Eventos</NavMenu>
                </Link>
              </li>
              <li>
                <Link to="/eventos">
                  <FaRegCalendarAlt />
                  <NavMenu>Eventos</NavMenu>
                </Link>
              </li>
              <li>
                <a href="https://contato.site/5d9bab8/marica-cvb3/paginaprincipal">
                  <FaRoute />
                  <NavMenu>Roteiros Turísticos</NavMenu>
                </a>
              </li>
              <li>
                <a href="http://www.feirartemarica.com.br/">
                  <IoMdFlower />
                  <NavMenu>Artesanato</NavMenu>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </MenuContainer>
    </>
  )
}
export default memo(MenuMobile)
