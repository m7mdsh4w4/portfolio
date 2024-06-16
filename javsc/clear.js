function ClearForm() {
     const form = document.querySelector('.needs-validation');
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
  
     for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  }