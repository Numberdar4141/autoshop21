import Head from 'next/head'

export default function SellCarPage() {
  return (
    <div>
      <Head>
        <title>Sell Your Car</title>
        <meta name="description" content="Sell your car with us by entering your car's registration number" />
      </Head>
      <div>
        <h1>Sell Your Car</h1>
        <p>
          Enter your car's registration number to get started:
        </p>
        <p>
          <SellCarForm />
        </p>
      </div>
    </div>
  )
}

function SellCarForm() {
  const [registrationNumber, setRegistrationNumber] = useState('')

  return (
    <form>
      <input
        type="text"
        value={registrationNumber}
        onChange={(e) => setRegistrationNumber(e.target.value)}
      />
      <button type="submit">
        Submit
      </button>
    </form>
  )
}