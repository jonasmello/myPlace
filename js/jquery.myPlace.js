/*
 *  Project: myPlace
 *  Description: Em layouts onde o placeholder está sendo usado como label, o myPlace faz com que o placeholder permaneça sempre visível e assim não deixando o campo sem label mesmo após preenchido.
 *  Author: Jonas Mello
 *  License:
 */
 ;(function ($, window, document, undefined) {

    var pluginName = "myPlace",
        defaults = {};

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            var $form = $(this.element);
            $form.attr({
                'autocomplete' : 'off'
            })
            .find('[placeholder]').each(function () {
                var $this = $(this),
                    name = $this.attr('name'),
                    placeholder = $this.attr('placeholder'),
                    $span = $('<span />'),
                    position = $this.position();
                $this.removeAttr('placeholder');
                $span
                    .addClass(name + ' placeholder-text')
                    .text(placeholder)
                    .css({
                        'position' : 'absolute',
                        'top' : position.top,
                        'left' : position.left
                    });
                $this.parent().append($span);
            })
            .on({
                'focus' : function () {
                    var $this = $(this),
                        name = $this.attr('name');
                    $('.placeholder-text.' + name).addClass('focus');
                },
                'blur' : function () {
                    var $this = $(this),
                        name = $this.attr('name');
                    $('.placeholder-text.' + name).removeClass('focus');
                },
                'keydown change' : function () {
                    var $this = $(this),
                        name = $this.attr('name');
                    setTimeout(function () {
                        var val = $this.val();
                        if (val !== "")
                            $('.placeholder-text.' + name).addClass('value');
                        else
                            $('.placeholder-text.' + name).removeClass('value');
                    }, 1);
                }
            });

            $('.placeholder-text').on('click', function () {
                var name = $(this).attr('class').replace(' placeholder-text', '');

                $('[name="' + name + '"]').trigger('focus');

            });

        }
    };


    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

})(jQuery, window, document);
