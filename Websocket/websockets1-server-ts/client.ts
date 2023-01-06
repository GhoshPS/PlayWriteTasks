import WebSocket from "ws";
//Here we will start websocket client and connect to server 

const port = 3456;
//we will create a new web socket client  and we going to put url that is 
//local host and then our port 
const ws = new WebSocket(`ws://localhost:${port}`);
//now we can define different events like 
//What happens when we open,what happen when we recieve a message

//or when we recieve an error
ws.on('open', () => {
    console.log(`[Client] Connected.`);
    ws.send(`Hi, this is a client!`);

})

ws.on('message', (data)=>{
    console.log(`Recieve a message from server: ${data}`);
})
