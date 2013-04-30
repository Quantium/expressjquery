$(function(){
    
    $('#right-column').hide();     
    $('li.hero-name a').click(function() {     
        var name = $(this).text();
        $('#right-column').hide();
        $('#right-column h2').text(name);         
        $('#facts li').remove();       
        $.getJSON('/hero/' + name, function(data) {
            for (var i = 0; i < data.length; i++) {
                $('<li>').appendTo('#facts').text(data[i]);
            }
            $('#right-column').show();
        });        
        
        return false;
    });
    
});