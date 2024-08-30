// var arr=[1,3,4,5]
// var arr=arr.map((val)=>{
//     return val + 13
// })
// console.log(arr);

// var warr=[232,23,42,34,22]

// arr.forEach(function(val){
//     console.log(val +3);
// })

// // var dude=warr.map(function(val){
// //     return val +2
// // })
// // console.log(dude);
// // var filter=warr.filter(function(val){
// //     if(val<23){
// //         return true
// //     }
// // })
// // console.log(filter);
// let find = warr.find(function(value){
//     if (value<23){
//         return value
//     }
// })
// console.log(find);


// // })
// // return index
// // // console.log(index);
// function rohan(sunil,a,aa,a,a ,laxman){

// }
// //  console.log(typeof function(){});
// //  console.dir(rohan);
// function lelo(){
//     return 12
//     //console.log("jai sri ram")
// }
// console.log(warr.indexOf(22));

// var dude= lelo();

// async function rohan(){
//     var log = await fetch(`https://randomuser.me/`)
//     var blob= await log.json()
//     console.log(blob.result[0].id);
// }

// rohan();


// use fs module
const { log } = require('console');
const fs= require('fs')
fs.writeFile('trials.js' ,"jai sri raam", (err)=>{
    if (err) throw err;
    console.log(" your file has been created");
})

 fs.appendFile('trials.js', "// for commenting in js",(err)=>{
    if (err) throw err;
    console.log(" your line has been appended to the file");
 })
// fs.rename('trial.js')

fs.readFile('trials.js',(err,data)=>{
    if(err)throw err;
    
        console.log(data.toString());
    
})

// http mmodule learning

const http= require('http')
const server= http.createServer(function(req,res){
    res.end("just trying");
})

server.listen(2000);