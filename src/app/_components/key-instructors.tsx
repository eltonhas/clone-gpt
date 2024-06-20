export function KeyInstructors() {
  return (
    <div className="flex w-full justify-center p-4 lg:p-10">
      <div className="w-full max-w-[833px] rounded-lg bg-background-dark px-28 py-16">
        <h2 className="text-center text-lg font-semibold text-gray">
          Guia inicial para obter uma chave OpenAI
        </h2>
        <ol className="mt-10 list-decimal space-y-3 text-sm text-white lg:text-base">
          <li>
            Realize um cadastro: Acesse o site da{' '}
            <a href="https://openai.com" target="_blank" rel="noreferrer">
              OpenAI
            </a>
            ;
          </li>
          <li>
            Acesse o Painel de API: Dentro do painel vá até o seu avatar e
            clique em View API keys;
          </li>
          <li>
            Crie uma nova chave: Ao clicar no botão de + Create new secret key
            adicione um apelido para a chave e um novo código será gerado;
          </li>
          <li>Copie a chave gerada e cole abaixo; 👇</li>
        </ol>
      </div>
    </div>
  )
}
