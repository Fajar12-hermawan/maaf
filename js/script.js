
let body= document.body
let button = document.getElementById('button')
function mulai() {
    window.scrollTo(0,0)
    var mail_Section = $('#mailSection')
    $('#mail').attr('src', 'assets/img/mail.gif')
    setTimeout(function(){
        mail_Section.css('opacity', 0)
        $('body').removeClass ('overflow-hidden')
    }, 2000)
    setTimeout(function() {
        mail_Section.removeClass('d-flex')
        mail_Section.addClass('d-none')
    }, 4000);
}
 
let h4 = document.querySelector("#h4")
function go() {
    h4.textContent ="semoga di terima ya sayang"
    var card_Section =$('#cardSection')
    $('#card').attr('src', 'assets/img/giphy.gif')
    $('#maaf').attr('src', 'assets/img/donwload.png')
    
    
}