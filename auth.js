"use strict";

const { request } = require('express');
const jwt = require('jsonwebtoken');
const jwksClient = require('jwks-rsa');

function verifyUser(req, response, next) {
    function valid(err, user) {
        request.user = user;
        next();
    }

    try {
        const token = request.headers.authorization.split(' ')[1];
        console.log("Token", token);
        jwt.verify(toke, getKey, {}, valid);
    } catch (error) {
        next('Not Authorized');
    }
}

const client = jwksClient({
    jwksUri: process.env.JWKS_URI
});

function getKey(header, callback) {
    client.getSigningKey(header.kid, function (err, key) {
        const getSigningKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
}

module.exports = verifyUser;