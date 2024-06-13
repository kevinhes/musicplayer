import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="py-10">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src="https://fakeimg.pl/540x540/" className='w-100 aspect-square d-block mb-4' />
              <h1 className='text-decoration-underline fw-bold lh-sm'>Richard Green</h1>
              <p className='mb-0'>followers</p>
              <div className="d-flex justify-content-between align-items-center">
                <h2>5,790</h2>
                <div className="d-flex justify-content-end align-items-center">
                  <a href="#" className='btn btn-outline-dark me-4 btn-lg btn-pill'>FOLLOW</a>
                  <a href="#" className='btn btn-primary btn-lg btn-pill'>PLAY</a>
                </div>
              </div>
            </div>
            <div className="col-6">
              1234
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
