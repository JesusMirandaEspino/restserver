const express = require( 'express' );

//TODO clase server 
class Server {

constructor(){

    //variables para asignar express
    this.app = express();
    this.port = process.env.PORT;


    //middlewares
    this.middlewares();

    this.routes();
}


middlewares(){

    //directorio publico
    this.app.use( express.static( 'public' ) );
}

routes(){

    this.app.get( '/api', ( req, res ) =>  {
    res.json( {
        msg: 'Get API'
        });
    });

    this.app.put( '/api', ( req, res ) =>  {
    res.json( {
        msg: 'Put API'
        });
    });

    this.app.post( '/api', ( req, res ) =>  {
    res.json( {
        msg: 'Post API'
        });
    });

    this.app.delete( '/api', ( req, res ) =>  {
    res.json( {
        msg: 'Delete API'
        });
    });


}



listen(){
    this.app.listen( this.port, () => {
        console.log( 'Servidor corriendo en el puerto', this.port );
    }  );   
}


}



module.exports = Server;