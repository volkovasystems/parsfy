
const assert = require( "assert" );
const parsfy = require( "./parsfy.js" );

assert.deepEqual( parsfy( "{}" ), {}, "should be equal to {}" );

assert.equal( parsfy( 1 ), 1, "should be equal to 1" );

assert.equal( parsfy( false ), false, "should be equal to false" );

/*	@fixme
	reviver value is always undefined and has error "Unexpected token h in JSON at position 0"
assert.equal( parsfy( "hello" ), "hello", "should be equal" );
	@end-fixme
*/

assert.deepEqual( parsfy( JSON.stringify( { "hello": "world" } ) ),
	{ "hello": "world" }, "should be equal to { 'hello': 'world' }" );

console.log( "ok" );
