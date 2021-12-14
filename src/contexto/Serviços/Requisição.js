export async function RequisicaoPrincipal(food) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`;
    const respostaApi = await fetch(url);
    const json = await respostaApi.json();
  
    return json.meals;
  }

export async function RequisicaoPorNome(food) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
    const respostaApi = await fetch(url);
    const json = await respostaApi.json();
  
    return json.meals;
  }

export async function RequisicaoPorId(id) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const responseApi = await fetch(url);
    const json = await responseApi.json();
    return json.meals;
  }