// Variable "method" needs to be set PRIOR to executing script
$(function() {
	window.focus_extension.setMethod(focus_ext_method);

	clean();

	switch(focus_ext_method) {
		case 'record-picker':
			$('.dataTable-recordRow[data-record]').addClass('focus-ext-picker');
			break;
		case 'detail-picker':
			$('.dataTable-recordRow[data-detail], .dataTable-detailRow[data-detail]').addClass('focus-ext-picker');
			break;
		case 'swiftbox-text-picker':
		case 'swiftbox-picker':
			$('.swiftbox').addClass('focus-ext-picker');
			break;
	}

	function clean() {
		$('.focus-ext-picker').removeClass('focus-ext-picker');
	}
});