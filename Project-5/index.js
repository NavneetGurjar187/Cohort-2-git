function getUser(){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res({id: 1, name: "navneet"});
        }, 1000);
    })
}

function getPosts(){
    return new Promise((res,rej) => {
        setTimeout(() => {
           res(["title 1","title 2"]); 
        }, 1000);
    })
}

getUser()
.then((data) => {
    console.log(data);
})