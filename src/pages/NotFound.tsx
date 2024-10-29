import { notfound } from '../assets'


export default function NotFound() {
  return (
    <main className="lg:h-[80svh] h-[70svh] w-full flex items-center">
        <div className="h-[40svh] max-w-4xl mx-auto">
            <img className='w-full h-full' alt='not found' src={notfound}/>
        </div>
    </main>
  )
}
