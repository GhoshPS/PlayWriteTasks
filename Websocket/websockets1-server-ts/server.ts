//We are gong to create websocket server from ws
import { WebSocketServer } from "ws";

const port = 3456;
//We are going to create a web socket server 
//that is going to be websocket server object
const wss = new WebSocketServer({port}); 
//Here we will definne web socket server 
//here on new connection we are going to recive a webshocket client
//and then we have  handle function here
wss.on('connection',(ws) => {
    //above method handles new connections

    //Now we can say that when web socket sends a message 
    
   ws.on('message', (data)=>{
    //we are going to  print a data 
    console.log(`Recieved message from client:${data}`);
   })
    

//OR we can send a new message when new client conects
ws.send(`Hello, this is server!`);
})
//Here we could say to the user where we are listeing,we are listening at that port
console.log(`listening at ${port}...`);

//Now we need some code to get a client to connect and see how it works