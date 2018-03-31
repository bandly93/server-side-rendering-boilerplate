import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';
import React from 'react';
import serialize from 'serialize-javascript';

const app = express();

const port = 3000;

app.use(cors());

app.use(express.static('dist'));

app.get('*', (req,res,next) => {
	const data = 'from react!'
	const markup = renderToString(
		<App data = {data}/>
	)

	res.send(`
    <html>
      <head>
        <title>Portfolio</title>
				<script src="/client-bundle.js" defer></script>
				<script> window.__INITIAL_DATA__ = ${serialize(data)} </script>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
});

app.listen(port,()=>{
	console.log(`Server is listening on port: ${port}`);
});
