;(function ( $, window, document, undefined ) {

    $(document).ready(function(){    
        
        function openNote(note) {
            
            /* switch hide/reveal controls */
            note.find('.link.open').fadeOut(function(){
                note.find('.link.close').fadeIn();
            });              
            note.find('h1 .open').removeClass('open').addClass('close');
            /* show actual content */
            note.find('.note-additional').slideDown();
        }
        
        function closeNote(note) {
            
            /* switch hide/reveal controls */                
            note.find('.link.close').fadeOut(function(){
                note.find('.link.open').fadeIn();
            });  
            note.find('h1 .close').addClass('open').removeClass('close');
            /* hide actual content */
            note.find('.note-additional').slideUp();
        }
            
        $('#main').on('click', '.open', function(e){   

            e.preventDefault();      

            /* display currently activated item */
            var article = $(this).closest('.article');
            openNote(article);
            
            /* hide all notes except the one just activated */
            $('.article').not(article).each(function(){
                closeNote($(this));                
            });                
                        
        });       
        
        $('#main').on('click', '.close', function(e){            
            e.preventDefault();
                        
            /* hide currently activated item */            
            closeNote($(this).closest('.article'));            

        });

        if (window.location.hash > '') {             
            openNote($(window.location.hash));            
        }

    });

})( jQuery, window, document );