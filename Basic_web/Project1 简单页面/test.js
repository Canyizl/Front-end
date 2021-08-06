window.onload=function()
{
    function $(id){
        return typeof id === 'string'? document.getElementById(id) : null ;
    }
   
    $('url').onblur=function()
    {
        let regex = /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?$/;
        let ovalue=this.value;
        let result=regex.test(ovalue);

        if(ovalue=='')
        {
            $('error1').innerHTML="网址不能为空！"
            $('error1').setAttribute("class",'error');
        }
        else if(result==false)
        {
            $('error1').innerHTML="网址格式错误！"
            $('error1').setAttribute("class",'error');
        }
        else if(result==true)
        {
            $('error1').innerHTML=""
            $('error1').className=null;
        }
    }

    $('short').onclick=function()
    {
        $('url').setAttribute("placeholder","请输入长网址");
        $('name').setAttribute("value","缩短网址");
        $('error1').innerHTML=""
        $('error1').className=null;
    }

    $('long').onclick=function()
    {
        $('url').setAttribute("placeholder","请输入短网址");
        $('name').setAttribute("value","还原网址");
        $('error1').innerHTML=""
        $('error1').className=null;
    }
}