import { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'

import logo from '~/logo.svg'
import '~/App.css'
import { BeforeInstallPromptEvent } from './@types'

function App() {
  let deferredPrompt: BeforeInstallPromptEvent | null
  ;(window.addEventListener as any)(
    'beforeinstallprompt',
    (event: BeforeInstallPromptEvent) => {
      console.log('before prompt')
      deferredPrompt = event
    }
  )

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <p>
          <button
            type='button'
            onClick={() =>
              deferredPrompt &&
              (async () => {
                deferredPrompt.prompt()
                const { outcome } = await deferredPrompt.userChoice
                console.log('[outcome]: ', outcome)
                deferredPrompt = null
              })()
            }
          >
            Install
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {' | '}
          <a
            className='App-link'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
