const Koa=require('koa');

const bodyParser=require('koa-bodyparser');

const controller=require('./controller');

const templating=require('./templating');

const rest=require('./rest');

const checkUserPermission=require('./myauth');

const app=new Koa();

//修改默认的console.log函数，改为 时间+str 形式
var old_consolelog=console.log;
console.log=(str)=>{
    old_consolelog(new Date()+" : "+str);
};

// 1.log request URL:来一个请求就记录请求信息
app.use(async (ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// 2.static file support:如果请求的是静态文件，直接返回相应的文件内容；否则的话再往下判断进行
let staticFiles=require('./static-files');
app.use(staticFiles('/static/',__dirname+'/static'));

// 3.parse request body:兼容POST请求，把data放进ctx.body
app.use(bodyParser());

// 4.add nunjucks as view:给ctx增加了render函数，以后ctx可以用render使用模板了
app.use(templating('views',{
    noCache:true,
    watch:true
}));

// 5.bind .rest() for ctx:如果请求的path以api开头，则给ctx增加了rest函数，以后ctx就可以直接使用rest返回json了
app.use(rest.restify());

app.use(async (ctx,next)=>{
    console.log('开始检查');
    if(await checkUserPermission(ctx)){
        await next();
    }else{
        // ctx.response.status=403;
        ctx.render('login.html');
    }
});

//add controllers:自动引入controllers下的所有controller，并根据各个controller的exports内容，设置好自己匹配的路由
app.use(controller());

app.listen(2018);
console.log('服务器启动成功，监听2018端口');