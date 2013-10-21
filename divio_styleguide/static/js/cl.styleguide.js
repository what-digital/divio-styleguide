/*!
 * @author:	Divio AG
 * @copyright:	http://www.divio.ch
 */

//######################################################################################################################
// #NAMESPACES#
var Cl = window.Cl || {};

//######################################################################################################################
// #JQUERY EXTENSION#
Cl.Styleguide = new Class({

	initialize: function () {
		this.styleguide = $('.styleguide');

		// handles all navigational needs
		this.navigation();
		this.hint();
		// section typography
		this.typography();

		this.grid();
		this.forms();

		// hide code per default
		// this.styleguide.find('.code').hide();
	},

	navigation: function () {
		var sections = $('section');
			sections.hide();

		var nav = $('.styleguide-nav');
		var triggers = nav.find('li a');
			triggers.on('click', function (e) {
				e.preventDefault();
				// show element
				show($(this));
			});

		// helper function to display the correct content
		function show(el) {
			var hash = el.attr('href');

			// reset
			sections.hide();
			nav.find('li').removeClass('active');

			// show
			el.parent().addClass('active');

			var section = $(hash);
				section.show();

			if(window.history && window.history.pushState) {
				window.history.pushState('Styleguide', 'Category', hash);
			}
		}

		// initial loading
		var init = nav.find('a[href="'+window.location.hash+'"]');
		if(!init.length) {
			var initSubnav = $('.styleguide a[href="'+window.location.hash+'"]').closest('.styleguide-section').attr('id');
			// lets check if its a subnav
			init = $('a[href="#'+initSubnav+'"]');
		}
		if(!init.length) init = triggers.eq(0);
		init.trigger('click');
	},

	hint: function () {
		var styleguide = $('.styleguide');
		var hint = $('.styleguide-hint:visible');
		if(!hint.length) hint = $('.styleguide-hint').eq(0);
		var pos = hint.offset().top;
		var offset = 10;

		$(window).on('scroll', function () {
			hint = $('.styleguide-hint:visible');

			if(pos - $(window).scrollTop() < offset) {
				hint.css('top', ($(window).scrollTop() - pos + offset));
			} else {
				hint.css('top', 0);
			}
		});

		// handle code view
		var buttons = $('.btn-codeview');
			buttons.on('click', function (e) {
				e.preventDefault();
				if($(this).hasClass('btn-disabled')) {
					buttons.removeClass('btn-disabled').text('disable code view');
					styleguide.find('.code').show();
				} else {
					buttons.addClass('btn-disabled').text('enable code view');
					styleguide.find('.code').hide();
				}
			});
	},

	typography: function () {
		var container = $('#page-typography');

		// font type replacements
		container.find('.js-fonts').each(function (index, item) {
			item = $(item);
			var target = item.next();
			var text = item.html();
			item.html(text.replace('{tpl}', target.css('font-family').split(',')[0]));
		});

		// add htag tpl replacement
		container.find('h1, h2, h3, h4, h5, h6').each(function (index, item) {
			item = $(item);
			var text = item.html();
			item.html(text.replace('{tpl}', item.css('font-family').split(',')[0] + ' <span class="highlight">' + item.css('font-size') + '/' + item.css('line-height') + '</span>'));
		});

		// add color replacement
		container.find('.autocolor').each(function (index, item) {
			var color = $(item).text();
			if(color === '#') color = rgb2hex($(item).css('color'));
			$(item).css('background', color).css('color', 'white').text(color);
		});

		// function to convert hex format to a rgb color
		function rgb2hex(rgb) {
			rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
			function hex(x) {
				return ('0' + parseInt(x).toString(16)).slice(-2);
			}
			return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		}

	},

	grid: function () {
		var triggers = $('#page-grid .gblocks');
			triggers.bind('click', function () {
				triggers.removeClass('gblocks-active');
				$(this).addClass('gblocks-active');

				$('.grid-v').hide();
				$('.grid-v-' + (triggers.index(this) + 1)).fadeIn(300);
			});
			// activate first grid
			triggers.eq(0).trigger('click');

		// autoset code classes
		var codes = $('#page-grid .code');
			codes.each(function (index, item) {
				var cls = $(item).parent().parent().attr('class');
				$(item).find('code').text(cls);
			});
	},

	forms: function() {
		var container = $('#page-forms');
		container.find('.btn').bind('click', function(e) {
			e.preventDefault();
		});
	}

});