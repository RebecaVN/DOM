      const themeToggle = document.querySelector('#theme-toggle');
      const body = document.querySelector('body');
      const form = document.querySelector('#cadastro-form');
      const nomeInput = document.querySelector('#nome');
      const idadeInput = document.querySelector('#idade');
      const sexoInput = document.querySelector('#sexo');
      
      themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
      });
      form.addEventListener('submit', function() {
        location.reload();
        });
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (!nomeInput.value || !idadeInput.value || !sexoInput.value) {
          alert('Por favor, preencha todos os campos.');
          return;
        }else{
          alert('Formulário enviado!');
        }
      
      });
