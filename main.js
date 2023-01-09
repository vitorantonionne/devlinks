function Mode() {
    const html = document.documentElement
    const img = document.querySelector('.img-perfil img')
    
    // if (html.classList.contains('light')) {
    //     html.classList.remove('light')
    // }else {
    //     html.classList.add('light')
    // }

    html.classList.toggle('light')

    if (html.classList.contains('light')) {
        img.setAttribute('src', 'assets/perfil/avatar-light.png')
    } else {
        img.setAttribute('src', 'assets/perfil/avatar-dark.png')
        img.setAttribute('alt', 'foto perfil vitor')
    }
}