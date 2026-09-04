# Clean Code — regras de execucao

> Checklist operacional destilado de *Clean Code* (Robert C. Martin et al.),
> caps. 1–13 + o catalogo de smells do cap. 17. Trazido do setup de governanca de
> outro projeto e mantido aqui como padrao de qualidade. Serve para conferir
> enquanto se escreve e antes de dar um passo como pronto.

---

## 0. O que "codigo limpo" significa (as 6 facetas do cap. 1)

Qualidades que se somam: **elegancia**, **legibilidade tipo prosa**,
**testabilidade** ("codigo sem testes nao e limpo, por mais elegante que seja"),
**cuidado** ("parece ter sido escrito por alguem que se importa"),
**simplicidade** (4 regras de Kent Beck), **previsibilidade** ("cada rotina e
mais ou menos o que voce esperava").

- **Regra do Escoteiro:** deixe o codigo um pouco mais limpo do que encontrou, a
  cada mudanca. Trocar um nome, quebrar uma funcao, matar uma duplicacao pequena.
- **Janelas quebradas:** codigo ruim convida mais codigo ruim. Nao deixe a
  primeira sujeira passar "so dessa vez".

## 1. Nomes (cap. 2 / smells N1–N7)

- **Revela a intencao:** o nome responde por que existe, o que faz, como se usa.
  Se precisa de comentario ao lado, o nome falhou.
- **Sem desinformacao:** nao chame de `...List` o que nao e uma lista; evite nomes
  que diferem por pouquissimas letras; nunca `l` ou `O` como variavel.
- **Distincoes com significado:** proibido `a1, a2`; proibido ruido (`Info`,
  `Data`, `Object`, `Manager`, `the`, `a`).
- **Pronunciavel e pesquisavel:** numero magico vira constante nomeada. Nome de
  uma letra so em loop de escopo curtissimo.
- **Sem encoding:** nada de notacao hungara, `strNome`, `IShape`. A IDE e o
  type system ja sabem o tipo.
- **Classe = substantivo**; **metodo = verbo**. Acessor/mutador/predicado:
  `get`/`set`/`is`.
- **Uma palavra por conceito:** nao misture `fetch`/`get`/`retrieve`.
- **Nome longo para escopo longo**; **nome no nivel de abstracao certo**.

## 2. Funcoes (cap. 3 / smells F1–F4, G30–G34)

- **Pequenas — e menores que isso.** Blocos dentro de `if`/`else`/`for` com ~1
  linha (uma chamada de funcao nomeada). Indentacao nao passa de 1–2 niveis.
- **Faz UMA coisa:** todos os passos um nivel de abstracao abaixo do nome.
- **Stepdown Rule:** o arquivo le como narrativa de cima para baixo.
- **Prefira polimorfismo a `if/else`/`switch` sobre tipo** (G23).
- **Argumentos:** 0 ideal, 1 otimo, 2 cuidado, 3 evite, 4+ nao use. Grupo de args
  que anda junto vira objeto.
- **Sem flag booleana** (`render(true)`) — divida em duas funcoes.
- **Sem efeito colateral escondido:** se for inevitavel, o nome tem que dizer.
- **Command/Query Separation:** ou muda estado, ou responde — nunca os dois.
- **DRY:** duplicacao e a raiz de quase todo problema de manutencao.

## 3. Comentarios (cap. 4 / smells C1–C5)

- **Comentario nao compensa codigo ruim.** A resposta para codigo confuso e
  limpar, nao explicar.
- **Aceitaveis:** legal/licenca; informativo que o nome nao cobre; explicacao de
  **intencao** (por que esta decisao); aviso de consequencia; `TODO` rastreavel.
- **Ruins (remova):** resmungo; redundante; enganoso/obsoleto; ruido; comentario-
  jornal/changelog (o git guarda); **codigo comentado** (apague sem do).

## 4. Formatacao (cap. 5 / smells G10, G11)

- **Metafora do jornal:** conceitos de alto nivel no topo; detalhe crescendo ate
  o fim. Arquivo curto (a maioria < 200 linhas).
- **Vertical:** linha em branco separa conceitos; linhas relacionadas ficam
  densas juntas; funcao que chama fica **acima** da chamada.
- **Declaracao perto do uso.**
- **Team Rules vence preferencia pessoal.** Siga o estilo ja presente no arquivo
  e o que o `eslint` decide.

## 5. Objetos vs. estruturas de dados (cap. 6 / smells G14, G36)

- **Objeto:** esconde dados, expoe **comportamento**. **Estrutura de dados**
  (DTO, `interface` so de campos): expoe dados, sem comportamento. **Nunca faca
  hibrido.**
- **Lei de Demeter:** evite `a.getB().getC().doD()` (train wreck). **Tell, don't
  ask.**

## 6. Tratamento de erro (cap. 7 / smell G26)

- **Excecoes, nao codigos de erro** — separa o caminho feliz da reacao a incidente.
- **Contexto na excecao:** operacao que falhou + causa.
- **Isole API de terceiros** num wrapper que traduz para uma excecao de dominio.
- **Nao retorne `null`, nao passe `null`:** prefira lancar, colecao vazia, ou
  Null Object.

## 7. Boundaries / fronteiras (cap. 8)

- **Isole codigo de terceiros atras de uma classe/modulo do seu dominio.** Quando
  a lib mudar, o estrago fica contido. (Ex: `SmoothScroll` embrulha o Lenis;
  `dotted-map` embrulhava o `svg-dotted-map`.)
- **Codigo que ainda nao existe:** defina a interface dos seus sonhos, programe
  contra ela, escreva um Adapter quando a implementacao real chegar.

## 8. Testes de unidade (cap. 9 / smells T1–T9)

- **As 3 leis do TDD** e o ciclo Red-Green-Refactor: ver [tdd.md](tdd.md).
- **Codigo de teste e de primeira classe** — mesma limpeza que producao.
- **Legibilidade acima de tudo.** Padrao Arrange-Act-Assert visivel.
- **Um conceito por teste**, poucos asserts; nome = cenario + esperado.
- **F.I.R.S.T.:** Fast · Independent · Repeatable · Self-validating · Timely.

## 9. Classes / modulos (cap. 10 / smells G6–G8, G17, G18)

- **Ordem:** constantes publicas → estaticas privadas → campos → metodos publicos
  (cada um seguido dos privados que ele usa).
- **Pequenos — medidos por responsabilidade.** Se so descreve com "e"/"se"/"ou",
  ou o nome e vago (`Manager`, `Processor`), acumula responsabilidade.
- **SRP:** uma razao para mudar.
- **OCP:** novo recurso entra como nova unidade, sem editar codigo estavel.
- **DIP:** codigo de negocio depende de **abstracao**, nunca de detalhe volatil.

## 10. Sistemas (cap. 11)

- **Separe construcao de uso.** Montagem de objetos e resolucao de dependencias
  longe da logica de runtime. Anti-padrao: lazy init acoplando a classe concreta
  dentro de um getter.

## 11. Design Emergente — as 4 regras de Kent Beck (cap. 12), em ordem

1. **Roda todos os testes.**
2. **Sem duplicacao (DRY).** Duplicacao = abstracao ainda nao percebida.
3. **Expressa a intencao.** Nomes bons, funcoes pequenas.
4. **Minimo de classes e metodos.** Contrapeso pragmatico as 3 primeiras.

## 12. Catalogo de smells (cap. 17) — gatilhos de revisao

- **Comentarios** C1 inapropriado · C2 obsoleto · C3 redundante · C5 codigo
  comentado.
- **Ambiente** E1 build em >1 passo · E2 testes em >1 passo.
- **Funcoes** F1 muitos args · F2 arg de saida · F3 arg de flag · F4 funcao morta.
- **Geral** G5 duplicacao · G9 codigo morto · G14 feature envy · G23 polimorfismo
  > switch · G25 numero magico → constante · G28 encapsule condicional · G29
  evite condicao negativa · G30 funcao faz uma coisa · G36 navegacao transitiva.
- **Nomes** N1 descritivo · N4 nao ambiguo · N6 sem encoding · N7 nome descreve
  efeito colateral.
- **Testes** T1 cobertura insuficiente · T5 condicoes de borda · T9 testes rapidos.

## Aplicacao neste repo

- **Componentes React:** um componente por arquivo, nome = substantivo. Extraia
  sub-componentes quando o JSX passa de ~1 tela. Logica (calculo, formatacao,
  derivacao de estado) sai do corpo do componente para helper puro em
  `src/shared/lib` ou um hook `use*`.
- **Estilo:** Tailwind inline seguindo o padrao ja presente no arquivo. `cn()`
  (`src/shared/lib/utils.ts`) para classes condicionais.
- **`any` proibido** (eslint ja barra). Tipos em `*.ts` ao lado do uso.
- **Dados estaticos** (projetos, skills, traducoes) em `src/shared/data` /
  `src/shared/lib/i18n.ts` — sem logica, so estrutura.
