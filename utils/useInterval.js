import { useEffect, useState, useRef } from "react"

const useInterval = ({ startImmediate = false, duration, callback }) => {
  const [intervalState, setIntervalState] = useState(startImmediate)
  const intervalRef = useRef()

  useEffect(() => {
    if (intervalState) {
      const intervalId = setInterval(() => {
        callback && callback()
      }, duration)
      intervalRef.current = intervalId
    }

    return () => {
      clearInterval(intervalRef.current)
    }
  })
  return {
    isRunning: intervalState,
    start: () => {
      setIntervalState(true)
    },
    stop: () => {
      setIntervalState(false)
    }
  }
}

export default useInterval
