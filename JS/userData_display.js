$(document).ready(function() {
  
    $("#form").validate({
      onsubmit: true,
    rules: {
    Name : {
    required: true,
    minlength: 2,
    name_val:true
    },
    age:{
     required:true,
     min: 18,
     max: 25
    },
    email: {
        required:true,
     email_val:true
    },
    phone : {
     required: true,
     minlength:10,
     maxlength:10,
     phone_val:true
    },
    gender: {
      required: true
      },
      
      pickupTime1:{
        required: true
      },
      pickupTime2:{
        required:true
      },
      pickupTime3:{
        required:true
      },
      pickupTime4:{
        required:true
      },
      pickupTime5:{
        required:true
      },
      pickupTime6:{
        required:true
      },
      pickupTime7:{
        required:true
      }
  },
    errorPlacement: function(error, element) {
      if ( element.attr('name') == 'gender' ) {
          error.insertAfter("#others");
      }
      else { 
          error.insertAfter( element);
      }
  }
  });
  });

  $.validator.addMethod('name_val', function (value) {
    return /^[a-zA-Z ]*$/.test(value);
}, 'The field can only contains alphabets and space');
$.validator.addMethod('email_val', function (value) {
    return /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@tntra([\.])io/.test(value);
}, 'You need to have tntra domain address');
$.validator.addMethod('phone_val', function (value) {
    return /^[0-9]*$/.test(value);
}, 'Phone number must be of 10 digits');

$(function() {
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
          $("#sunday").attr("disabled",true);
          $("#monday").attr("disabled",true);
          $("#tuesday").attr("disabled",true);
          $("#wednesday").attr("disabled",true);
          $("#thursday").attr("disabled",true);
          $("#friday").attr("disabled",true);
          $("#saturday").attr("disabled",true);
          $("#1").attr("disabled",true);
          $("#2").attr("disabled",true);
          $("#3").attr("disabled",true);
          $("#4").attr("disabled",true);
          $("#5").attr("disabled",true);
          $("#6").attr("disabled",true);
          $("#7").attr("disabled",true);
        }
    }
  });
$(function() {
    enable_cb();
    $("#sunday").click(enable_cb);
    function enable_cb() {
        if (this.checked) {
          $("#1").removeAttr("disabled");
        }
        if (!this.checked) {
            $("#1").attr("disabled",true);
          }
    }
});
$(function() {
    enable_cb();
    $("#monday").click(enable_cb);
    function enable_cb() {
        if (this.checked) {
          $("#2").removeAttr("disabled");
        }
        if (!this.checked) {
            $("#2").attr("disabled",true);
          }
    }
});
$(function() {
    enable_cb();
    $("#tuesday").click(enable_cb);
    function enable_cb() {
        if (this.checked) {
          $("#3").removeAttr("disabled");
        }
        if (!this.checked) {
            $("#3").attr("disabled",true);
          }
    }
});
$(function() {
    enable_cb();
    $("#wednesday").click(enable_cb);
    function enable_cb() {
        if (this.checked) {
          $("#4").removeAttr("disabled");
        }
        if (!this.checked) {
            $("#4").attr("disabled",true);
          }
    }
});
$(function() {
    enable_cb();
    $("#thursday").click(enable_cb);
    function enable_cb() {
        if (this.checked) {
          $("#5").removeAttr("disabled");
        }
        if (!this.checked) {
            $("#5").attr("disabled",true);
          }
    }
});
$(function() {
    enable_cb();
    $("#friday").click(enable_cb);
    function enable_cb() {
        if (this.checked) {
          $("#6").removeAttr("disabled");
        }
        if (!this.checked) {
            $("#6").attr("disabled",true);
          }
    }
});
$(function() {
    enable_cb();
    $("#saturday").click(enable_cb);
    function enable_cb() {
        if (this.checked) {
          $("#7").removeAttr("disabled");
        }
        if (!this.checked) {
            $("#7").attr("disabled",true);
          }
    }
});


$("#form").submit(function (event) {
    event.preventDefault();

    if($('#Name').valid() === true && $('#age').valid() === true && $('#email').valid() === true && $('#phone').valid() === true  &&  $('input[name=gender]:checked')!= undefined && ($('#config').prop('checked',true)))

    

    
    // if(( ($('#sunday').valid() === true)) && ( ($('#1').valid() === true)))
    //   if(( ($('#monday').valid() === true)) && ( ($('#2').valid() === true)))
    //     if(( ($('#tuesday').valid() === true)) && ( ($('#3').valid() === true)))
          
    
    
    {
        let Name = $('#Name').val();
        let age = $('#age').val();
        let phone =$("#phone").val();
        let email=$("#email").val();
        let gender =$('input[type=radio][name=gender]:checked').val();
        let sunday = $('#1').val();
        let monday = $('#2').val();
        let tuesday = $('#3').val();
        let wednesday = $('#4').val();
        let thursday = $('#5').val();
        let friday = $('#6').val();
        let saturday = $('#7').val();


        console.log({
          Name,age,phone,email,gender,sunday,monday,tuesday,wednesday,thursday,friday,saturday
        })
  
        const Data = {
          'Name' : Name,
          'age': age,
          'phone':phone,
          'email':email,
          'gender':gender,
          'sunday':sunday,
          'monday': monday,
          'tuesday':tuesday,
          'wednesday':wednesday,
          'thursday':thursday,
          'friday': friday,
          'saturday':saturday

        }
      
        const userdata = localStorage.setItem('Data', JSON.stringify(Data));
  
       console.log('userdata',userdata);
       window.open('../HTML/formData_display.html')
  
    }
    
  
});


  
// ( ($('#1').valid() === true) || ($('#2').valid() === true) || ($('#3').valid() === true) || ($('#4').valid() === true) || ($('#5').valid() === true) || ($('#6').valid() === true) || ($('#7').valid() === true))
// && ($('name = pickupTime').valid() === true)