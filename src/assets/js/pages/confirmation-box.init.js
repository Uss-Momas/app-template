$(function(){
	/**
	* ----------------------------------------------
	* Auto Close alert fn call
	* ----------------------------------------------
	*/
	autoCloseAlert();
	/**
	* ----------------------------------------------
	* Basic alert fn call
	* ----------------------------------------------
	*/
	basicAlert();
	/**
	* ----------------------------------------------
	* Confirmation alert fn call
	* ----------------------------------------------
	*/
	confirmationAlert();
	/**
	* ----------------------------------------------
	* Alert types fn call
	* ----------------------------------------------
	*/
	alertTypes();
	/**
	* ----------------------------------------------
	* Prompt alert fn call
	* ----------------------------------------------
	*/
	promptAlert();
	/**
	* ----------------------------------------------
	* Dialogs alert fn call
	* ----------------------------------------------
	*/
	dialogsAlert();
	/**
	* ----------------------------------------------
	* Background dismiss alert fn call
	* ----------------------------------------------
	*/
	backgroundDismissAlert();
	/**
	* ----------------------------------------------
	* Async alert fn call
	* ----------------------------------------------
	*/
	asyncAlert();
	/**
	* ----------------------------------------------
	* Auto close confirmation fn call
	* ----------------------------------------------
	*/
	autoCloseConfirmation();
	/**
	* ----------------------------------------------
	* Key Strokes alert fn call
	* ----------------------------------------------
	*/
	keystrokesAlert();
	/**
	* ----------------------------------------------
	* Alignment alert fn call
	* ----------------------------------------------
	*/
	alignmentAlert();
	/**
	* ----------------------------------------------
	* Image alert fn call
	* ----------------------------------------------
	*/
	imageAlert();
	/**
	* ----------------------------------------------
	* Animation alert fn call
	* ----------------------------------------------
	*/
	animationAlert();
	/**
	* ----------------------------------------------
	* draggale alert fn call
	* ----------------------------------------------
	*/
	draggableAlert();
}(jQuery));
/**
* ----------------------------------------------
* Auto Close alert fn
* ----------------------------------------------
*/
function autoCloseAlert(){
	$(".growls-btn > button").on("click", function () {
		var id = $(this).attr("id");
		var str = '<div class="growl border-'+id+'">'
       str += '<h6 class="growl-title">Toaster Header</h6>'
       str += '<div class="growl-message">Toaster Text</div>'
	   str += '</div>';
		pb.success(str, {
			duration: 15000,
			allowClose: true
		});
	});
}
/**
* ----------------------------------------------
* Basic alert fn
* ----------------------------------------------
*/
function basicAlert(){
	$('.example-p-1').on('click', function(){
		$.alert({
				title: 'Alert alert!',
				content: 'This is a simple alert. <br> with some <strong>HTML</strong> contents',
				icon: 'bx bx-rocket',
				animation: 'scale up',
				closeAnimation: 'scale',
				buttons: {
					okay: {
						text: 'Okay',
						btnClass: 'btn-primary'
					}
				}
		});
	});
}
/**
* ----------------------------------------------
* Confirmation alert fn
* ----------------------------------------------
*/
function confirmationAlert(){
	$('.example-p-2').on('click', function () {
		$.confirm({
			title: 'A secure action',
			content: 'Its smooth to do multiple confirms at a time. <br> Click confirm or cancel for another modal',
			icon: 'bx bx-question-mark',
			animation: 'scale',
			closeAnimation: 'scale',
			opacity: 0.5,
			buttons: {
				'confirm': {
					text: 'Proceed',
					btnClass: 'btn-primary',
					action: function () {
						$.confirm({
							title: 'This maybe critical',
							content: 'Critical actions can have multiple confirmations like this one.',
							icon: 'bx bx-alert',
							animation: 'scale',
							closeAnimation: 'zoom',
							buttons: {
								confirm: {
									text: 'Yes, sure!',
									btnClass: 'btn-warning',
									action: function () {
										$.alert('A very critical action <strong>triggered!</strong>');
									}
								},
								cancel: function () {
									$.alert('you clicked on <strong>cancel</strong>');
								}
							}
						});
					}
				},
				cancel: function () {
					$.alert('you clicked on <strong>cancel</strong>');
				},
				moreButtons: {
					text: 'something else',
					action: function () {
						$.alert('you clicked on <strong>something else</strong>');
					}
				},
			}
		});
	});
}
/**
* ----------------------------------------------
* Alert types fn
* ----------------------------------------------
*/
function alertTypes(){
	$('.example-p-70-type').on('click', function(){
		$.alert({
				title: 'Error',
				icon: 'fa fa-warning',
				type: 'orange',
				content: 'Something went wrong, please retry again after sometime.' +
						'<hr>' +
						'More types: red, green, orange, blue, purple, dark',
		});
	});
}
/**
* ----------------------------------------------
* Prompt alert fn
* ----------------------------------------------
*/
function promptAlert(){
	$('.example-p-7-1').on('click', function () {
		$.confirm({
			title: 'A simple form',
			content: 'url:form.html',
			buttons: {
				sayMyName: {
					text: 'Say my name',
					btnClass: 'btn-warning',
					action: function () {
						var input = this.$content.find('input#input-name');
						var errorText = this.$content.find('.text-danger');
						if (!input.val().trim()) {
							$.alert({
								content: "Please don't keep the name field empty.",
								type: 'red'
							});
							return false;
						} else {
							$.alert('Hello ' + input.val() + ', i hope you have a great day!');
						}
					}
				},
				later: function () {
					// do nothing.
				}
			}
		});
	});
}
/**
* ----------------------------------------------
* Dialogs alert fn
* ----------------------------------------------
*/
function dialogsAlert(){
	$('.example-p-4').on('click', function(){
		$.dialog({
				title: 'Title comes here',
				content: '<p>Just need a popup without buttons, <strong>no problem!</strong></p>' +
						'<h5 class="mb-30">disable the buttons</h5>' +
						'<button type="button" class="btn btn-outline-info">Click me to change the content</button>',
				animation: 'scale',
				onOpen: function(){
						var that = this;
						this.$content.find('button').click(function(){
								that.setContent('As simple as that !');
						})
				}
		});
	});
}
/**
* ----------------------------------------------
* Background dismiss alert fn
* ----------------------------------------------
*/
function backgroundDismissAlert(){
	$('.example-p-3').on('click', function(){
		$.alert({
				title: 'Background dismiss',
				content: 'Click outside the modal to close it.' +
						'<br>this modal has the `bottom` close animation',
				animation: 'scale',
				closeAnimation: 'scale',
				backgroundDismiss: true,
				buttons: {
						okay: {
								text: 'okay',
								btnClass: 'btn-primary ',
								action: function(){
										// do nothing
								}
						}
				}
		});
	});
}
/**
* ----------------------------------------------
* Async alert fn
* ----------------------------------------------
*/
function asyncAlert(){
	$('.example-p-5').on('click', function(){
		$.dialog({
				title: 'Asynchronous content',
				content: 'url:table.html',
				animation: 'scale',
				columnClass: 'medium',
				closeAnimation: 'scale',
				backgroundDismiss: true,
		});
	});
}
/**
* ----------------------------------------------
* Auto close confirmation fn
* ----------------------------------------------
*/
function autoCloseConfirmation(){
	$('.example-p-6').on('click', function(){
		$.confirm({
				title: 'Auto close',
				content: 'Some actions maybe critical, prevent it with the Auto close. This dialog will automatically trigger cancel after the timer runs out.',
				autoClose: 'cancelAction|10000',
				escapeKey: 'cancelAction',
				buttons: {
						confirm: {
								btnClass: 'btn-danger',
								text: 'Delete ben\'s account',
								action: function(){
										$.alert('You deleted Ben\'s account!');
								}
						},
						cancelAction: {
								text: 'Cancel',
								action: function(){
										$.alert('Ben just got saved!');
								}
						}
				}
		});
	});
}
/**
* ----------------------------------------------
* Key Strokes alert fn
* ----------------------------------------------
*/
function keystrokesAlert(){
	$('.example-p-7').on('click', function(){
		$.confirm({
				title: 'Keystrokes',
				escapeKey: true, // close the modal when escape is pressed.
				content: 'Press the <strong>escape key</strong> to close the modal. That works.' +
						'<br> press <strong>enter key</strong> to trigger okay.' +
						'<br> press <strong>shift or ctrl key</strong> to trigger cancel.',
				backgroundDismiss: true, // for escapeKey to work, backgroundDismiss should be enabled.
				buttons: {
						okay: {
								keys: [
										'enter'
								],
								action: function(){
										$.alert('<strong>Okay button</strong> was triggered.');
								}
						},
						cancel: {
								keys: [
										'ctrl',
										'shift'
								],
								action: function(){
										$.alert('<strong>Cancel button</strong> was triggered.');
								}
						}
				},
		});
	});
}
/**
* ----------------------------------------------
* Alignment alert fn
* ----------------------------------------------
*/
function alignmentAlert(){
	$('.example-pc-1').on('click', function(){
		$.confirm({
				title: 'Gracefully center aligned',
				content: '<p>You can add content and not worry about the alignment. The goal is to make a Interactive dialog!.</p>' +
						'<button type="button" class="btn btn-outline-info my-15">Click me to add more content</button> <div id="contentArea"></div> ',
				buttons: {
						someButton: {
								text: 'Add wow',
								btnClass: 'btn-success',
								action: function(){
										this.$content.find('#contentArea').append('<br>Wowww');
										return false; // prevent dialog from closing.
								}
						},
						someOtherButton: {
								text: 'Clear it',
								btnClass: 'btn-warning',
								action: function(){
										this.$content.find('#contentArea').html('');
										return false; // prevent dialog from closing.
								}
						},
						close: function(){
								// lets the user close the modal.
						}
				},
				onOpen: function(){
						// onOpen attach the events.
						var that = this;
						this.$content.find('button').click(function(){
								that.$content.find('#contentArea').append('<p>New content added</p>');
						});
				},
		});
	});
}
/**
* ----------------------------------------------
* Image alert fn
* ----------------------------------------------
*/
function imageAlert(){
	var getNewMeme = function(){
		var prevTitle = $('.meme-text').html();
		$('.meme-text').html('Loading memes...');
		$.get('https://craftpip.com/api/memes.json', {
				previousTitle: prevTitle,
		}).then(function(data){
				$('.meme-text').html(data.title);
				$('.meme-image img').attr('src', data.image);
		}).catch(function(err){

		})
	};
	// todo: images is not tested yet.
	$('.example-pc-2').on('click', function(){
			$.confirm({
					title: 'Adding images',
					content: '' +
							'<div class="meme-image"><img style="border: solid 1px #ddd;\n' +
							'    margin-bottom: 10px;\n' +
							'    border-radius: 4px;" src="" alt=""></div>' +
							'<div class="meme-text" style="font-weight: bold;margin-bottom: 20px;"></div>' +
							'<div>Memes from <a target="_blank" href="#">ProgrammingHumor</a></div>' +
							'',
					animation: 'scale',
					animationClose: 'top',
					buttons: {
							confirm: {
									text: 'Next meme',
									btnClass: 'btn-primary ',
									action: function(){
											getNewMeme();
											return false;
									}
							},
							cancel: function(){
									// lets the user close the modal.
							}
					},
					onContentReady: function(){
							getNewMeme();
					}
			});
	});
}
/**
* ----------------------------------------------
* Animation alert fn
* ----------------------------------------------
*/
function animationAlert(){
	$(' .example-pc-3').on('click', function(){
		$.alert({
				title: 'Animations',
				content: 'jquery-confirm provides a lot of open &amp; close animations out of the box. <br>The best part is, you can add custom ones too.',
				animation: 'scale',
				closeAnimation: 'right',
				buttons: {
						zoom: function(){
								this.setCloseAnimation('zoom');
						},
						rotate: function(){
								this.setCloseAnimation('rotate');
						},
						scale: function(){
								this.setCloseAnimation('scale');
						},
						top: function(){
								this.setCloseAnimation('top');
						}
				},
				backgroundDismiss: function(){
						return false;
				},
		});
	});
}
/**
* ----------------------------------------------
* draggale alert fn -- works on box title
* ----------------------------------------------
*/
function draggableAlert(){
	$('.example-p-7-2').on('click', function(){
		$.alert({
				title: 'A draggable dialog',
				content: 'This dialog is draggable, use the title to drag it around. It wont touch the screen borders',
				type: 'blue',
				animation: 'scale',
				draggable: true,
		});
	});
}