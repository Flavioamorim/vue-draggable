    <template>
      <div id="app">
        <h1>Vue Draggable </h2>
            <div class="drag">
                <div class="lefts">
                  <h4>List 1 Draggable</h4>
                    <draggable :list="list" class="dragArea" :options="{group:{ name:'people',  pull:'clone', put:false }}"  @start="onStart" @save="onSave" @end="onEnd"  :move="onMove">
                      <div v-for="(element, index) in list" :key="index">
                          <img :src="element.thumb" alt="">
                      </div>
                    </draggable>
                </div>
                <div class="right">
                  <h4>List 2 Draggable</h4>
                    <draggable :list="list2"  class="dragArea" @end="onEndSort" @start="onStartSort"  @update="onUpdate" :options="{group:'people'}">
                      <div v-for="frames in getWidgets">
                        <iframe class="ifr" width="100%" height="100%" :id="iframeID(frames.id)" v-on:load="loadFrame(frames)" :src="frames.local" frameborder="0"></iframe>
                        <button @click="mantemConteudo(frames)">
                          arrastar
                        </button>
                        <hr style="background:#fff;">

                      </div>
                    </draggable>
                </div>
            </div>
      </div>
    </template>

    <script>

    import Vue from 'vue'
    import draggable from 'vuedraggable'
    import Hello from './components/Hello'
    import { mapGetters, mapActions } from 'vuex'
    import $ from "jquery";
    import VueResource from 'vue-resource'

    Vue.use(VueResource)



    export default {
      name: 'app',
      components: {
        Hello,
        draggable
      },
      data(){
        return {
            list: [{
              content:'',
              order:'',
              id:1,
              thumb: 'http://1.bp.blogspot.com/-jj2JjQaUGj4/VQtBUrWKN-I/AAAAAAAAAOU/lvy54tKUjLM/s320/atletico%2Bmg%2Bfirst.png',
              local:'/static/b001.html'
            }, {
              content:'',
              order:'',
              id:2,
              thumb: 'http://1.bp.blogspot.com/-jj2JjQaUGj4/VQtBUrWKN-I/AAAAAAAAAOU/lvy54tKUjLM/s320/atletico%2Bmg%2Bfirst.png',
              local:'/static/b002.html'
            }, {
              content:'',
              order:'',
              id:3,
              thumb: 'http://1.bp.blogspot.com/-jj2JjQaUGj4/VQtBUrWKN-I/AAAAAAAAAOU/lvy54tKUjLM/s320/atletico%2Bmg%2Bfirst.png',
              local:'/static/b003.html'
            }],
            list2: null
        }
      },
      created(){
        //this.list2 =  this.getWidgets
      },
      methods: {
        ...mapActions(['saveWidget']),
        onStartSort: function(event){
            console.log('start')
            //var iframe = event.item.innerHTML ;
            //let content = $(iframe).contents().find('#page');
           // let content = $(event.item.innerHTML).contents()[0]
            //let posicaoAnterior = event.oldIndex
            //let posicaoAtual = event.newIndex

            //let iframe = document.getElementById("iframe2")
            //var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            //var iframeContent;
            //iframeContent = iframeDocument.getElementById('page').innerHTML;
            //iframeContent = iframeDocument.querySelectorAll('#page')[0];
            // let content = $("#iframe3").contents().find('#page')

             //console.log()
            // console.log(iframeContent)

        },
        mantemConteudo(frames){
            //var content = $("#iframe3").contents().find("#page")[0];
            //console.log(content)
        },
        onEndSort: function(event){

            console.log('end')
            //$("#iframe2").contents().find('#page').html( "<b> teste ggg </b>" )
            //console.log( $("#iframe2") )
            //console.log('on end')
        },
        onUpdate: function(){

        },
        onStart: function(event) {
            console.log('comecou dragg')
            //console.log(event)
        },
        onSave: function(event) {
            console.log('save')
            //console.log(event)
        },
        onEnd: function(event) {
            console.log('terminou de arrastar')
            //console.log(event)
        },
        onMove: function(event) {
            //console.log(event)
        },
        iframeID(id){
          return "iframe"+id
        },
        getIframe( uri ){
          //console.log(uri)
            this.$http.get(uri).then(response => {
              //console.log(response.body)
              let widget = {
                thumb: 'http://1.bp.blogspot.com/-jj2JjQaUGj4/VQtBUrWKN-I/AAAAAAAAAOU/lvy54tKUjLM/s320/atletico%2Bmg%2Bfirst.png',
                content: response.body,
                local:uri,
                order:55,
                id:'45',
              }
              console.log(widget)
              this.saveWidget(widget)

            }, response => {
              console.log('ok')
            });
        },
        loadFrame(frame){
          //console.log(frame)
          if(frame.content){
            $("#iframe"+frame.id).contents().find('#page').html(frame.content )
          }
        }

      },
      computed:{
        ...mapGetters(['getWidgets'])
      },
      watch:{

        'list2': function (oldval , newVal){

            console.log(newVal)
            let uri = newVal[0].local
            this.getIframe(uri)
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
      background: #464246;
    }

    .lefts{
        float: left;
        width: 200px;
        background: #7676bd;
    }

    .lefts img {
      height: 50px;
      width: 50px;
    }

    .right{
        float: right;
        width: 83%;
        background: #1c6d6d;
    }

    </style>
