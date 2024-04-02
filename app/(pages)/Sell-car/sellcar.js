import { useState } from 'react'

export default function SellCar() {
  const [registrationNumber, setRegistrationNumber] = useState('')

  return (
    <div>
      <h1>Sell Your Car</h1>
      <p>
        Enter your car's registration number to get started:
        <input
          type="text"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />
      </p>
      <p>
        Your car's registration number is: <strong>{registrationNumber}</strong>
      </p>
    </div>
  )
}