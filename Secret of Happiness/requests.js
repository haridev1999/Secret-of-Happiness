import http from 'http';

import {createUser,retrieveUser,printUsers} from './database.js'

const server =http.createServer((req,res)=>
		{
				let splitReq=req.url.split('/')
				let endUrl= splitReq[splitReq.length-1];
				let idNo=Number(endUrl);
//				console.log(idNo);
//				console.log(req.method);
				if(req.url === '/')
				{
		    	res.write ('<h1>HELLO!!!<h1>')
				}
//				console.log(req.method =='GET' && !isNaN(idNo));
				if(req.method =='GET' && !isNaN(idNo))
				{
						let user=JSON.stringify(retrieveUser(idNo));
						console.log("inside GET", user)
						res.write(user);
				}
				if (req.method == 'POST' && endUrl == 'add')
				{
						 let param;
						console.log('read a book');
                  req.on('data', chunk => {
//						  console.log('chunk :',chunk);
                          let stringParam=chunk.toString();
                          param=stringParam.split(',');
//                          console.log(param);
                  });
                  req.on('end', () => {
						  console.log('finished wwashing clothes');
						  console.log('clothes for drying',param);
                  });
						console.log('go for playing');
						//createUser(param[0],param[1],param[2]);
						//let user=JSON.stringify(retrieveUser[param[0]]);
						//res.write(user);
				}
				res.end();
		})
server.listen(8080);
console.log('The server is running on http://localhost:8080/');

