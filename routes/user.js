const { Router } = require( 'express' );

const router = Router();

    router.get( '/', ( req, res ) =>  {
    res.json( {
        msg: 'Get API'
        });
    });

    router.put( '/', ( req, res ) =>  {
    res.json( {
        msg: 'Put API'
        });
    });

    router.post( '/', ( req, res ) =>  {
    res.status(201).json( {
        msg: 'Post API'
        });
    });

    router.delete( '/', ( req, res ) =>  {
    res.json( {
        msg: 'Delete API'
        });
    });

    router.patch( '/', ( req, res ) =>  {
    res.json( {
        msg: 'Patch API'
        });
    });


    module.exports = router;