//expireTime 单位是天
function setCookie(name, value, expireTime){
    let time = new Date();
    time.setDate(time.getDate() + expireTime);
    document.cookie = name + '=' + value + ';path=/;expires =' + time.toGMTString();
};
function getCookie(name){
    let arr = document.cookie.split(';');
    let paramObj = {};
    for (let key in arr) {
        let param = arr[key].split('=');
        paramObj[param[0]] = param[1];
    }
    if (name) {
        return paramObj[name] || '';
    }
    return paramObj;
};
function removeCookie(name){
    setCookie(name, 1, -1);
};
