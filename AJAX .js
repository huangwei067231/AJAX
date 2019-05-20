//请求方：
let request=new XMLHttpRequest()
request.open('get','http://frank.com:8002/xxx')
request.onreadystatechange((e)=>{
    if(request.status===4){
        console.log('请求响应都已完毕')
    }if(request.readyState>=200&&request.readyState<300){
        console.log('说明请求成功')
        let string=request.responseText
        let object=window.JSON.parse(string)
    }else if(request.readyState>=400){
        console.log('说明请求失败了')
    }
request.send()
})
//响应方：
if(path==='/xxx'){
    response.statueCode=200
    response.setHeader('Content-Type','text/json,charset=utf-8')
    response.setHeader('Access-Control-Allow-Origin','http://frank.com:8002/xxx')
    response.write(`{
         "students":"100" , 
         "classes" :"4" }`)
    response.end()     
}