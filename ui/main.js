var input_name=document.getElementById('comments');
var text=input_name.value;
var submit=document.getElementById('submit_btn');
submit.onclick = function()
{
    var comments1=['text1','text2','text3'];
    var list ='';
    for(var i=0; i<comments1.length;i++)
    {
        list +='<li>+comments1[i]+</li>';
        
    }
    var comments_list1=document.getElementById('comments_list');
    comments_list1.innerHTML=list;
};


