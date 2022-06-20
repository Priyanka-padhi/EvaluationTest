$(document).ready(function () {

  $("#form").validate({

    rules: {
      Name: {
        required: true,
        minlength: 2,
        name_val: true
      },
      age: {
        required: true,
        min: 18,
        max: 25
      },
      email: {
        required: true,
        email_val: true
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10,
        phone_val: true
      },
      gender: {
        required: true
      },

      pickupTime1: {

        required: true
      },
      pickupTime2: {
        required: true
      },
      pickupTime3: {
        required: true
      },
      pickupTime4: {
        required: true
      },
      pickupTime5: {
        required: true
      },

      pickupTime6: {
        required: true
      },
      pickupTime7: {
        required: true
      },
      config: {
        required: true,
        //nextday_val: true
      }
    },
    errorPlacement: function (error, element) {
      if (element.attr('name') == 'gender') {
        error.insertAfter("#others");
      }
      else if (element.is(":checkbox")) {
        error.insertAfter("#nextday");
      }
      else {
        error.insertAfter(element);
      }
    }
  })


  $.validator.addMethod('name_val', function (value) {
    return /^[a-zA-Z ]*$/.test(value);
  }, 'The field can only contains alphabets and space');
  $.validator.addMethod('email_val', function (value) {
    return /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@tntra([\.])io/.test(value);
  }, 'You need to have tntra domain address');
  $.validator.addMethod('phone_val', function (value) {
    return /^[0-9]*$/.test(value);
  }, 'Phone number must be of 10 digits');

  // $.validator.addMethod('fun1',function(value){
  //   // event.preventDefault();
  //   return $('#sunday').val()=='on' && $('#pickupTime1').val() == " ";
  // }, 'Please enter Pick up time');
  // $.validator.addMethod('fun2',function(value){
  // // event.preventDefault();
  // return $('#monday').val() == 'on' && $('#pickupTime2').val() != " ";
  // }, 'Please enter Pick up time');
  // $.validator.addMethod('fun3',function(value){
  // // event.preventDefault();
  // return $('#tuesday').val() == 'on' && $('#pickupTime3').val() != " ";
  // }, 'Please enter Pick up time');
  // $.validator.addMethod('fun4',function(value){
  // // event.preventDefault();
  // return $('#wednesday').val() == 'on' && $('#pickupTime4').val() != " ";
  // }, 'Please enter Pick up time');
  // $.validator.addMethod('fun5',function(value){
  // // event.preventDefault();
  // return $('#thursday').val() == 'on' && $('#pickupTime5').val() != " ";
  // }, 'Please enter Pick up time');
  // $.validator.addMethod('fun6',function(value){
  // // event.preventDefault();
  // return $('#friday').val() == 'on' && $('#pickupTime6').val() != " ";
  // }, 'Please enter Pick up time');
  // $.validator.addMethod('fun7',function(value){
  // // event.preventDefault();
  // return $('#saturday').val() == 'on' && $('#pickupTime7').val() != " ";
  // }, 'Please enter Pick up time');
  // $.validator.addMethod('nextday_val',function(value){
  // // event.preventDefault();
  // if ($('#config').checked == true ){
  //     return false;
  // }

  // }, 'Please select time');






  // these functions will enable the checkboxes
  $(function () {
    enable_cb();
    $("#config").click(enable_cb);
    function enable_cb() {
      if (this.checked) {
        $("#sunday").removeAttr("disabled");
        $("#monday").removeAttr("disabled");
        $("#tuesday").removeAttr("disabled");
        $("#wednesday").removeAttr("disabled");
        $("#thursday").removeAttr("disabled");
        $("#friday").removeAttr("disabled");
        $("#saturday").removeAttr("disabled");
      }
    }

    disable_cb();
    $("#config").click(disable_cb);
    function disable_cb() {
      if (!this.checked) {
        $("#sunday").attr("disabled", true);
        $("#monday").attr("disabled", true);
        $("#tuesday").attr("disabled", true);
        $("#wednesday").attr("disabled", true);
        $("#thursday").attr("disabled", true);
        $("#friday").attr("disabled", true);
        $("#saturday").attr("disabled", true);
        $("#pickupTime1").attr("disabled", true);
        $("#pickupTime2").attr("disabled", true);
        $("#pickupTime3").attr("disabled", true);
        $("#pickupTime4").attr("disabled", true);
        $("#pickupTime5").attr("disabled", true);
        $("#pickupTim6").attr("disabled", true);
        $("#pickupTime7").attr("disabled", true);
      }
    }
  });
  $(function () {
    enable_cb();
    $("#sunday").click(enable_cb);
    function enable_cb() {
      if (this.checked) {
        $("#pickupTime1").removeAttr("disabled");
      }
      if (!this.checked) {
        $("#pickupTime1").attr("disabled", true);
      }
    }
  });
  $(function () {
    enable_cb();
    $("#monday").click(enable_cb);
    function enable_cb() {
      if (this.checked) {
        $("#pickupTime2").removeAttr("disabled");
      }
      if (!this.checked) {
        $("#pickupTime2").attr("disabled", true);
      }
    }
  });
  $(function () {
    enable_cb();
    $("#tuesday").click(enable_cb);
    function enable_cb() {
      if (this.checked) {
        $("#pickupTime3").removeAttr("disabled");
      }
      if (!this.checked) {
        $("#pickupTime3").attr("disabled", true);
      }
    }
  });
  $(function () {
    enable_cb();
    $("#wednesday").click(enable_cb);
    function enable_cb() {
      if (this.checked) {
        $("#pickupTime4").removeAttr("disabled");
      }
      if (!this.checked) {
        $("#pickupTime4").attr("disabled", true);
      }
    }
  });
  $(function () {
    enable_cb();
    $("#thursday").click(enable_cb);
    function enable_cb() {
      if (this.checked) {
        $("#pickupTime5").removeAttr("disabled");
      }
      if (!this.checked) {
        $("#pickupTime5").attr("disabled", true);
      }
    }
  });
  $(function () {
    enable_cb();
    $("#friday").click(enable_cb);
    function enable_cb() {
      if (this.checked) {
        $("#pickupTime6").removeAttr("disabled");
      }
      if (!this.checked) {
        $("#pickupTime6").attr("disabled", true);
      }
    }
  });
  $(function () {
    enable_cb();
    $("#saturday").click(enable_cb);
    function enable_cb() {
      if (this.checked) {
        $("#pickupTime7").removeAttr("disabled");
      }
      if (!this.checked) {
        $("#pickupTime7").attr("disabled", true);
      }
    }
  });


});

$("#form").submit(function (event) {
  event.preventDefault();

  // console.log("1",$('#pickupTime1').val())

  let Name = $('#Name').val();
  let age = $('#age').val();
  let phone = $("#phone").val();
  let email = $("#email").val();
  let gender = $('input[type=radio][name=gender]:checked').val();
  let sunday = $("#pickupTime1").val();
  let monday = $("#pickupTime2").val();
  let tuesday = $("#pickupTime3").val();
  let wednesday = $("#pickupTime4").val();
  let thursday = $("#pickupTime5").val();
  let friday = $("#pickupTime6").val();
  let saturday = $("#pickupTime7").val();
  debugger
  if ($('#Name').valid() === true &&
    $('#age').valid() === true &&
    $('#email').valid() === true &&
    $('#phone').valid() === true &&
    $('input[name=gender]:checked') != undefined &&
    $('#config').prop('checked', true) &&
    $('#pickupTime1') ? sunday : null &&
      $('#pickupTime2') ? monday : null &&
        $('#pickupTime3') ? tuesday : null &&
          $('#pickupTime4') ? wednesday : null &&
            $('#pickupTime5') ? thursday : null &&
              $('#pickupTime6') ? friday : null &&
                $('#pickupTime7') ? saturday : null
  ) {

    console.log({
      Name, age, phone, email, gender, sunday, monday, tuesday, wednesday, thursday, friday, saturday
    })

    const Data = {
      'Name': Name,
      'age': age,
      'phone': phone,
      'email': email,
      'gender': gender,
      'sunday': sunday,
      'monday': monday,
      'tuesday': tuesday,
      'wednesday': wednesday,
      'thursday': thursday,
      'friday': friday,
      'saturday': saturday

    }

    const userdata = localStorage.setItem('Data', JSON.stringify(Data));

    console.log('userdata', userdata);
    window.open('../HTML/formData_display.html')

  }



});





