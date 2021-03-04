const manifest_data = chrome.runtime.getManifest();

// Set version based on manifest
$('.version').html(`(${manifest_data.version})`);

// Inject utility params
$(document).on('click', '.utility', function() {
	const method_choosen = $(this).attr('data-method');

	const variable_inject = [
		`focus_ext_method = '${method_choosen}';`
	].join(' ');

	chrome.tabs.executeScript({
		code: variable_inject
	}, function() {
		chrome.tabs.executeScript({
			file: 'src/inject.js'
		}, function() {
			window.close();
		})
	});
});