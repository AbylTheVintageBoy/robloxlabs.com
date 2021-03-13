// IDE/BuildTemplates.js
function getSelectedTemplateType() {
	return $('div.templates[js-data-templatetype="' + $('ul.templatetypes li.selectedType').attr('js-data-templatetype') + '"]');
}
$(function () {
	var t = $('ul.templatetypes li'),
		n;
	t.click(function () {
		var n = getSelectedTemplateType();
		n.hide(),
			$('ul.templatetypes li.selectedType').removeClass('selectedType'),
			$(this).addClass('selectedType'),
			(n = getSelectedTemplateType()),
			n.show();
	}),
		(n = t.first()),
		n.addClass('selectedType'),
		getSelectedTemplateType().show(),
		Roblox.require('Widgets.PlaceImage', function () {
			Roblox.Widgets.PlaceImage.populate();
		}),
		$('.template').click(function () {
			Roblox.Client.isIDE()
				? window.editTemplateInStudio($(this).attr('placeid'))
				: Roblox.GenericModal.open(
						'New Project',
						'/images/Icons/img-alert.png',
						"To build using this template, open to this page in <a target='_blank' href='https://wiki.roblox.com/index.php/Studio'>ROBLOX Studio</a>.",
				  );
		}),
		$('.template a').removeAttr('href');
});
