$(document).ready(function () {
  $("#form").validate({
    rules: {
      fname: "required",
      lname: "required",
      email: "required",
      mobile: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10,
      },
      agree: "required",
    },
    messages: {
      fname: "First Name is Required",
      lname: "Last Name is Required",
      email: "Email Is Required",
      mobile: "Mobile No is Required",
      // agree: "Please the check the box",
    },
    submitHandler: function (form, event) {
      event.preventDefault();
      form.submit();
    },
  });
});
