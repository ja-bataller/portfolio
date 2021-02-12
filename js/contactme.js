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

   const spinner = `<button class="btn btn-primary btn-sm" type="button" disabled>
                        <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                        Sending...
                     </button>`;

   $('#sendEmailBtn').attr('disabled', 'disabled').html(spinner);

   emailjs.send('jdbt','Online_CV', templateParams)
      .then(function(response) {
         $('#sendEmailBtn').removeAttr('disabled').html('<i class="fas fa-paper-plane"></i> SEND');
         $('#contactModal').modal('hide');
         Swal.fire('Success', 'Your message has been sent successfully.', 'success')

         document.querySelector("#name").value = "";
         document.querySelector("#email").value = "";
         document.querySelector("#message").value = "";
      }, function(err) {
         $('#sendEmailBtn').removeAttr('disabled').html('<i class="fas fa-paper-plane"></i> SEND');
         Swal.fire('Error', 'Server error.', 'error')

         document.querySelector("#name").value = "";
         document.querySelector("#email").value = "";
         document.querySelector("#message").value = "";
      });
   });
}