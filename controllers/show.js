module.exports={
    'GET /showkpids':async(ctx,next)=>{
        await ctx.render('showkpids.html');
    }
};