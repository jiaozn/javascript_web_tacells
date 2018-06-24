var ba=require('basic-auth');
var Base64=require('base64');
var au=new Map();
au.set('admin','password');
au.set('j','666');

console.log(au.has('admin') && au.get('admin')==='password');

var tok = 'admin' + ':' + '123';    
  var hash = Base64.encode(tok);    
  console.log("Basic " + hash);    