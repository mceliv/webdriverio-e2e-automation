# 🚀 WebdriverIO E2E Automation

Projeto de automação de testes **End-to-End (E2E)** desenvolvido com **WebdriverIO**, **JavaScript** e **Mocha**, utilizando o padrão **Page Object Model (POM)**.

O projeto utiliza o [Automation Exercise](https://automationexercise.com/) como ambiente de prática e demonstração de automação web.

## 🎯 Objetivo

Demonstrar uma estrutura de automação E2E organizada, escalável e de fácil manutenção, aplicando boas práticas de engenharia de qualidade e automação de testes.

O projeto foi estruturado para facilitar:

- Manutenção dos testes
- Reutilização de componentes
- Separação entre regra de negócio e interação com a interface
- Organização e legibilidade do código
- Geração de relatórios
- Evolução para CI/CD

## 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| **WebdriverIO** | Automação de navegador |
| **JavaScript** | Linguagem principal |
| **Mocha** | Test runner |
| **Allure** | Relatórios de execução |
| **Chrome** | Navegador utilizado |
| **Node.js / npm** | Ambiente e dependências |
| **Git / GitHub** | Versionamento |

## 🏗️ Arquitetura

O projeto utiliza o padrão **Page Object Model (POM)**.

Cada página possui uma classe responsável por seus elementos e ações, enquanto os testes ficam responsáveis pelo fluxo e pelas validações.

### Page Objects

- `Page` — classe base com funcionalidades compartilhadas.
- `HomePage` — interações e validações da página inicial.
- `LoginPage` — funcionalidades de login.
- `SignupPage` — preenchimento e criação de usuário.
- `AccountCreatedPage` — validações da criação da conta.
- `AccountDeletedPage` — validações da exclusão da conta.

Essa abordagem reduz duplicação de código e facilita a manutenção dos seletores.

## 📁 Estrutura do projeto

```text
webdriverio-e2e-automation/
│
├── test/
│   ├── pageobjects/
│   │   ├── page.js
│   │   ├── home.page.js
│   │   ├── login.page.js
│   │   ├── signup.page.js
│   │   ├── account-created.page.js
│   │   └── account-deleted.page.js
│   │
│   └── specs/
│       └── test.e2e.js
│
├── wdio.conf.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- **Node.js**
- **npm**
- **Google Chrome**
- **Java** — necessário para o Allure Report
- **Git**

Verifique as instalações:

```bash
node --version
npm --version
google-chrome --version
java -version
git --version
```

## 🚀 Instalação

Clone o repositório:

```bash
git clone https://github.com/mceliv/webdriverio-e2e-automation.git
cd webdriverio-e2e-automation
```

Instale as dependências:

```bash
npm install
```

## ▶️ Execução dos testes

Execute a suíte automatizada com:

```bash
npm test
```

O WebdriverIO iniciará o navegador configurado e executará os testes.

## 📊 Relatório Allure

O projeto utiliza o **Allure Report** para apresentar os resultados das execuções.

### Gerar o relatório

```bash
npm run report:generate
```

### Abrir o relatório

```bash
npm run report:open
```

O relatório permite visualizar:

- Status dos testes
- Tempo de execução
- Etapas executadas
- Falhas
- Evidências da execução
- Screenshots em cenários de erro, quando configurados

Os diretórios `allure-results/` e `allure-report/` são ignorados pelo Git.

## 📋 Principais comandos

```bash
# Instalar dependências
npm install

# Executar os testes
npm test

# Gerar relatório Allure
npm run report:generate

# Abrir relatório Allure
npm run report:open
```


## 🧠 Boas práticas aplicadas

### Page Object Model

Centralização dos elementos e ações de cada página.

### Seletores estáveis

Preferência por atributos específicos da aplicação, como `data-qa`, reduzindo a dependência de seletores frágeis.

### Separação de responsabilidades

Os Page Objects concentram a interação com a aplicação, enquanto os testes descrevem o fluxo que deve ser validado.

### Reutilização

Funcionalidades comuns são mantidas na classe base para evitar duplicação.

### Validações orientadas ao comportamento

As validações priorizam o estado esperado da aplicação, evitando depender exclusivamente de URLs ou detalhes de implementação.

### Relatórios

Integração com Allure para facilitar a análise das execuções e investigação de falhas.

## 👩‍💻 Autora

**Mônica Eli**

QA Engineer | Test Automation

Experiência em Quality Assurance, automação de testes, testes de API, testes E2E e desenvolvimento de soluções voltadas à qualidade de software.

## 📄 Licença

Projeto desenvolvido para fins de estudo, prática e demonstração de conhecimentos em automação de testes.
