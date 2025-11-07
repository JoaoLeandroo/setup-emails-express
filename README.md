# 📧 App Email

Aplicação Node.js/TypeScript para envio de emails utilizando Nodemailer e Express.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

## 🚀 Como executar o projeto

### 1. Clone o repositório (se aplicável)

```bash
git clone <url-do-repositorio>
cd app-email
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
PORT=3000
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=seu-email@gmail.com
MAIL_PASS=sua-senha-de-app
```

**Importante:**

- Para Gmail, você precisará gerar uma [Senha de App](https://support.google.com/accounts/answer/185833) ao invés de usar sua senha normal
- Ajuste `MAIL_HOST`, `MAIL_PORT` e `MAIL_SECURE` conforme o provedor de email que você utilizar
- `MAIL_SECURE` deve ser `"true"` para porta 465 (SSL) ou `"false"` para porta 587 (TLS)

### 4. Execute o projeto

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:PORT` (onde PORT é o valor definido no arquivo `.env`).

## 📡 Endpoints

### GET `/`

Retorna uma mensagem de confirmação.

**Resposta:**

```
Send Emails
```

### POST `/send-email`

Envia um email de recuperação de senha.

**Body (JSON):**

```json
{
  "email": "destinatario@example.com"
}
```

**Resposta de sucesso:**

```json
{
  "messageId": "..."
}
```

## 🛠️ Tecnologias utilizadas

- **Node.js** - Runtime JavaScript
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Express** - Framework web para Node.js
- **Nodemailer** - Biblioteca para envio de emails
- **dotenv** - Gerenciamento de variáveis de ambiente
- **ts-node-dev** - Execução e hot-reload para TypeScript

## 📁 Estrutura do projeto

```
app-email/
├── src/
│   ├── controllers/
│   │   └── send-email/
│   │       └── sendEmail.controller.ts
│   ├── services/
│   │   └── send-email/
│   │       └── sendEmail.service.ts
│   ├── routes.routes.ts
│   └── server.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Scripts disponíveis

- `npm run dev` - Inicia o servidor em modo de desenvolvimento com hot-reload

## ⚠️ Observações

- Certifique-se de configurar corretamente as credenciais de email no arquivo `.env`
- Para produção, considere usar variáveis de ambiente do sistema ao invés de arquivo `.env`
- O template de email atual é para recuperação de senha do site JoaoLeandro.site

## 📝 Licença

ISC
