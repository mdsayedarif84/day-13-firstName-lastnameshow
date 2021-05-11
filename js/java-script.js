
$('#firstName').keyup(function (){
    var firstName    =   $('#firstName').val();
    $('#first').text(firstName);
});
$('#lastName').keyup(function (){
    var lastName    =   $('#lastName').val();
    $('#last').text(lastName);
});
$('#lastName').blur(function (){
    var firstName    =   $('#firstName').val();
    var lastName    =   $('#lastName').val();
    $('#fullName').text(firstName+' '+lastName);
});
//img click slide
$('#img1').click(function (){
    var img1SrcValue    =   $(this).attr('src');
    $('#mainImage').attr('src', img1SrcValue);
})
$('#img2').click(function (){
    var img1SrcValue    =   $(this).attr('src');
    $('#mainImage').attr('src', img1SrcValue);
})
$('#img3').click(function (){
    var img1SrcValue    =   $(this).attr('src');
    $('#mainImage').attr('src', img1SrcValue);
})
$('#img4').click(function (){
    var img1SrcValue    =   $(this).attr('src');
    $('#mainImage').attr('src', img1SrcValue);
})
$('#img5').click(function (){
    var img1SrcValue    =   $(this).attr('src');
    $('#mainImage').attr('src', img1SrcValue);
})
//click tag show slide
document.getElementById('clickbtn').onclick =   function (){
    var newHeadingElement   =   document.createElement('h1');
    var newParagraphElement   =   document.createElement('p');

    newHeadingElement.innerHTML ='This is heading element';
    newParagraphElement.innerHTML ='This is paragraph element';

    document.getElementById('div').appendChild(newHeadingElement);
    document.getElementById('div').appendChild(newParagraphElement);
}