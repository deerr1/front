<template>
    <div class="menu">
        <div class=helper>
            <div class="help">
                Помочь выбрать
                
            </div>
            <div v-if="back" v-on:click="selectback" class="back">
                back
            </div>
        </div>
        <component v-if="!select_all" :is="comp" v-on:select="selectone" v-on:selectall="selectall" v-bind:setinst="help" ></component>
        <div v-if="select_all">
            <div  v-for="onehelp in select" v-bind:key="onehelp['inst']">
                <component :is="comp" v-on:select="selectone, selectall" v-bind:setinst="onehelp" ></component>
            </div>
        </div>
    </div>
</template>

<script>
import Institutions from "../components/Institutions"
import FileterInstitute from "../components/FileterInstitute"
export default {
    name: 'Program',
    data: function(){
        return{
            inst:'',
            comp:'Inst',
            back:false,
            select_all:false,
            select:[{
                form:'',
                inst: '0',
                subjects:[],
                program:'',
                payment:''
            },
            {
                form:'',
                inst: '1',
                subjects:[],
                program:'',
                payment:''
            },{
                form:'',
                inst: '2',
                subjects:[],
                program:'',
                payment:''
            },
            {
                form:'',
                inst: '3',
                subjects:[],
                program:'',
                payment:''
            }
            ],

            setinst:{
                'oil':0,
                'hum':1,
                'leg':2,
                'dig':3,
                
            },
            help:{
                form:'',
                inst: '',
                subjects:[],
                program:'',
                payment:''
            }
        };
    },
  components: {
    Inst:Institutions,
    Filt:FileterInstitute,
  },
  methods:{
      selectone: function(event){
        this.comp = 'Filt'

        this.help['inst'] = this.setinst[event.currentTarget.id]
        this.back = true
        // alert(this.setinst[this.inst])
      },
      selectall: function(){
        this.comp = 'Filt'
        this.back = true
        this.select_all=true
      },
      selectback: function(){
        this.back = false
        this.comp = 'Inst'
        this.select_all=false
      },
      

  }
}
</script>

<style scoped>
    .menu{
        display: flex;
        /* justify-content: flex-end; */
        
        /* justify-content: space-between; */
        flex-wrap: wrap;
        margin-top:2%;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        flex-basis: 800px;
        margin-bottom: 15%;
        

        
    }
    .helper{
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        flex-basis: 800px;
    }
    .help{
        align-self: flex-end;
        margin-right: 2%;
        
    }
    .back{
        margin-left: 2%;
        /* margin-top: ; */
        /* justify-self: flex-start; */
    }
</style>