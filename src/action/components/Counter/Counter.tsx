import { useState } from 'react'

function Counter() {
  const [counterValue, setCounterValue] = useState(0)

  return (
    <div>
      <div className="text-red-500">Current value: {counterValue}</div>
      <button
        onClick={() => setCounterValue((counterValue) => counterValue + 1)}
      >
        Increace value by 1
      </button>
    </div>
  )
}

export default Counter
