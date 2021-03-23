const { response } = require( 'express' );

const usersGet =  ( req, res = response ) =>  {
    res.json( {
        msg: 'Get API'
        });
    }

const usersPost =  ( req, res = response ) =>  {
    res.status(201).json( {
        msg: 'Post API'
        });
    }
const usersPut =  ( req, res = response ) =>  {
    res.json( {
        msg: 'Put API'
        });
    } 

const usersDelete =  ( req, res = response ) =>  {
    res.json( {
        msg: 'Delete API'
        });
    } 
    
const usersPath =  ( req, res = response ) =>  {
    res.json( {
        msg: 'Patch API'
        });
    } 

    module.exports = {
        usersGet,
        usersPost,
        usersPut,
        usersDelete,
        usersPath
    };