//store kpis as database:
const model = require('./model');
// 引入models文件夹下面的每个model，调用后返回各自建立的模型;

let
    Kpid=model.Kpid;

function Product(name,manufacturer,price){
    this.id=nextId();
    this.name=name;
    this.manufacturer=manufacturer;
    this.price=price;
}

module.exports={
    getKpids:(async ()=>{
        // Kpid.findAll().then((kpis)=>{
        //     return kpis;
        // });
        // console.log(typeof(await Kpid.findAll()));
        // console.log(await Kpid.findAll());
        let kpid=await Kpid.findAll();
        console.log('get kpids'+kpid);
        return kpid;
    }),


    // getKpi:(async (id)=>{
    //     let kpis=await Kpid.findAll();
    //     return kpis;
    // }),
    
    // createKpi:(name,manufacturer,price)=>{
    //     var p=new Product(name,manufacturer,price);
    //     products.push(p);
    //     return p;
    // },

    // deleteKpi:(id)=>{
    //     var
    //         index=-1,
    //         i;
    //     for(i=0;i<products.length;i++){
    //         if(products[i].id===id){
    //             index=i;
    //             break;
    //         }
    //     }

    //     if(index>=0){
    //         //remove products[index]:
    //         return products.splice(index,1)[0];
    //     }
    //     return null;
    // }
}