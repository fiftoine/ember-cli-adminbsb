import Component from '@ember/component';


export default Component.extend({
  classNames:['menu'],

  didInsertElement() {
    this._super(...arguments);

    this.$('.menu-toggle').on('click', function (e) {
        var $this = $(this);
        var $content = $this.next();

        if ($($this.parents('ul')[0]).hasClass('list')) {
            var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');

            $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
                if ($(val).is(':visible')) {
                    $(val).prev().toggleClass('toggled');
                    $(val).slideUp();
                }
            });
        }

        $this.toggleClass('toggled');
        $content.slideToggle(320);
    });


  }
});
