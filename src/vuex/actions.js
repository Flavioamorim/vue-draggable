

let actions = {
    saveWidget(context, widgets) {


        if(widgets){

            context.commit('ADD_WIDGETS', widgets)
        }
    },

}
export default actions
