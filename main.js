function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("get", url, false)
    request.send()
    return request.responseText
}
function criaElementos(usuario) {
    //alert(usuario.Category[0])
    produto = document.createElement("div");
    produto.className = "product";
    link = document.createElement("a");
    painelCorpo = document.createElement("div");
    painelCorpo.className = "panel-body";
    produtoImg = document.createElement("div");
    produtoImg.className = "product_image";
    Img = document.createElement("img");
    Img.className = "";
    Div_Obg = document.createElement('div');
    Div_Obg.className = "";
    H3_Obg = document.createElement("h3");
    H4_Obg = document.createElement("h4");
    Span_Obg = document.createElement("span");
    Span_Obg.className = "bold";
    P1_Obg = document.createElement("p");
    P2_Obg = document.createElement("p");
    P3_Obg = document.createElement("p");

    H3_Obg.innerHTML = usuario.brand;
    H4_Obg.innerHTML = usuario.name;
    // Span_Obg.innerHTML = "Categoria: ";
    P1_Obg.innerHTML = "Categoria: " + usuario.category;
    P2_Obg.innerHTML = "$" + usuario.price;
    Img.setAttribute("src", "https:" + usuario.api_featured_image);


    produto.appendChild(link);
    link.appendChild(painelCorpo);
    painelCorpo.appendChild(produtoImg);
    painelCorpo.appendChild(Div_Obg);
    produtoImg.appendChild(Img);
    Div_Obg.appendChild(H3_Obg);
    Div_Obg.appendChild(H4_Obg);
    Div_Obg.appendChild(P1_Obg);
    Div_Obg.appendChild(P2_Obg);
    Div_Obg.appendChild(P3_Obg);
    P1_Obg.appendChild(Span_Obg)


    return produto;
}
//================================================================
/*
let perPage = 5
const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data.length / perPage)

const controls = {
    next() {
        state.page++
        const lastPage = state.page > state.totalPage
        if (lastPage) {
            state.page--
        }
    },
    prev() {
        state.page--
        if (state.page < 1) {
            state.page++
        }
    },
    goTo(page) {
        state.page = page
        if (page < 1) {
            state.page = 1
        }
        if (page > state.totalPage) {
            state.page = state.totalPage
        }
    },
    createListeners() {
        html.get('.first').addEventListener('click', function () {
            controls.goTo(1)
            update()
        })

        html.get('.last').addEventListener('click', function () {
            controls.goTo(state.totalPage)
            update()
        })

        html.get('.next').addEventListener('click', function () {
            controls.next()
            update()
        })

        html.get('.prev').addEventListener('click', function () {
            controls.prev()
            update()
        })
    }
}


*/



function chamar() {
    data = fazGet("https://makeup-api.herokuapp.com/api/v1/products.json");
    usuarios = JSON.parse(data);
    // console.log(usuarios[0].product_colors[0].hex_value)
    usuarios.forEach(element => {
        let produto = criaElementos(element);
        let produtos = document.querySelector(".product_section")
        produtos.appendChild(produto);

    });

}

chamar();
