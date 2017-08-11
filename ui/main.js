var input_name=document.getElementById('comments');
var text=input_name.value;
var submit=document.getElementById('submit_btn');
submit.onclick = function()
{
    var comments=['text1','text2','text3'];
    var list ='';
    for(var i=0; i<comments.length;i++)
    {
        list +='<li>+comments[i]+</li>';
        
    }
    var comments_list1=getElementById('comments_list');
    comments_list1.innerHTML=list;
};


