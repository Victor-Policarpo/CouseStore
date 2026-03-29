# CourseStore - CRUD & Auth System

Sistema de gerenciamento de cursos desenvolvido para a atividade de "Programacao para a Internet" da faculdade. O projeto simula uma plataforma de ensino (estilo Udemy) com autenticação de usuários, rotas protegidas e persistência em banco de dados MySQL.

## Tecnologias Utilizadas
* **Backend:** Node.js + Express
* **Frontend:** HTML5, CSS3 e JavaScript
* **Banco de Dados:** MySQL
* **Autenticação:** Express-Session

## Funcionalidades
- Login e Logout seguro com sessões.
- Listagem dinâmica de cursos consumindo API.
- Leitura, Criação, Edição e Exclusão (CRUD) de cursos.
- Cálculo dinâmico de preço total por licenças.
- Design responsivo inspirado na interface da Udemy.

## Como rodar o projeto
1.  **Clonar o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2.  **Instalar dependências:**
    ```bash
    npm install
    ```
3.  **Configurar o Banco de Dados:**
    * Execute o script `setup_db.sql` no seu MySQL.
    * Verifique as credenciais em `src/config/db.js` (Padrão: root/1234).
4.  **Iniciar o servidor:**
    ```bash
    node server.js
    ```
5.  **Acessar:** `http://localhost:3000`


---
Desenvolvido por **Victor** - Let it happen! 🚀