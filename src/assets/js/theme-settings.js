$(function(){
	//create session object
	var themeSettingObj = {
		"fixed_header" : false,
		"dark_sidebar" : false,
		"remove_gred"  : false,
		"remove_hgred" : false,
		"active_rounded" : false
	}
	// Check if theme obj in session storage then apply the theme setting to the app
	if(sessionStorage.getItem('themeObj')){
		themeSettingObj = applyThemeSettings();
	}
    // Open page settings
	$(".open-setting-btn").on('click', function () {
		$(this).parents('.theme-settings-wrapper').addClass('open-settings')
	});

	// Close page settings
	$(".close-setting-btn").on('click', function () {
		$(this).parents('.theme-settings-wrapper').removeClass('open-settings')
	})

	// Change navbar background color
	$(".theme-settings-layout .colors li").on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
		let dataClass = $(this).attr('class').split(" ")[0];
		$('.header').removeClass().addClass("header " + dataClass);
	});

	// Change active background color
	$(".theme-settings-layout .sidebar-colors li").on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
		let dataClass = $(this).attr('class').split(" ")[0];
		$(".side-navbar .nav-link.active").removeClass().addClass("nav-link active "+ dataClass);
	})

	$(".theme-settings-layout .body-gred-colors li").on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
		let dataClass = $(this).attr('class').split(" ")[0];
		$('.content-gred').removeClass().addClass("content-gred " + dataClass);
	})

	// Theme setting's
	$(".theme-settings-layout .switcher-input").on("change", function () {
		var id = $(this).attr('id');
		var checked = $(this).prop('checked');
		applyClass(id, checked, themeSettingObj);
	});

	// Fixed and static navbar and sidebar
	$(".theme-settings-layout .dropdown-menu > a").on("click", function () {
		let attrVal = $(this).attr("data-val");
		$(this).parents(".btn-group").children().first().text($(this).text());
		$(this).addClass("active").siblings().removeClass("active");
		$("body").removeClass("fixed-header");
		$(".switcher .switcher-input").prop("checked", false);
		if (attrVal === 'fixed') {
			$("body").addClass("fixed-layout");
		}
		else {
			$("body").removeClass("fixed-layout");
		}
	});
}(jQuery))


/**
 * @description set session storage if one of the theme setting apply
 * @param key is basically id comes from toggle's in theme setting. Key is current toggle id. 
 * @param value is basically checked comes from toggle's in theme setting. checked is current toggle value. 
 * @param themeSettingObj update theme setting global object reference
 */
function setThemeSession(key, value, themeSettingObj){
	themeSettingObj[key] = value;
	themeSettingObj = JSON.stringify(themeSettingObj);
	sessionStorage.setItem("themeObj", themeSettingObj);
}


/**
 * @description apply classes based on theme settings
 * @param id id to where apply the class 
 * @param checked set default checked on theme setting toggle 
 */
function applyClass(id, checked, themeSettingObj){
	setThemeSession(id, checked, themeSettingObj);
	$('#'+id).prop('checked', checked);
	switch(id){
		case 'fixed_header' : 
			$("body").toggleClass("fixed-header");
			return;
		case 'dark_sidebar' : 
			$(".side-navbar").toggleClass("dark-sidebar");
			if($(".side-navbar").hasClass("dark-sidebar")){
				$(".logo-header .navbar-brand img").attr("src","../../assets/images/logo.png")
			}
			else{
				$(".logo-header .navbar-brand img").attr("src","../../assets/images/logo-blk.png")
			}
			return;
		case 'remove_gred' : 
			if($('.content-gred').length){
				$(".content-gred").toggle();
				$(".content-inner").toggleClass('text-over-gred');
			}
			return;
		case 'remove_hgred' : 
			$(".header").toggleClass("gred-default");
			return;
		case 'active_rounded' : 
			$(".side-navbar .nav-link.active").toggleClass("half-rounded");
			return;
	}
}

/**
 *
 * @description apply theme setting object from session storage 
 *
 */
function applyThemeSettings(){
	themeSettingObj = JSON.parse(sessionStorage.getItem('themeObj'));
	if(!$('.content-gred').length){
		themeSettingObj['remove_gred'] = true;
	}
	for(var i in themeSettingObj){
		if(themeSettingObj[i]){
			applyClass(i, themeSettingObj[i], themeSettingObj);
		}			
	}
	return themeSettingObj
}