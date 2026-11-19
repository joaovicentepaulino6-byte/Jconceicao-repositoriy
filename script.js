const botaoMenu = document.getElementById("menu-toggle");
const navegacao = document.getElementById("navegacao");

botaoMenu.addEventListener("click", () => {
    const estaAberto = navegacao.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded", estaAberto);
    botaoMenu.textContent = estaAberto ? "✕" : "☰";
});

document.querySelectorAll(".navegacao a").forEach((link) => {
    link.addEventListener("click", () => {
        navegacao.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
        botaoMenu.textContent = "☰";
    });
});

document.getElementById("ano").textContent = new Date().getFullYear();

/* ---------- Mudança de idioma (PT / EN) ---------- */
const traducoes = {
    pt: {
        nav_inicio: "Início",
        nav_sobre: "Sobre mim",
        nav_projectos: "Projectos",
        nav_contactos: "Contactos",
        etiqueta_inicio: "PORTFÓLIO PESSOAL",
        ola: "Olá, sou",
        cargo: "Desenvolvedor Web",
        descricao: "Tenho interesse por tecnologia, informática e desenvolvimento de páginas web. Estou a desenvolver as minhas competências em HTML e CSS.",
        ver_projectos: "Ver projectos",
        entrar_contacto: "Entrar em contacto",
        alt_foto: "Fotografia de João da Conceição",
        etiqueta_sobre: "QUEM SOU",
        titulo_sobre: "Sobre mim",
        texto_sobre: "Sou tecnico da área de Suporte Informático. Tenho interesse em aprender, resolver problemas tecnológicos e criar soluções digitais. Actualmente, estou a trbalhar com a construção de páginas web usando HTML, Js e CSS.",
        comp_suporte: "Suporte Informático",
        comp_manutencao: "Manutenção de computadores",
        etiqueta_projectos: "O MEU TRABALHO",
        titulo_projectos: "Portfólio de projectos",
        p1_titulo: "Portal Instituicional",
        p1_desc: "Desenvolivimento de um portal instituicional com HTML, JavaScript e estilização usando CSS.",
        alt_p1: "Ilustração de uma portal",
        p2_titulo: "Portfólio Pessoal",
        p2_desc: "Este website apresenta a minha biografia, competências, projectos e contactos.",
        alt_p2: "Ilustração do portfólio pessoal",
        p3_titulo: "Assistência Tecnológica",
        p3_desc: "Website para apresentar serviços de suporte e manutenção informática.",
        p3_estado: "Em desenvolvimento",
        alt_p3: "Ilustração de assistência tecnológica",
        etiqueta_contactos: "VAMOS CONVERSAR",
        titulo_contactos: "Contactos",
        texto_contactos: "Podes entrar em contacto comigo através dos seguintes meios:",
        telefone: "Telefone:",
        localizacao: "Localização:",
        pais: "Moçambique",
        redes: "Redes sociais:",
        rodape: "Portfólio pessoal.",
    },
    en: {
        nav_inicio: "Home",
        nav_sobre: "About me",
        nav_projectos: "Projects",
        nav_contactos: "Contacts",
        etiqueta_inicio: "PERSONAL PORTFOLIO",
        ola: "Hi, I'm",
        cargo: "Web Developer",
        descricao: "I am interested in technology, computing and web development. I am developing my skills in HTML and CSS.",
        ver_projectos: "View projects",
        entrar_contacto: "Get in touch",
        alt_foto: "Photo of João da Conceição",
        etiqueta_sobre: "WHO I AM",
        titulo_sobre: "About me",
        texto_sobre: "I am an IT Support. I enjoy learning, solving technology problems and creating digital solutions. I am currently building web pages with HTML, Js and CSS.",
        comp_suporte: "IT Support",
        comp_manutencao: "Computer maintenance",
        etiqueta_projectos: "MY WORK",
        titulo_projectos: "Projects portfolio",
        p1_titulo: "Institutional Portal",
        p1_desc: "Development of an institutional portal with HTML, JavaScript and CSS styling.",
        alt_p1: "Illustration of a login page",
        p2_titulo: "Personal Portfolio",
        p2_desc: "This website presents my biography, skills, projects and contact details.",
        alt_p2: "Illustration of the personal portfolio",
        p3_titulo: "Tech Assistance",
        p3_desc: "Website presenting IT support and maintenance services.",
        p3_estado: "In development",
        alt_p3: "Illustration of tech assistance",
        etiqueta_contactos: "LET'S TALK",
        titulo_contactos: "Contacts",
        texto_contactos: "You can get in touch with me through the following channels:",
        telefone: "Phone:",
        localizacao: "Location:",
        pais: "Mozambique",
        redes: "Social media:",
        rodape: "Personal portfolio.",
    },
};

const botoesIdioma = document.querySelectorAll(".idioma-botao");

function aplicarIdioma(lang) {
    const t = traducoes[lang] || traducoes.pt;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const chave = el.dataset.i18n;
        if (t[chave] !== undefined) el.textContent = t[chave];
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
        const chave = el.dataset.i18nAlt;
        if (t[chave] !== undefined) el.alt = t[chave];
    });

    botaoMenu.setAttribute("aria-label", lang === "en" ? "Open menu" : "Abrir menu");

    botoesIdioma.forEach((b) => {
        const activo = b.dataset.lang === lang;
        b.classList.toggle("activo", activo);
        b.setAttribute("aria-pressed", activo);
    });

    try { localStorage.setItem("idioma", lang); } catch (e) {}
}

botoesIdioma.forEach((b) => {
    b.addEventListener("click", () => aplicarIdioma(b.dataset.lang));
});

let idiomaGuardado = "pt";
try { idiomaGuardado = localStorage.getItem("idioma") || "pt"; } catch (e) {}
if (idiomaGuardado !== "pt") aplicarIdioma(idiomaGuardado);