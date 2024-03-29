/* =============================================================

    Smooth Scroll 1.1
    Animated scroll to anchor links.

    Script by Charlie Evans.
    https://www.sycha.com/jquery-smooth-scrolling-internal-anchor-links

    Rebounded by Chris Ferdinandi.
    https://gomakethings.com

    Free to use under the MIT License.
    https://gomakethings.com/mit/
    
 * ============================================================= */

(function($) {
    jQuery(document).ready(function($) {
        $(".scroll").click(function(event){ // When a link with the .scroll class is clicked
            event.preventDefault(); // Prevent the default action from occurring
            $('html,body').animate({scrollTop:$(this.hash).offset().top-0}, 1000, 'easeInSine'); // Animate the scroll to this link's href value
        });
    });
})(jQuery);
