/* 
    存储--信息 
    localStorage.setItem()
*/

function SetlocalData(name,data){
    /* 将 JavaScript 对象转换为 JSON 字符串 */
    localStorage.setItem(`${name}`, JSON.stringify(data))
}

/* 
    获取存储--信息 
    localStorage.getItem()
*/

function GetlocalData(name){
    /* 获取存储信息，并将JSON 字符串转换为对象 */
    let data = JSON.parse(localStorage.getItem(`${name}`))
    return data
}

/* 
    删除存储--信息 
    localStorage.removeItem()
*/

function RemoverlocalData(name){
    localStorage.removeItem(`${name}`)
}

/* 
    删除所有存储--信息 
    localStorage.clear()
*/

function ClearlocalData(name){
    localStorage.clear(`${name}`)
}
let local = {
    SetlocalData,
    GetlocalData,
    RemoverlocalData,
    ClearlocalData
}
export default local