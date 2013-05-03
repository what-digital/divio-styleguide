/*!
 * @author:	Divio AG
 * @copyright:	http://www.divio.ch
 */

//######################################################################################################################
// #NAMESPACES#
var Cl = window.Cl || {};

jQuery(document).ready(function($){
//######################################################################################################################
// #JQUERY EXTENSION#
	Cl.Styleguide = {

		init: function () {
			this.base();
			this.grid();
			this.typography();
			this.forms();
		},

		base: function () {
			var sections = $('section');
				sections.hide();
			var triggers = $('#guidenav li a');
				triggers.bind('click', function (e) {
					e.preventDefault();
					show($(this).attr('href'));
				});

			function show(hash) {
				if(hash === '#page-all') {
					sections.show();
				} else {
					sections.hide();
					var section = $(hash);
						section.show();
				}

				if(window.history && window.history.pushState) {
					window.history.pushState('Styleguide', 'Category', hash);
				}
			}
			if(window.location.hash) {
				// if an hash is set, load the specific section
				show(window.location.hash);
			} else {
				// show the index page per default
				show('#page-index');
			}

			// menu hover
			var timer = function () {};
			var navcontainer = $('#guidenav');
				navcontainer.hide();
				navcontainer.bind('mouseleave', function () {
					navcontainer.hide();
				});
				navcontainer.bind('mouseenter', function () {
					clearTimeout(timer);
				});
			var nav = $('.guidenav-trigger a');
				nav.bind('mouseenter', function () {
					clearTimeout(timer);
					navcontainer.show();
				});
				nav.bind('mouseleave', function () {
					timer = setTimeout(function () {
						navcontainer.hide();
					}, 200);
				});
				nav.bind('click', function (e) {
					e.preventDefault();
					show($(this).attr('href'));
				});
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

		typography: function () {
			var container = $('#page-typography');

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
				var color = $(item).contents(':not(span)').text();
				$(item).css('background', color);
			});
		},

		forms: function() {
			var container = $('#page-forms');
			container.find('.btn').bind('click', function(e) {
				e.preventDefault();
			});
		}

	};
	Cl.Styleguide.init();
});