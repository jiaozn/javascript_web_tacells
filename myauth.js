const basicAuth = require('basic-auth');
const users=require('./users');
var check = async (name, password) => {
    var u = await users.isUser(name, password);
    if(u){
        return true;
    }else{
        return false;
    }
}

module.exports = async (ctx) => {
    var credentials = basicAuth(ctx.req)||'';
    if(credentials.name||''){
        console.log(credentials.name);
        console.log(credentials.pass);
    }else{
        console.log('credentials undifiend');
    }

    if (!credentials || !await check(credentials.name, credentials.pass)) {
        console.log('判定失败');
        return false;
    } else {
        console.log('判定成功');
        return true;
    }
};