

export default {
    getWidgets: (state) => {
         return state.widgets
    },
    getStatusMenuWidget: (state) => {
        return state.menu.widget
    },
    getCurrentMenuType: (state) => {
        return state.currentMenu
    },
    isMenuOpen: (state) => {
        let dados = state.menu
        for (var key in dados) {
            if (dados[key] === true) {
                return true
            }
        }
        return false
    },
    menu: (state) => {
        return state.menu
    },
    lastElementeis: (state) => {
        return (state.lastElementMenu.type)
    },
    pages: (state) => {
        return state.pages;
    },
    getPage: (state) => {
        return state.currentPage;
    },
    getPaleta: (state) => {
        return state.paleta
    },
    getCurrentIframe: (state) => {
        return state.lastIframeClicked
    }
    ,getSelector: (state) => {
        return state.lastSelector
    },
    getTag: (state) => {
        return state.lastTag
    },
    getPalette(){
        var paleta = localStorage.getItem('paleta');
        return JSON.parse(paleta);
    },
    getBlocos(){
        var blocos = localStorage.getItem('blocos');
        return JSON.parse(blocos);
    },
    getWidth(){
        return state.width
    },
    getMenuHtml(state){
        return state.menuhtml
    }
}
