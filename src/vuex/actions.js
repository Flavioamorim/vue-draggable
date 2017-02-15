

let actions = {
    saveWidget(context, widgets) {
        context.commit('ADD_WIDGETS', widgets)
    }
}
export default actions
