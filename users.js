//store kpis as database:
const model = require('./model');
// // 引入models文件夹下面的每个model，调用后返回各自建立的模型;

let
    User = model.Users;

// function User(uname, password) {
//     this.uname = uname;
//     this.password = password;
// }

module.exports = {
    isUser: (async (uname, password) => {
        let usertemp = await User.findOne({
            where: { uname: uname, password: password }
        });
        // let usertemp=await User.finAll();
        for(x in usertemp){
            console.log(x);
        }
        return usertemp;
    }),

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