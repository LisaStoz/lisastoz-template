;(function ( $, window, document, undefined ) {

    $(document).ready(function(){

        $('.opener').each(function(){
            $(this).click(function(e){
                e.preventDefault();           
                $(this).fadeOut();            
                var note = $(this).closest('.article');
                $('.article').not(note).find('.note-additional').each(function(){
                    var closest_note = $(this).closest('.article');                    
                    closest_note.find('.closer').fadeOut();
                    $(this).slideUp(function(){                    
                        closest_note.find('.opener').fadeIn();                
                    });   
                });

                note.find('.note-additional').slideDown(function(){
                    note.find('.closer').fadeIn();
                });            
            });
        });
        $('.closer').each(function(){
            $(this).click(function(e){
                e.preventDefault();
                $(this).fadeOut();            
                var note = $(this).closest('.article');            
                note.find('.note-additional').slideUp(function(){
                    note.find('.opener').fadeIn();     
                });                   
            });
        });

        if (window.location.hash > '') {        
            $('.opener[href$='+window.location.hash+']').click();
        }

    });

})( jQuery, window, document );