module.exports={
    'GET /showcells':async(ctx,next)=>{
        await ctx.render('showcells.html');
    }
};