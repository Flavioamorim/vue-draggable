<template>
  <div id="app">
    <h1>Vue Draggable</h2>
        <div class="drag">
            <div class="lefts">
              <h4>List 1 Draggable</h4>
                <draggable :list="list" class="dragArea" :options="{group:{ name:'people',  pull:'clone', put:false }}"  @start="onStart" @save="onSave" @end="onEnd"  :move="onMove">
                  <div v-for="(element, index) in list" :key="index">{{element.name}}</div>
                </draggable>
            </div>
            <div class="lefts">
              <h4>List 2 Draggable</h4>
                <draggable :list="list2"  class="dragArea"  @update="onUpdate" :options="{group:'people'}"  >
                  <div v-for="(element, index) in list2" :key="index">{{element.name}}</div>
                </draggable>
            </div>
        </div>

  </div>
</template>

<script>

import draggable from 'vuedraggable'
import Hello from './components/Hello'
//import Draggable from './components/Draggable'



export default {
  name: 'app',
  components: {
    Hello,
    draggable
  },
  data(){
    return {
        list: [{
          name: "John"
        }, {
          name: "Joao"
        }, {
          name: "Jean"
        }],
        list2: []
    }
  },
  methods: {

    onUpdate: function(){
        console.log('update')
    },
    onStart: function(event) {
        console.log('start')
        //console.log(event)
    },
    onSave: function(event) {
        console.log('save')
        //console.log(event)
    },
    onEnd: function(event) {
        console.log('end')
        //console.log(event)
    },
    onMove: function(event) {
        //console.log(event)
    }

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.normal {
  background-color: grey;
}

.drag {
  background-color: green;
}

.dragArea {
  min-height: 10px;
  background: #F0F;
}

.lefts{
    float: left ;

}

</style>
