window.focus_extension = {
	method   : 'none',
	icon_16  : chrome.extension.getURL('images/icon_16.png'),
	setMethod: function(method) {
		window.focus_extension.method = method;
	}
};

$(function(ext) {
	$(document).on('click', '.focus-ext-picker', function(e) {
		const $this  = $(this);
		e.preventDefault();
		e.stopPropagation();

		let copy = 'Unknown';
		if(ext.method == 'record-picker') {
			copy = $this.attr('data-record');
		}

		if(ext.method == 'detail-picker') {
			copy = $this.attr('data-detail');
		}

		if(ext.method == 'swiftbox-picker') {
			copy = $this.find('.swift-box-hidden-input').attr('value');
		}

		if(ext.method == 'swiftbox-text-picker') {
			copy = $this.find('.swift-box-text-value').text();
		}

		copyStringToClipboard(copy);
		Toastify({
			text: `Copied to clipboard: ${copy}`,
			position: "center",
			stopOnFocus: false,
			className: 'focus-ext-toast',
			avatar: ext.icon_16,
			duration: 3000
		}).showToast();

		// Unset picker
		$('.focus-ext-picker').removeClass('focus-ext-picker');
		window.focus_extension.method = 'none';

		return false;
	});

	function copyStringToClipboard(str) {
		// Create new element
		var el = document.createElement('textarea');

		// Set value (string to be copied)
		el.value = str;

		// Set non-editable to avoid focus and move outside of view
		el.setAttribute('readonly', '');
		el.style = {position: 'absolute', left: '-9999px'};
		document.body.appendChild(el);

		// Select text inside element
		el.select();

		// Copy text to clipboard
		document.execCommand('copy');

		// Remove temporary element
		document.body.removeChild(el);
	}

}(window.focus_extension));
