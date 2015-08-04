var loggly = require('loggly');

 var client = loggly.createClient({
    token: "55bce6ee-b089-49f9-a692-370b11386e79",
    subdomain: "chelseaburns",
    tags: ["NodeJS"],
    json:true
});

client.log("Hello World from Node.js!");
