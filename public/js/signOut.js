$('#signOut').bind('click',function(e){
    console.log(e)
    removeCookie('connect.sid');
    $.ajax({
        type:'POST',
        url:'/api/signOut',
        dataType:'json',
        success:function(result){
            if(result.error_code === 0){
                window.location.href='/signIn';
            }else{
                alert('退出失败.');
            }
        },
        error:function(error){
            console.log(error);
            alert('发生错误.');
        }
    });
});
$('#userNameBox').html(getCookie('username'));