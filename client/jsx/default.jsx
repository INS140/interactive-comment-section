import React from 'react'

export function Default({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="styles/main.css" />
        <title>INS140 | Interactive comments section</title>
      </head>
      <body>
        {children}
        <footer className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/INS140">INS140</a>.
        </footer>
      </body>
    </html>
  )
}