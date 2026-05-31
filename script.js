
url="http://localhost:3000/data"









//     let delectingall= (i)=>{
//           fetch("http://localhost:3000/data/"+i,{"method":"DELETE"})
//     }

// //get method
// obj1={
// "method":"GET"
// };

// fetch(url,obj1).
// then((response)=>{
//     if(response.ok){
//         return response.json();
//     }else{
//         return "fetch data fail";
//     }
 
// })
// .then((response)=>{
//        console.log("respon  : ",response);
//       for(let i=0;i<=response.length;i++){
//         delectingall(response[i].id);
//         console.log(response[i].id, "  deleted"); 
//       }
// })

let data=[{
    "id":"5",
     "name":"rajendra"
    },
    {
        "id":"6",
        "name":"charan"
    },
    {
        "id":"7",
        "name":"divya"
    }]

for(let i=0;i<data.length;i++){

let obj={"method":"POST",
    headers:{"Content-Type":"Application/json"},
    body:JSON.stringify(data[i])
}

    fetch(url,obj).then((response)=>{console.log(response.status)})
}







//post

// obj2={
//     "method":"POST",
//     "headers":{
//         "Content-Type":"Application/json"
//     },
//     "body":JSON.stringify({
//        "id":"4",
//        "name":"shasank"
//     })
// }
// fetch(url,obj2).then((response)=>{
//     console.log("post method")
//     console.log(response)});


//put

// obj3 ={

//     "method":"PUT",
//     "headers":{
//         "Content-Type":"Application/json"
//     },
//     "body":JSON.stringify({  "id":"4",
//     "name":"A.shasank"})
// }
// fetch("http://localhost:3000/data/4",obj3).then((response)=>{
//     console.log("cerated status : ",response.status)
// })


//patch

// obj4={
//     "method" : "PATCH",
//     "headers":{
//         "Content-Type":"Application/json"
//     },
//     "body":JSON.stringify({
//         "name":"shasank"
//     })
// }

// fetch("http://localhost:3000/data/4",obj4).then((response)=>{
//     console.log("patch method : ");
//     console.log("status : ", response.status)
// })


// //delete
// obj5 ={
//     "method":"DELETE"
// }
// fetch("http://localhost:3000/data/4",obj5).then((rep)=>{
//     console.log("delete method  status  : ")
//     console.log(rep.status)
// })

//  channges by side user 
