import MyShips from './components/MyShips'
import BuyShips from './components/BuyShips'
import styled from 'styled-components/macro'
import { useState } from 'react'

export default function Ships() {
  const [activeSection, setActiveSection] = useState('myShips')
  const [isActive, setIsActive] = useState()

  const handleMyNavigate = () => {
    setActiveSection('myShips')
  }

  const handleBuyNavigate = () => {
    setActiveSection('buyShips')
  }

  return (
    <section>
      <h2>Fleet</h2>
      <InnerNavigation>
        <InnerNavigationButton onClick={() => handleMyNavigate()}>
          YOUR FLEET
        </InnerNavigationButton>
        <InnerNavigationButton onClick={() => handleBuyNavigate()}>
          BUY NEW SHIP
        </InnerNavigationButton>
      </InnerNavigation>
      {activeSection === 'myShips' ? <MyShips /> : <BuyShips />}
    </section>
  )
}
const InnerNavigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
`

const InnerNavigationButton = styled.button`
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 10px 20px;
  width: 50%;
  font-size: 1rem;
  font-family: 'Titillium Web', monospace;
  font-weight: 400;
  background-color: rgba(255, 255, 255, 0.05);
  color: #eee;
`
