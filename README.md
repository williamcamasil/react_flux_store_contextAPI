# Boilerplate Arquitetura Flux com Context API

Na branch **main **foi desenvolvido um exemplo de como aplicar a arquitetura [Flux](https://medium.com/engenharia-arquivei/arquitetura-flux-26a419871ade) e [Context API](https://codeburst.io/global-state-with-react-hooks-and-context-api-87019cc4f2cf) toda estruturada para o gerenciamento dos estados entre as diversas páginas do sitema web.



## Pastas e Arquivos

```
src
	context
		reducer.js
		store.js
	screens
		Form
        	Form.jsx
        Home
        	Home.jsx
     index.js
        	
```

 

- **context** [pasta] = local onde serão armazenados as stores e reducers para o gerenciamento dos estados;
- **reducer.js** [arquivo] = local onde serão realizados as ações para mudar o estado do objeto;
- **store.js** [arquivo] = local onde será declarado o estado inicial e como será passado para seus filhos (páginas e/ou componentes)



#### Ações atreladas

- dispatch()
- useReducer()
- useContext()



#### Obs

Na **index.js** é inserido a Store, para que as informações **nela gerenciadas** sejam replicadas para todas as páginas e componentes. 

## Dependência

Foi utilizado somente a dependência [react-router-dom](https://yarnpkg.com/package/react-router-dom) para a navegação entre as páginas.



#### Baixe e teste

- git clone https://github.com/williamcamasil/react_flux_store_contextAPI.git
- acesse a pasta react_flux_store_contextAPI
- abra o no vscode
- execute os comandos no prompt
  - yarn				(baixa as depêndencias do node_modules)
  - yarn start       (Abre o boilerplate no browser)



## Boilerplate aplicado

Esse boilerplate trata-se de duas páginas, sendo HOME e FORM, a qual a Home inseri as informações por dispatch e é mostrado na tela o resultado aplicado, além de aplicar para mais de um objeto. o Form recebe somente o resultado obtido através da tela Home, dessa forma sendo possível utilizando os dados a parir da store e não mais por passagens de props de filho para pai. 
