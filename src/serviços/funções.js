export default function pegaUrlYt(url) {
    const NUMBER_ELEVEN = 11;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
  
    return (match && match[2].length === NUMBER_ELEVEN)
      ? match[2]
      : null;
  }

  
  export function pegaIngrediente(ingrediente) {
    const ingredientes = [];
    const vinte = 20;
    for (let i = 1; i <= vinte; i += 1) {
      ingredientes.push({
        nome: ingrediente[`strIngredient${i}`],
        quantidade: ingrediente[`strMeasure${i}`],
        index: i,
      });
    }
    return ingredientes.filter((ingrediente) => ingrediente.nome);
  }