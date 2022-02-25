//const URL = "https://thatcopy.pw/catapi/rest/";
const URL = "https://pokeapi.co/api/v2/pokemon/";
const botao = document.getElementById("trocar_pokemon");

const get_pokemon = async () =>
{

    
    let numero = await gerar_numero();  

    //console.log(URL+numero);
    const dados = await fetch(URL+numero)

    .then((resultado) => resultado.json())
    .catch((erro) => console.log(erro));

    //  dados é o vetor de informação sobre um determinado pokemon (numero aleatorio passado definirá qual pokemon virá)
	// sprites é uma propriedade do json dados, front default é uma propriedade da propriedade sprites.
    
    
    return dados.sprites.front_default;
}


const carregar_imagem = async () =>
{
    
    const imagem_pokemon = document.getElementById("pokemon");
    //console.log("Chegou antes");
     
   let url_pokemon = await get_pokemon();
   console.log("Url: " + url_pokemon);
    imagem_pokemon.src = url_pokemon;
    //console.log("Chegou depois");
}

carregar_imagem();

async function gerar_numero()
{
    let min = Math.ceil(1);
    let max = Math.floor(150);
    let numero = Math.floor(Math.random() * (150 - 1)) + 1;
    return numero;
}