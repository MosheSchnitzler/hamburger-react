import React from 'react'

export default () => (
  <div className="w-full flex justify-between text-sm text-gray-500">
    <p>
      hamburger-react is a project by{' '}
      <a
        className="underline font-medium"
        href="https://www.luuk.site"
        target="_blank" // eslint-disable-line react/jsx-no-target-blank
        rel="noopener"
      >
        Luuk
      </a>
      .
    </p>
    <div>
      <a
        className="underline font-medium px-4"
        href="https://www.npmjs.com/package/react-hamburger"
        target="_blank" // eslint-disable-line react/jsx-no-target-blank
        rel="noopener"
      >
        NPM
      </a>
      <a
        className="underline font-medium px-4"
        href="https://github.com/luukdv/hamburger-react"
        target="_blank" // eslint-disable-line react/jsx-no-target-blank
        rel="noopener"
      >
        GitHub
      </a>
      <a
        className="underline font-medium px-4"
        href="https://www.luuk.site"
        target="_blank" // eslint-disable-line react/jsx-no-target-blank
        rel="noopener"
      >
        Contact
      </a>
    </div>
  </div>
)
