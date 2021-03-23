const express = require( 'express' );


class Server {

constructor(){

    this.app = express();
    this.port = process.env.PORT;

    this.routes();
}


routes(){

    this.app.get( '/', ( req, res ) =>  {
    res.send('Hello world');
} );


}



listen(){
    this.app.listen( port  );
}


}



module.exports = Server;