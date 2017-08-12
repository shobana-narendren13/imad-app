
var submit=document.getElementById('submit_btn');
submit.onclick = function()
{
    var request=new XMLHttpRequest();
    request.onreadystatechange=function()
  {
        if(request.readyState === XMLHttpRequest.DONE )
       {
            if(request.status === 200)
            {
                var comment=request.responseText;
                comment=JSON.parse(comment);
           
    //var comment=['comments1','comments2','comments3'];
    var list ='';
    for(var i=0; i<comment.length;i++)
    {
        list +='<li>'+comment[i]+'</li>';
        
        
    }
    list.toString();
    var ul=document.getElementById('comments_list');
    ul.innerHTML=list;
    
            }
        }
        
};
};

var input_name=document.getElementById('comments');
var comments=input_name.value;
request.open('GET','http://imad.hasura.io/submit-name?comments=' + comments,true);
request.send(null);

