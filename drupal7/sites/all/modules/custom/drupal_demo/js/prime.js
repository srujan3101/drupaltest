(function ($) {

  Drupal.behaviors.PrimeNodeStyle = {
    attach: function (context, settings) {
      $('.block-drupal-demo').addClass('prime-nodes-block');
    }
  }

})(jQuery);
