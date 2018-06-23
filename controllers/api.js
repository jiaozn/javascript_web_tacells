const products=require('../products');

const APIError=require('../rest').APIError;

const kpids=require('../kpids');

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