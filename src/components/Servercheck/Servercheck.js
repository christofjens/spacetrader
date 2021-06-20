import axios from 'axios'
import { useEffect, useState } from 'react'
// import { BASE_URL } from '../consts/url'

export default function Servercheck() {
  const [serverStatus, setServerStatus] = useState([])

  useEffect(() => {
    ;(async () => {
      const result = await axios.get('https://api.spacetraders.io/game/status')
      setServerStatus(result.data.status)
    })()
  }, [])

  return (
    <>
      The Server is currently{' '}
      {serverStatus === 'spacetraders is currently online and available to play'
        ? 'active'
        : 'not active'}
    </>
  )
}
