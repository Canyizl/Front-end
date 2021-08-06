window.onload=function()
{
    function $(id){
        return typeof id === 'string'? document.getElementById(id) : null ;
    }

    var BigImg=$('bigImg');
    var samllImgs=document.getElementsByClassName('smallImg')

    for(var i=0;i<samllImgs.length;i++)
    {
        samllImgs[i].onmouseover=function()
        {
            for(var j=0;j<samllImgs.length;j++)
            {
                samllImgs[j].parentNode.parentNode.setAttribute('class','');
            }

            var smallImgSrc=this.getAttribute('src');
            BigImg.setAttribute('src',smallImgSrc);
            BigImg.style.height='250px';
            BigImg.style.width='250px';
            
            this.parentNode.parentNode.setAttribute('class','active');
        }
    }

    $('Name').onblur=function()
    {
        let regex=/[A-Za-z_]{6,18}/;
        let ovalue=this.value;
        let s=ovalue.length;
        let result1=regex.test(ovalue);
        if(ovalue=='')
        {
            $('error1').innerHTML="不能为空！"
            $('error1').setAttribute('class','error');
        }
        else if(result1==false)
        {
            $('error1').innerHTML="用户名格式错误！"
            $('error1').setAttribute('class','error');
        }
        else
        {
            $('error1').innerHTML=""
            $('error1').className=null;
        }
    }

    $('Pass1').onblur=function()
    {
        let ovalue=this.value;
        let regex=/[a-zA-Z0-9]{6,}/;
        let s=ovalue.length;
        let result2=regex.test(ovalue);
        if(result2==false)
        {
            $('error2').innerHTML="密码格式错误！"
            $('error2').setAttribute('class','error');
        }
        else 
        {
            $('error2').innerHTML=""
            $('error2').className=null;
        }
    }

    $('Pass2').onblur=function()
    {
        let value1=$('Pass1').value;
        let value2=this.value;
        if(value1==''|| value1!=value2)
        {
            $('error3').innerHTML="密码错误！"
            $('error3').setAttribute('class','error');
        }
        else
        {
            $('error3').innerHTML=""
            $('error3').className=null;
        }
    }
    $('bk').onmouseout=function() 
    {
        var techNode = document.getElementsByName("habit");
        var flag = false;
        for (var x = 0; x < techNode.length; x++) {
            if (techNode[x].checked) {
            flag = true;
            break;
            }
        }
        if (!flag) 
        {
            $("error4").innerHTML = "至少选择一项";
            $('error4').setAttribute('class','error');
        }
        else
        {
            $('error4').innerHTML=""
            $('error4').className=null;
        }
    }

    $('Tele').onblur = function()
    {
        var ovalue=this.value;
        var s=String(ovalue).length;
        if(ovalue=='')
        {
            $('error5').innerHTML="不能为空！"
            $('error5').setAttribute('class','error');
        }
        else if(isNaN(ovalue) || s!=11)
        {
            $('error5').innerHTML="11位电话格式错误！"
            $('error5').setAttribute('class','error');
        }
        else
        {
            $('error5').innerHTML=""
             $('error5').className=null;
        }
    }

    $('Mail').onblur=function()
    {
        let regex=/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
        let ovalue=this.value;
        let result=regex.test(ovalue);
        if(ovalue=='')
        {
            $('error6').innerHTML="不能为空！"
            $('error6').setAttribute('class','error');
        }
        else if(result==false)
        {
            $('error6').innerHTML="邮箱格式错误！"
            $('error6').setAttribute('class','error');
        }
        else
        {
            $('error6').innerHTML=""
            $('error6').className=null;
        }
    }
}
