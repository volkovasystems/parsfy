
const assert = require( "assert" );
const parsfy = require( "./parsfy.js" );

assert.deepEqual( parsfy( "{}" ), {}, "should be equal" );

assert.equal( parsfy( 1 ), 1, "should be equal" );

assert.equal( parsfy( false ), false, "should be equal" );

//assert.equal( parsfy( "hello" ), "hello", "should be equal" );

assert.deepEqual( parsfy( JSON.stringify( { "hello": "world" } ) ), { "hello": "world" }, "should be equal" );

console.log( "ok" );
