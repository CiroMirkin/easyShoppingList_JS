const navbarElement = document.getElementById('navbar')
navbarElement.addEventListener('click', e => {
    if(e.target.tagName == 'INPUT') {
        const actualCollapseId = e.target.id
        const navbarCollapses = document.querySelectorAll('.navbar-collapse');
        navbarCollapses.forEach(navbarCollapse => {
            if(navbarCollapse.id != actualCollapseId) {
                hideNavbarCollapse(navbarCollapse)
            }
        })
    }
})
const hideNavbarCollapse = (navbarCollapse) => {
    const collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
    })
    collapse.hide()
}