

let actions = {
    saveWidget(context, widgets) {
        console.log(widgets)
        context.commit('ADD_WIDGETS', widgets)
    }
}
export default actions
