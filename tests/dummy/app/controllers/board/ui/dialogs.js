import Controller from '@ember/controller';

export default Controller.extend({


  actions:{
    basic(){
      swal("Here's a message!");
    },

    basicWithTitle(){
      swal("Here's a message!", "It's pretty, isn't it?");
    },

    success(){
      swal("Good job!", "You clicked the button!", "success");
    },

    confirm(){
      swal({
          title: "Are you sure?",
          text: "You will not be able to recover this imaginary file!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          closeOnConfirm: false
      }, function () {
          swal("Deleted!", "Your imaginary file has been deleted.", "success");
      });
    },

    cancel(){
      swal({
          title: "Are you sure?",
          text: "You will not be able to recover this imaginary file!",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel plx!",
          closeOnConfirm: false,
          closeOnCancel: false
      }, function (isConfirm) {
          if (isConfirm) {
              swal("Deleted!", "Your imaginary file has been deleted.", "success");
          } else {
              swal("Cancelled", "Your imaginary file is safe :)", "error");
          }
      });
    },

    customIcon(){
      swal({
          title: "Sweet!",
          text: "Here's a custom image.",
          imageUrl: "/images/thumbs-up.png"
      });
    },

    htmlMessage() {
        swal({
            title: "HTML <small>Title</small>!",
            text: "A custom <span style=\"color: #CC0000\">html<span> message.",
            html: true
        });
    },

    autoClose(){
      swal({
          title: "Auto close alert!",
          text: "I will close in 2 seconds.",
          timer: 2000,
          showConfirmButton: false
      });
    },

    prompt(){
      swal({
          title: "An input!",
          text: "Write something interesting:",
          type: "input",
          showCancelButton: true,
          closeOnConfirm: false,
          animation: "slide-from-top",
          inputPlaceholder: "Write something"
      }, function (inputValue) {
          if (inputValue === false) return false;
          if (inputValue === "") {
              swal.showInputError("You need to write something!"); return false
          }
          swal("Nice!", "You wrote: " + inputValue, "success");
      });

    },

    ajax(){
      swal({
          title: "Ajax request example",
          text: "Submit to run ajax request",
          type: "info",
          showCancelButton: true,
          closeOnConfirm: false,
          showLoaderOnConfirm: true,
      }, function () {
          setTimeout(function () {
              swal("Ajax request finished!");
          }, 2000);
      });

    }

  }

});
