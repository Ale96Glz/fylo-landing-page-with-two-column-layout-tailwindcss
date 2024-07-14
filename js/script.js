document.addEventListener("DOMContentLoaded", function () {
  const forms = [
    {
      formId: "subscription-form-1",
      emailId: "email-1",
      errorMessageId: "error-message-1",
    },
    {
      formId: "subscription-form-2",
      emailId: "email-2",
      errorMessageId: "error-message-2",
    },
  ];

  forms.forEach((form) => {
    const formElement = document.getElementById(form.formId);
    const emailElement = document.getElementById(form.emailId);
    const errorMessageElement = document.getElementById(form.errorMessageId);

    formElement.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = emailElement.value;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        emailElement.style.border = "2px solid red";
        errorMessageElement.textContent = "Please check your email";
        return false;
      } else {
        emailElement.style.border = "";
        errorMessageElement.textContent = "";
        this.submit();
      }
    });
  });
});
