import React from 'react';

export default ({children,comments}) => {
  return <html>
    <head>
      <link ref="stylesheet" href="/index.css"></link>
    </head>
    <body>
      <div id='root'>{children}</div>
      <script src="/index.js">
      
      </script>
    </body>
  </html>
}
