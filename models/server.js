const express = require( 'express' );
const cors = require('cors')

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

    //cors
    this.app.use(cors());

    //directorio publico
    this.app.use( express.static( 'public' ) );
}

routes(){

    this.app.use( '/api/users', require('../routes/user') );

}



listen(){
    this.app.listen( this.port, () => {
        console.log( 'Servidor corriendo en el puerto', this.port );
    }  );   
}


}



module.exports = Server;