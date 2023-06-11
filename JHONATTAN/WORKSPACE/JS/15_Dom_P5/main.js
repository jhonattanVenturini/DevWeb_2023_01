function login() {
    var username = document.getElementById("username").value.toUpperCase();
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;

    if (username === "" || password === "" || role === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("A senha deve ter no mínimo 8 caracteres, incluindo um caractere especial, um número e uma letra maiúscula.");
        return;
    }

    var roleText;
    switch (role) {
        case "1":
            roleText = "Estagiário";
            break;
        case "2":
            roleText = "Trainee";
            break;
        case "3":
            roleText = "Analista";
            break;
        case "4":
            roleText = "JR";
            break;
        case "5":
            roleText = "SN";
            break;
        case "6":
            roleText = "PL";
            break;
        case "7":
            roleText = "Líder Técnico";
            break;
        case "8":
            roleText = "CEO";
            break;
        default:
            roleText = "Desconhecido";
    }
    alert("Olá, " + username + ", seu cargo é " + roleText + ". Vamos te redirecionar para a página desejada.");
    window.location.href = "https://br.linkedin.com/?src=go-pa&trk=sem-ga_campid.12619604099_asid.148548608796_crid.656532769092_kw.linked_d.c_tid.kwd-103941963_n.g_mt.e_geo.1001773&mcid=6821526239111716925&cid=&gclid=EAIaIQobChMIocTll_O5_wIV0eFcCh1QdAjAEAAYASAAEgLiO_D_BwE&gclsrc=aw.ds"

}


