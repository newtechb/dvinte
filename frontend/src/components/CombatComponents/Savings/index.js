import React from 'react'
import { useSelector } from 'react-redux'
import api from '~/services/api'

import * as Styles from './styles'

export default function Savings({ fortitude, reflex, will }) {
  const { profile } = useSelector(state => state.user)
  const from = profile.id

  async function handleFortitude() {
    const dice = Math.floor(Math.random() * 20) + 1

    const fortitudeTest = fortitude + dice

    const rolled = `Rolou teste de Fortitude d20: ${dice} + ${fortitude} de fortitude, com resultado: ${fortitudeTest}`

    api.post('combats', {
      id: from,
      user_id: profile.id,
      user: profile.name,
      message: rolled,
      result: fortitudeTest,
      type: 5,
    })
  }

  async function handleReflex() {
    const dice = Math.floor(Math.random() * 20) + 1

    const reflexTest = reflex + dice

    const rolled = `Rolou teste de Reflexos d20: ${dice} + ${reflex} de reflexos, com resultado: ${reflexTest}`

    api.post('combats', {
      id: from,
      user_id: profile.id,
      user: profile.name,
      message: rolled,
      result: reflexTest,
      type: 6,
    })
  }

  async function handleWill() {
    const dice = Math.floor(Math.random() * 20) + 1

    const willTest = will + dice

    const rolled = `Rolou teste de Vontade d20: ${dice} + ${will} de vontade, com resultado: ${willTest}`

    api.post('combats', {
      id: from,
      user_id: profile.id,
      user: profile.name,
      message: rolled,
      result: willTest,
      type: 7,
    })
  }

  return (
    <Styles.Container>
      <Styles.HeaderContainer>
        <h2>Testes de Resistência</h2>
      </Styles.HeaderContainer>

      <Styles.MainContainer>
        <Styles.SavesContainer>
          <Styles.ActionContainer>
            <div>
              <button type="button" onClick={handleFortitude}>
                Fortitude
              </button>
            </div>
            <div>
              <button type="button" onClick={handleReflex}>
                Reflexos
              </button>
            </div>
            <div>
              <button type="button" onClick={handleWill}>
                Vontade
              </button>
            </div>
          </Styles.ActionContainer>
        </Styles.SavesContainer>
        {/*
        <Styles.DicesContainer>
          <Dices />
        </Styles.DicesContainer> */}
        {/*
        <Styles.BoardContainer>
          <LogBoard />
        </Styles.BoardContainer> */}
      </Styles.MainContainer>
    </Styles.Container>
  )
}