
export default {

    ADD_WIDGETS (state, widgets) {
            state.widgets.push(widgets)
    },
    REPLACE_WIDGETS (state, widgets) {
            state.widgets = widgets
    }
}
