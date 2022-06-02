import server from "./src/server";

server.listen(server.get('port'), () => {
    console.log("Server running");
})