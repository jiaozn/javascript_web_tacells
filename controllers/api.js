const APIError=require('../rest').APIError;

const kpids=require('../kpids');

const users=require('../users');

const dbrun=require('../dbrun');

module.exports={
    'GET /api/products':async (ctx,next)=>{
        ctx.rest({
            products:products.getProducts()
        });
    },

    'POST /api/products':async (ctx,next)=>{
        var p=products.createProduct(ctx.request.body.name,ctx.request.body.manufacturer, parseFloat(ctx.request.body.price));
        ctx.rest(p);
    },
    
    'DELETE /api/products/:id':async (ctx,next)=>{
        console.log(`delete product ${ctx.params.id}...`);
        var p=products.deleteProduct(ctx.params.id);
        if(p){
            ctx.rest(p);
        }else{
            throw new APIError('product:not_found','product not found by id.');
        }
    },

    'GET /api/kpis':async (ctx,next)=>{
        let kkk=await kpids.getKpids();
        console.log('log at api.js--before ctx.rest(kkk)'+kkk);
        ctx.rest(kkk);
    },

    'GET /api/kpisraw':async (ctx,next)=>{
        let rows=await dbrun('select * from kpis');
        console.log('log at api.js--before ctx.rest(rows)'+rows);
        ctx.rest(rows);
    },

    'GET /api/cells/:keyword':async (ctx,next)=>{
        let rows=await dbrun(`select distinct(a.id),a.cellname from 
        (select id,cellname from tacells where zhanhao like '%${ctx.params.keyword}%' union all 
        select id,cellname from tacells where cellname like '%${ctx.params.keyword}%' union all
        select id,cellname from tacells where enodebname like '%${ctx.params.keyword}%' ) as a limit 5`);
        console.log(JSON.stringify(rows));
        ctx.rest(JSON.stringify(rows));
    },

    'GET /api/cell/:id':async (ctx,next)=>{
        let rows=await dbrun(`select id,cellid,cellname,azi,mtilt,etilt from tacells where id=${ctx.params.id}`);
        console.log(JSON.stringify(rows));
        ctx.rest(JSON.stringify(rows));
    },

    'PUT /api/cell/:id':async (ctx,next)=>{
        console.log('api put..');
        for(x in ctx.request.body){
            console.log(x);
        }
        // console.log(ctx.request.body.temp.azi);
        let rows=await dbrun(`update tacells set azi=${ctx.request.body.azi},mtilt=${ctx.request.body.mtilt},etilt=${ctx.request.body.etilt} where id=${ctx.params.id}`);
        
        console.log('Update successfully : '+rows);
        ctx.rest(rows);
    },
    'POST /api/isuser':async (ctx,next)=>{
        var u=await users.isUser(ctx.request.body.name,ctx.request.body.password);
        console.log('api.js'+u);
        ctx.rest(u);
    }

    // 'GET /api/kpis':async (ctx,next)=>{
    //     ctx.rest({
    //         kpis:kpis.getKpis();
    //     });
    // }

    // 'POST /api/kpis':async (ctx,next)=>{
    //     var p=products.createProduct(ctx.request.body.name,ctx.request.body.manufacturer, parseFloat(ctx.request.body.price));
    //     ctx.rest(p);
    // },
    
    // 'DELETE /api/products/:id':async (ctx,next)=>{
    //     console.log(`delete product ${ctx.params.id}...`);
    //     var p=products.deleteProduct(ctx.params.id);
    //     if(p){
    //         ctx.rest(p);
    //     }else{
    //         throw new APIError('product:not_found','product not found by id.');
    //     }
    // },



};