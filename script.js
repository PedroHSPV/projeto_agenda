document.addEventListener('DOMContentLoaded', function() {
    // Função para carregar os contatos do localStorage e exibir na tabela
    function loadContacts() {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const tableBody = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
        
        tableBody.innerHTML = ''; // Limpa a tabela antes de carregar
        
        contacts.forEach(contact => {
            const newRow = tableBody.insertRow();
            const nameCell = newRow.insertCell(0);
            const phoneCell = newRow.insertCell(1);
            nameCell.textContent = contact.name;
            phoneCell.textContent = contact.phone;
        });
    }

    // Função para adicionar um contato ao localStorage e atualizar a tabela
    function addContact(name, phone) {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push({ name, phone });
        localStorage.setItem('contacts', JSON.stringify(contacts));
        loadContacts();
    }

    // Carrega os contatos ao inicializar a página
    loadContacts();

    // Adiciona um ouvinte de evento ao formulário
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        // Obtém os valores de nome e telefone dos campos de entrada
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        // Verifica se os campos estão preenchidos
        if (name === "" || phone === "") {
            alert("Por favor, preencha ambos os campos.");
            return;
        }

        // Adiciona o contato e atualiza a tabela
        addContact(name, phone);

        // Limpa o formulário
        document.getElementById('contactForm').reset();
    });
});
