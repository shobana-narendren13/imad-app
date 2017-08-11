var input_name=document.getElementById('comments');
var comments=input_name.value;
var submit=document.getElementById('submit_btn');
submit.onclick = function()
{
    var comment=['comments1','comments2','comments3'];
    var list ='';
    for(var i=0; i<comment.length;i++)
    {
        list +='<li>'+comment[i]+'</li>';
        
    }
    var comments_list1=document.getElementById('comments_list');
    comments_list1.innerHTML=list;
};


