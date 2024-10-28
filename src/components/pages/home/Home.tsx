import Productions from '../../productions/Productions'
import './home.scss'

export default function Home() {
    console.log(Productions)
  return (
    <main className='main'>
        <Productions />
    </main>
  )
}
