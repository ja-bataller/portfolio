const contactUsForm = document.querySelector("#contactUsForm");
if(contactUsForm){
   contactUsForm.addEventListener('submit', async (e) => {
   e.preventDefault();
   
   const name = document.querySelector('#name').value;
   const email = document.querySelector('#email').value;
   const message = document.querySelector("#message").value;


   let templateParams = {
      email: email,
      name: name,
      to_name: 'johnanthonybataller.ce@gmail.com',
      subject: "ONLINE CV",
      message: message
   };

   emailjs.send('jdbt','Online_CV', templateParams)
      .then(function(response) {

         iziToast.success({
            title: 'Success',
            position: "topRight",
            message: 'Email successfully sent.',
        });

         $(".mail-btn").on("click touchstart", function () {
            $(this).addClass("fly");
            that = this;
            setTimeout(function () {
            $(that).removeClass("fly");
            }, 5400);
         });
         

         // Swal.fire(
         //    'Good job!',
         //    'You clicked the button!',
         //    'success'
         //  )

         document.querySelector("#name").value = "";
         document.querySelector("#email").value = "";
         document.querySelector("#message").value = "";

      }, function(err) {
         print("error")

         document.querySelector("#name").value = "";
         document.querySelector("#email").value = "";
         document.querySelector("#message").value = "";
      });
   });
}