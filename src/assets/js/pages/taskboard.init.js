(function ($) {
  var todoContainer, ckeditorInstance, boardCount = $(".tasks").length;

  //class mapping for task
  var classMapping = classMappingfn();

  //Month mapping with number
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


  //On comment button click
  $("#comment-btn").on("click", function () {
    $(this).fadeOut();
    $("#comment-form").removeClass("d-none").addClass("d-block");
  })

  //On comment submit button click
  $("#comment-submit-btn").on("click", function () {
    var data = ckeditorInstance.getData();
    alert(data);
  })

  //Discard button click
  $("#discard-btn").on("click", function () {
    $("#comment-btn").fadeIn();
    $("#comment-form").addClass("d-none").removeClass("d-block");
    ckeditorInstance.setData("Please Enter Comment");
  })

  //Initialize sortable
  initializeSortable();

  ClassicEditor.create(document.querySelector('#compose-comment')).then(function (editor) {
    ckeditorInstance = editor
  })
    .catch(function (error) {
      console.error("error", error);
    });
  //On add task plus click
  $(document).on("click", ".addTask", function () {
    todoContainer = $(this).parent().siblings().attr("id");
  })

  $('#add-general-task-modal').on('shown.bs.modal', function (e) {
    var elem = $(this).find(".dynamic-board");
    dynamicBoardDropdown(elem)
    // do something...
  })

  $('#remove-task-modal').on('shown.bs.modal', function (e) {
    var elem = $(this).find(".dynamic-board");
    dynamicBoardDropdown(elem)
    // do something...
  })

  $("#removeBoard").on("click", function(){
    //alert()
    var val = $(this).parents("#remove-task-modal").find(".dynamic-board").val();
    $("#"+val).parents(".tasks").remove();
    $(this).parents("#remove-task-modal").modal('hide');
  })
  //Initialize form
  $('#addTaskForm').validate({
    focusInvalid: false,
    rules: {
      'validation-taskname': {
        required: true
      },
      'validation-assignto': {
        required: true,
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      $(element).siblings(".validation-error").removeClass("d-none")
      return true
    },
    highlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.addClass("invalid-field")
    },
    unhighlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.removeClass("invalid-field");
      $(element).siblings(".validation-error").addClass("d-none")
    },
    submitHandler: function (form) {
      generateTask(form, todoContainer, classMapping, months)
    }
  });

  $('#addBoardForm').validate({
    focusInvalid: false,
    rules: {
      'validation-boardname': {
        required: true
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      $(element).siblings(".validation-error").removeClass("d-none")
      return true
    },
    highlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.addClass("invalid-field")
    },
    unhighlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.removeClass("invalid-field");
      $(element).siblings(".validation-error").addClass("d-none")
    },
    submitHandler: function (form) {
      var boardData = generateBoardHTML(form, boardCount);
      classMapping[boardData.name] = boardData.classes;
      boardCount = boardData.boardCount;
    }
  });

  $('#addGeneralTaskForm').validate({
    focusInvalid: false,
    rules: {
      'validation-taskname': {
        required: true
      },
      'validation-assignto': {
        required: true,
      }
    },
    errorPlacement: function errorPlacement(error, element) {
      $(element).siblings(".validation-error").removeClass("d-none")
      return true
    },
    highlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.addClass("invalid-field")
    },
    unhighlight: function (element) {
      var $el = $(element);
      var $parent = $el.parents('.form-group');
      $parent.removeClass("invalid-field");
      $(element).siblings(".validation-error").addClass("d-none")
    },
    submitHandler: function (form) {
      todoContainer = $(form).find(".dynamic-board").val();
      generateTask(form, todoContainer, classMapping, months)
    }
  });
}(jQuery))


function dynamicBoardDropdown(elem){
  $(elem).html("")
  $(".tasks").each(function(){
    var headerTitle = $(this).find(".task-header").text().trim();
    var id = $(this).find(".task-list-items").attr("id");
    var option = document.createElement("option");
    option.appendChild( document.createTextNode(headerTitle) );
    // set value property of opt
    option.value = id;
    $(elem).append(option);
  });
}

/**
* ----------------------------------------------
* Initialize class mapping  fn
* ----------------------------------------------
*/
function classMappingfn() {
  return {
    "critical": "badge badge-soft-primary",
    "high": "badge badge-soft-danger",
    "low": "badge badge-soft-info",
    "medium": "badge badge-soft-warning",
    "todo": "badge bg-primary",
    "in_progress": "badge bg-warning",
    "review": "badge bg-success",
    "done": "badge bg-danger",
  }
}

/**
* ----------------------------------------------
* Initialize class mapping for task will use in board fn  fn
* ----------------------------------------------
*/
function taskMappingClassesfn(){
  return {
    "bg-primary": "badge badge-primary",
    "bg-secondary": "badge bg-secondary",
    "bg-warning": "badge badge-primary",
    "bg-danger": "badge bg-danger",
    "bg-info": "badge badge-info",
    "bg-success": "badge badge-success",
    "bg-soft-primary": "badge badge-primary",
    "bg-soft-secondary": "badge bg-secondary",
    "bg-soft-warning": "badge badge-primary",
    "bg-soft-danger": "badge bg-danger",
    "bg-soft-info": "badge badge-info",
    "bg-soft-success": "badge badge-success"
  }
}

/**
* ----------------------------------------------
* Initialize sortable  fn
* ----------------------------------------------
*/
function initializeSortable() {
  $('.task-list-items').each(function () {
    Sortable.create($(this)[0], {
      group: 'shared',
      animation: 150,
      ghostClass: "bg-light",  // Class name for the drop placeholder
    });
  });
}

/**
* ----------------------------------------------
* Generate task form
* ----------------------------------------------
*/
function generateTask(form, todoContainer, classMapping, months) {
  var formdata = $(form).serializeArray();
  var date = new Date();
  var year = date.getFullYear();
  var month = months[date.getMonth()]
  var day = date.getDate();
  var container = document.createElement("div")
  container.classList.add("card", "border");
  var titleHTML = "", assignHTML = "", priorityHTML = "";
  var html = '<div class="card-body p-3">'
  $(formdata).each(function (index, obj) {
    if (obj.name === 'validation-taskname') {
      titleHTML = '<div class="inner-header-title mb-2 fs-15">' +
        '<h6 class="fs-15 fw-semibold mb-0"><a href="#" data-toggle="modal" data-target="#task-detail-modal" class="text-truncate text-dark">' + obj.value + '</a></h6>' +
        '<div class="dropdown">' +
        '<a href="#" class="btn-icon btn-icon-sm btn-icon-soft-primary dropdown-toggle edit-field-icon text-center" data-toggle="dropdown" aria-expanded="false">' +
        '<i class="mdi mdi-dots-vertical fs-sm"></i>' +
        '</a>' +
        '<div class="dropdown-menu dropdown-menu-right">' +
        '<a href="javascript:void(0);" class="dropdown-item"><i class="bx bx-edit-alt me-2"></i>Edit</a>' +
        '<a href="javascript:void(0);" class="dropdown-item"><i class="bx bx-user-plus me-2"></i>Add People</a>' +
        '<a href="javascript:void(0);" class="dropdown-item text-warning"><i class="bx bxs-exit me-2"></i>Leave</a>' +
        '<div class="dropdown-divider" ></div>' +
        '<a href="javascript:void(0);" class="dropdown-item text-danger"><i class="bx bx-trash-alt me-2"></i>Delete</a>' +
        '</div>' +
        '</div>' +
        '</div>';
    }
    if (obj.name === 'validation-assignto') {
      var name = obj.value;
      name = name.split(" ");
      if (name.length < 2) {
        assignHTML = '<div class="avatar avatar-sm bg-soft-info text-info me-2">' + name[0][0].toUpperCase() + '</div>'
      }
      if (name.length >= 2) {
        assignHTML = '<div class="avatar avatar-sm bg-soft-info text-info me-2">' + name[0][0].toUpperCase() + '' + name[1][0].toUpperCase() + '</div>'
      }
    }
    if (obj.name === 'validation-priority') {
      var headerName = $("#" + todoContainer).siblings("h5").text();
      var trimName = headerName.trim();
      headerName = headerName.trim().toLowerCase();
      headerName = headerName.split(" ").join("_");
      priorityHTML = '<div class="clearfix">' +
        '<span class="' + classMapping[headerName] + ' me-2">' + trimName + '</span>' +
        '<span class="' + classMapping[obj.value] + '">' + obj.value + '</span>' +
        '</div>';
    }
  });
  html += titleHTML + priorityHTML;
  html += '<div class="d-flex align-items-center text-muted fw-bold mt-4">' +
    assignHTML +
    '<span class="fs-13 me-2">' +
    '<i class="bx bx-comment-detail fs-xs align-middle me-1"></i>' +
    '<span class="align-middle"> 0</span>' +
    '</span>' +

    '<span class="fs-13 me-2">' +
    '<i class="bx bx-check-square fs-xs align-middle me-1"></i>' +
    '<span class="align-middle"> 0</span>' +
    '</span>' +
    '<span class="ms-auto fs-13">' +
    '<i class="bx bx-calendar fs-xs align-middle me-1"></i>' +
    '<span class="align-middle">' + day + ' ' + month + ' ' + year + '</span>' +
    '</span>' +
    '</div>';
  html = $.parseHTML(html);
  $(container).append(html);
  $("#" + todoContainer).append(container);
  document.getElementById("addTaskForm").reset();
  document.getElementById("addGeneralTaskForm").reset();
  $("#add-task-modal").modal('hide');
  $("#add-general-task-modal").modal('hide');
  $(".floating-label").removeClass("enable-floating-label");
}


/**
* ----------------------------------------------
* Generate board form
* ----------------------------------------------
*/
function generateBoardHTML(form, boardCount) {
  boardCount = boardCount+1;
  var taskMappingClasses = taskMappingClassesfn();
  var html = '<div class="tasks">';
  var headerTitle= "";
  var formdata = $(form).serializeArray();
  var boardClasses= [];
  var boardName = "";
  $(formdata).each(function (index, obj) {
    if (obj.name === "validation-boardtype") {
      boardClasses = (obj.value).split(",");
    }
    if (obj.name === "validation-boardname") {
      boardName = obj.value;
      headerTitle += '<h5 class="task-header">'+ obj.value +'<button class="btn avatar avatar-xs me-0 waves-effect waves-light addTask" data-toggle="modal" data-target="#add-task-modal">' +
        '<i class="bx bx-plus fs-sm"></i>' +
        '</span></h5>';
    }
  })
  html += headerTitle+'<div id="task-list-'+ boardCount +'" class="task-list-items border border-top-0"></div></div>';
  html = $.parseHTML(html);
  $(html).find(".task-header .btn").addClass(boardClasses[0]+" "+boardClasses[1]);
  $(".board").append(html)
  var id = $(form).attr("id");
  document.getElementById(id).reset();
  $("#add-board-modal").modal('hide');
  $(form).find(".floating-label").removeClass("enable-floating-label");
  boardName = boardName.trim().toLowerCase();
  boardName = boardName.split(" ").join("_");
  var sortElem = $(html).find(".task-list-items");
  Sortable.create(sortElem[0], {
    group: 'shared',
    animation: 150,
    ghostClass: "bg-light",  // Class name for the drop placeholder
  });
  return {
    name: boardName,
    classes: taskMappingClasses[boardClasses[1]],
    boardCount: boardCount
  }
}