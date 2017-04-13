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
                      <div v-for="(frames, index) in getWidgets">
                        <!-- src=frame.local for load in iframe. -->
                        <!-- src=loadFrame(frames) for upadte frame with original content -->
                        <!-- :id="iframeID(frames.id)" -->
                        <iframe class="ifr" width="100%" height="100%" :id="frames.id"  v-on:load="loadFrame(frames , index)" :src="frames.local" frameborder="0"></iframe>
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
              content:'<!DOCTYPE html><html><head> <title></title></head><body> <div class="page" id="page"> <h2 contenteditable="true">B1B11B1B1B1B1B1B1</h2> </div></body></html>',
              order:'',
              id:"",
              thumb: 'http://1.bp.blogspot.com/-jj2JjQaUGj4/VQtBUrWKN-I/AAAAAAAAAOU/lvy54tKUjLM/s320/atletico%2Bmg%2Bfirst.png',
              local:'/static/b001.html'
            }, {
              content:'<!DOCTYPE html><html><head> <title></title></head><body> <div class="page" id="page"> <h2 contenteditable="true">B2B2B2B2B2BB2B2BB2</h2> </div></body></html>',
              order:'',
              id:"",
              thumb: 'http://1.bp.blogspot.com/-jj2JjQaUGj4/VQtBUrWKN-I/AAAAAAAAAOU/lvy54tKUjLM/s320/atletico%2Bmg%2Bfirst.png',
              local:'/static/b002.html'
            }, {
              content:'<!DOCTYPE html><html><head> <title></title></head><body> <div class="page" id="page"> <h2 contenteditable="true">B3B3B3B3B3B3B3B3BB</h2> </div></body></html>',
              order:'',
              id:"",
              thumb: 'http://1.bp.blogspot.com/-jj2JjQaUGj4/VQtBUrWKN-I/AAAAAAAAAOU/lvy54tKUjLM/s320/atletico%2Bmg%2Bfirst.png',
              local:'/static/b003.html'
            }],
            list2: this.getWidgets
        }
      },
      created(){

        /*

for (var i = 0 ; i < this.getWidgets.length ; i++) {
            var chave = this.makeid()
            console.log(chave)
            this.getWidgets[i].id = chave
        }
         */
        this.list2 =  this.getWidgets
      },
      methods: {
        ...mapActions(['saveWidget']),
        onStartSort: function(event){

            var value = event.item.firstChild
            var iframeID = value.id

            //console.log(iframeID)
            let iframe = document.getElementById(iframeID)
            var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            var iframeContent;
            iframeContent = iframeDocument.getElementById('page').innerHTML;
            //console.log(iframeContent)
            $("#"+iframeID).on('load', function(){
                //console.log('carregou')
                var iframeIDX = "#"+iframeID;
                //console.log(iframeContent)
                $(iframeIDX).contents().find('#page').replaceWith(iframeContent)
            });

        },
        mantemConteudo(frames){
            //var content = $("#iframe3").contents().find("#page")[0];
            //console.log(content)
        },
        onEndSort: function(event){

            //$("#iframe2").contents().find('#page').html( "<b> teste ggg </b>" )
            //console.log( $("#iframe2") )
            //console.log('on end')
        },
        onUpdate: function(){
          //console.log('reorder')
        },
        onStart: function(event) {
            //console.log( this.makeid())
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
        getIframe( widgets ){

          //console.log(widgets)

           if(widgets){
            console.log('alterando list')
            for (var i = 0 ; i < widgets.length ; i++) {

                if( ! widgets[i].id ){

                    var chave = this.makeid()
                    console.log(chave)
                    widgets[i].id = chave
                    //widgets[i].content = chave
                }
            }
            console.log(widgets)
            //this.saveWidget(widgets)
          }






          //console.log(uri)
          /*
            this.$http.get(uri).then(response => {
              console.log(response.body)
              let widget = {
                thumb: 'http://1.bp.blogspot.com/-jj2JjQaUGj4/VQtBUrWKN-I/AAAAAAAAAOU/lvy54tKUjLM/s320/atletico%2Bmg%2Bfirst.png',
                content: response.body,
                local:uri,
                order:55,
                id:'45',
              }
            }, response => {
              console.log('ok')
            });

           */
        },
        loadFrame(frame , index){
          console.log(frame)

          if(frame.content){
            //console.log(frame.content)
            //var iframeIDX = "#iframe"+index;
            var iframeIDX = "#"+ frame.id;
            //console.log(iframeIDX)
            $(iframeIDX).contents().find('#page').html(frame.content )
          }
        },
        makeid() {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for( var i=0; i < 5; i++ ){
              text += possible.charAt(Math.floor(Math.random() * possible.length));
          }

          return text;
        }

      },
      computed:{
        ...mapGetters(['getWidgets'])
      },
      watch:{

        'list2': function (oldval , newVal){

          // console.log(oldval)
          // console.log(newVal)
          //if(newVal && newVal != oldval){
           // let uri = newVal[0].local
            this.getIframe(newVal)
          //  return;
          //}

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
