import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';
import React from 'react';

const app = express();

const port = 3000;

app.use(cors());

app.use(express.static('dist'));

app.get('*', (req,res,next) => {
	const markup = renderToString(
		<App />
	)

	res.send(`
    <html>
      <head>
        <title>SSR with RR</title>
				<script src="/bundle.js" defer></script>	
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
