https://github.com/luizomf/curso-reactjs-nextjs-project-1

recursos: https://jsonplaceholder.typicode.com/

Configuração es-lint, prettier, editorconfig etc:
1 => Botao direito no espaço onde se encontra as pastas e clicar em gerar .editorconfig
2 => npx eslint --init Obs: Se der conflito do eslint com o eslint já salvo no react, basta deletar ele do packageJson e deletar a node_modules e depois dar o comando "npm i"
depois configurar o .eslintrc
3 => Prettier:  npm i -D prettier eslint-config-prettier eslint-plugin-prettier
criar o arquivo .prettierrc.js e colocar no arquivos os dados que constam lá.
npx eslint src/**/*.jsx --fix => Corrigir os problemas automaticamente
OBS: pra resolver problema do eslint e jest: (describe, it, expect), adicionar o comando abaixo no eslintrc.js
"overrides": [
    {
      "files": [
        "**/*.spec.js",
        "**/*.spec.jsx"
        "**/*.test.jsx"
      ],
      "env": {
        "jest": true
      }
    }
  ]

npm i prop-types
npm install msw --save-dev => Mock

tempo: 15:30 aula 37
