document.addEventListener("DOMContentLoaded", function() {
    // Criação do elemento nav
    var navElement = document.createElement("nav");
    navElement.className = "menuBar";

    // Conteúdo do nav
    navElement.innerHTML = `
        <div>
            <a href="../atividades/activityIndex.html">
                <strong>
                    <p class="menuHomeButton">Flávio Diniz</p>
                </strong>
            </a>
        </div>
        <button class="menuBarButton">
            <p>&#9776;</p>
        </button>
        <ul class="menuItens">
            <li class="menuItem"><a href="uglyIndex.html">
                <p>Index Pre CSS</p>
            </a></li>
            <li class="menuItem"><a href="manualAngular.html">
                <p>Angular</p>
            </a></li>
            <li class="menuItem"><a href="listas.html">
                <p>Listas</p>
            </a></li>
            <li class="menuItem"><a href="/atividades/content/calcEthanol/calcView.html">
                <p>Combustível</p>
            </a></li>
            <li class="menuItem"><a href="/atividades/content/forms/formCadastro.html">
                <p>Cadastrar</p>
            </a></li>
            <li class="menuItem"><a href="../index.html">
                <p>Projeto</p>
            </a></li>
        </ul>
    `;

    // Adiciona o elemento nav ao corpo da página
    document.body.appendChild(navElement);

    navElement.style.position = "fixed";
    navElement.style.top = "0";

    var mainContent = document.querySelector(".main-content"); // Selecione a classe ou id do seu conteúdo principal
    if (mainContent) {
        mainContent.style.marginTop = navElement.offsetHeight + "px";
    }
});