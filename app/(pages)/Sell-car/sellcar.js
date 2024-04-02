import { useState } from 'react'

export default function SellCar() {
  const [registrationNumber, setRegistrationNumber] = useState('')

  return (
    <div>
      <h1>Sell Your Car</h1>
      <p>
        Enter your cars registration number to get started:
        <input
          type="text"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />
      </p>
      <p>
        Your cars registration number is: <strong>{registrationNumber}</strong>
      </p>
    </div>
  )
}