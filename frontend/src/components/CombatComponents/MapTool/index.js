import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Switch } from 'antd'

import api from '~/services/api'

import * as Styles from './styles'

export default function MapTool() {
  const profile = useSelector(state => state.user.profile)
  const [battle, setBattle] = useState('')
  const [world, setWorld] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [grid, setGrid] = useState(true)
  const [fog, setFog] = useState(false)
  const [portrait, setPortrait] = useState('')
  const [orientation, setOrientation] = useState(true)

  const [fogOpacity, setFogOpacity] = useState(60)
  const [size, setSize] = useState(60)

  async function handleSave() {
    const mapData = {
      campaign_id: 1,
      battle,
      world,
      portrait,
      orientation,
      width,
      height,
      grid,
      fog,
      owner: profile.id,
    }

    await api.post('maps', mapData)
    toast.success('Mapa alterado com sucesso!')
  }

  useEffect(() => {
    api.get(`maps/${1}`).then(response => {
      const { data } = response

      if (data) {
        setBattle(data.battle)
        setWorld(data.world)
        setWidth(data.width)
        setHeight(data.height)
        setGrid(data.grid)
        setFog(data.fog)
      }
    })
  }, [])

  function handleGrid(checked) {
    if (checked === true) {
      setGrid(checked)
    } else {
      setGrid(false)
    }
  }

  function handleFog(checked) {
    if (checked === true) {
      setFog(checked)
    } else {
      setFog(false)
    }
  }

  function handleOrientation(checked) {
    if (checked === true) {
      setOrientation(checked)
    } else {
      setOrientation(false)
    }
  }

  return (
    <Styles.Container>
      <h2>Cadastro de Mapas</h2>
      <form>
        <Styles.InputContainer>
          <div>
            <label htmlFor="battle">Mapa Batalha</label>
            <Styles.InputLarge
              value={battle}
              onChange={e => setBattle(e.target.value)}
            />
          </div>
        </Styles.InputContainer>

        <Styles.InputContainer>
          <div>
            <label htmlFor="world">Mapa Mundo</label>
            <Styles.InputLarge
              value={world}
              onChange={e => setWorld(e.target.value)}
            />
          </div>
        </Styles.InputContainer>

        <Styles.InputContainer>
          <div>
            <label htmlFor="width">Largura</label>
            <Styles.InputShort
              value={width}
              onChange={e => setWidth(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="height">Altura</label>
            <Styles.InputShort
              value={height}
              onChange={e => setHeight(e.target.value)}
            />
          </div>
        </Styles.InputContainer>

        <Styles.InputContainer>
          <div>
            <label htmlFor="grid">Grid</label>
            <div style={{ marginTop: '18px' }}>
              <Switch
                checked={grid}
                defaultChecked={grid}
                onChange={handleGrid}
              />
            </div>
          </div>

          <div>
            <label htmlFor="fog">Fog</label>
            <div style={{ marginTop: '18px' }}>
              <Switch checked={fog} defaultChecked={fog} onChange={handleFog} />
            </div>
          </div>
        </Styles.InputContainer>

        <Styles.InputContainer>
          <div>
            <label htmlFor="portrait">Retrato Endereço</label>
            <Styles.InputMed
              value={portrait}
              onChange={e => setPortrait(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="port">Paisag/Retrat</label>
            <div style={{ marginTop: '18px' }}>
              <Switch
                checked={orientation}
                defaultChecked={orientation}
                onChange={handleOrientation}
              />
            </div>
          </div>
        </Styles.InputContainer>

        <Styles.InputContainer></Styles.InputContainer>

        <Styles.InputContainer>
          <div>
            <label htmlFor="size">Borracha</label>
            <input
              value={size}
              onChange={e => {
                setSize(parseInt(e.target.value))
              }}
              type="range"
              step="3"
              min="3"
              max="200"
            />
          </div>

          <div>
            <label htmlFor="size">Fog of War</label>
            <input
              value={fogOpacity}
              onChange={e => {
                setFogOpacity(parseInt(e.target.value))
              }}
              type="range"
              step="10"
              min="1"
              max="100"
            />
          </div>
        </Styles.InputContainer>

        <Styles.ButtonsContainer>
          <Styles.Button type="button" onClick={handleSave}>
            Cadastrar
          </Styles.Button>
        </Styles.ButtonsContainer>
      </form>
    </Styles.Container>
  )
}
