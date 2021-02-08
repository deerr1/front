<template>
    <div class="menu">
        <div v-if="!btnhelp" class="filter-space">
            <div class="filter">
                <div class="selector">
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Предмет-ЕГЭ
                    </button>
                        <div id="subjects" class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button v-if="filter_space['rus']" id="rus" class="dropdown-item" type="button" v-on:click="choose($event)">Русский язык</button>
                            <button v-if="filter_space['math']" id="math" class="dropdown-item" type="button" v-on:click="choose($event)">Математика</button>
                            <button v-if="filter_space['phis']" id="phis" class="dropdown-item" type="button" v-on:click="choose($event)">Физика</button>
                            <button v-if="filter_space['chem']" id="chem" class="dropdown-item" type="button" v-on:click="choose($event)">Химия</button>
                            <button v-if="filter_space['hist']" id="hist" class="dropdown-item" type="button" v-on:click="choose($event)">История</button>
                            <button v-if="filter_space['soci']" id="soci" class="dropdown-item" type="button" v-on:click="choose($event)">Обществознание</button>
                            <button v-if="filter_space['info']" id="info" class="dropdown-item" type="button" v-on:click="choose($event)">Информатика и информационно-коммуникационные технологии (ИКТ) </button>
                            <button v-if="filter_space['biol']" id="biol" class="dropdown-item" type="button" v-on:click="choose($event)">Биология</button>
                            <button v-if="filter_space['geog']" id="geog" class="dropdown-item" type="button" v-on:click="choose($event)">География</button>
                            <button v-if="filter_space['lang']" id="lang" class="dropdown-item" type="button" v-on:click="choose($event)">Английский язык</button>
                            <button v-if="filter_space['liter']" id="liter" class="dropdown-item" type="button" v-on:click="choose($event)">Литература</button>
                        </div>
                    </div>
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Программа
                    </button>
                        <div id="program" class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button v-if="filter_space['bach']" id="bach" class="dropdown-item" type="button" v-on:click="choose($event)">Бакалавр</button>
                            <button v-if="filter_space['spec']" id="spec" class="dropdown-item" type="button" v-on:click="choose($event)">Специалист</button>
                        </div>
                    </div>
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Форма обучения
                    </button>
                        <div id="form" class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button v-if="filter_space['full']" id="full" class="dropdown-item" type="button" v-on:click="choose($event)">Очное обучение</button>
                            <button v-if="filter_space['corr']" id="corr" class="dropdown-item" type="button" v-on:click="choose($event)">Заочное обучение</button>
                        </div>
                    </div>
                    <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Оплата
                    </button>
                        <div id="payment" class="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button v-if="filter_space['bud']" id="bud" class="dropdown-item" type="button" v-on:click="choose($event)">Бюджет</button>
                            <button v-if="filter_space['com']" id="com" class="dropdown-item" type="button" v-on:click="choose($event)">Коммерция</button>
                        </div>
                    </div>
                </div>
                <div v-on:click="close" class="btn-close">
                    ×
                </div>
            </div>
            <div class="subjects">
                <div v-for="(value, key) in filter_block" v-bind:key="filter_block[key]">
                    <div class="sub" :id="key">
                        <div class="name">
                            {{value}}
                        </div>
                        <div v-on:click="closeSub($event)">
                            ×
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="btnhelp" class=helper>
            <div   v-on:click="selecthelp" class="help">
                Помочь выбрать
            </div>
            <div v-if="back" v-on:click="selectback" class="back">
                back
            </div>
        </div>
        <component v-if="!select_all" :is="comp" v-on:select="selectone" v-on:selectall="selectall" v-bind:setinst="help" ></component>
        <div v-if="select_all">
            <div  v-for="onehelp in select" v-bind:key="onehelp">
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
            btnhelp:true,
            select_all:false,
            select:[{
                form:[],
                inst: '0',
                subjects:[],
                program:[],
                payment:[],
                watch:true,
            },
            {
                form:[],
                inst: '1',
                subjects:[],
                program:[],
                payment:[],
                watch:true,
            },
            {
                form:[],
                inst: '2',
                subjects:[],
                program:[],
                payment:[],
                watch:true,
            },
            {
                form:[],
                inst: '3',
                subjects:[],
                program:[],
                payment:[],
                watch:true,
            }
            ],

            setinst:{
                'oil':0,
                'hum':1,
                'leg':2,
                'dig':3,
                
            },
            help:{
                form:[],
                inst: '',
                subjects:[],
                program:[],
                payment:[]
            },
            filter_space:{
                rus:true,
                math:true,
                phis:true,
                chem:true,
                hist:true,
                soci:true,
                info:true,
                biol:true,
                geog:true,
                lang:true,
                liter:true,
                bach:true,
                spec:true,
                full:true,
                corr:true,
                bud:true,
                com:true
            },
            filters:{
                program:['bach','spec'],
                subjects:['rus','math','phis','chem','hist','soci','info','biol','geog','lang','liter',],
                form:['full','corr'],
                payment:['bud','com'],
            },
            filter_block:{

            },
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
      selecthelp: function(){
        this.btnhelp = false
        if (this.comp == 'Inst'){
            this.comp = 'Filt'
            this.select_all=true
        }
      },
      close: function(){
        this.btnhelp = true
        if (this.select_all==true){
            this.select_all = false
            this.comp = 'Inst'
        }
        for (let obj in this.filter_space){
            this.filter_space[obj] = true
        }
        this.filter_block={}
        for (let obj in this.select){
            this.select[obj]['form'] = []
            this.select[obj]['program'] = []
            this.select[obj]['subjects'] = []
            this.select[obj]['payment'] =[]
        }
        this.help['form'] = []
        this.help['program'] = []
        this.help['subjects'] = []
        this.help['payment'] =[]

      },
      choose($event){
        this.filter_space[$event.target.id]=false
        this.filter_block[$event.target.id] = $event.target.innerText
        // console.log($event.target.innerText)
        if (this.select_all == false){
            this.help[$event.target.parentElement.id].push($event.target.innerText)
        }
        else{
            for (var obj in this.select){
                this.select[obj][$event.target.parentElement.id].push($event.target.innerText)
            }
        }
      },
      closeSub($event){
        this.$delete(this.filter_block, $event.target.parentElement.id)
        this.filter_space[$event.target.parentElement.id] = true
        var theme = null
        for (let obj in this.filters){
                if(this.filters[obj].indexOf($event.target.parentElement.id)!=-1){
                    theme = obj
                    break;
                }
            }
            
        if (this.select_all == false){
            let arr = this.help[theme]
            arr.splice(arr.indexOf($event.target.parentElement.firstChild.innerText),1)
        }
        else{
            for (let obj in this.select){
                let arr = this.select[obj][theme]
                arr.splice(arr.indexOf($event.target.parentElement.firstChild.innerText),1)
            }
        }
      }
      
      

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
    .filter{
        display: flex;
        flex-basis: 100%;
        /* flex-wrap: wrap; */
        justify-content: space-around;
        /* margin-left: 5%;
        margin-right: 5%; */
    }
    .btn-close{
        
        
        text-align: center;
        vertical-align: middle;
        color: #007bff;
        font-weight: bold;
        line-height: 80%;
        font-size: 30px;
        width: 35px;
        height: 35px;
        border-color: #007bff;
        border-style: solid;
        border-width: 3px;
        border-radius: 20px;
    }
    .btn{
        font-size: 120% !important;
        color: black !important;
        background-color: white !important;
        /* margin-top: 15% !important; */
        

    }
    .selector{
        display: flex;
        flex-basis: 84%;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-around;
    }
   .filter-space{
       display: flex;
       flex-direction: column;
       flex-basis: 100%;

   }
   .subjects{
       display: flex;
       flex-basis: 100%;
       justify-content: flex-start;
       flex-wrap: wrap;
       margin-top: 2%;
   }
   .sub{
       color: white;
       background: #11cc73;
       font-weight: bold;
       display: flex;
       flex-basis: 100%;
       justify-content: space-between;
       border-color: #11cc73;
       border-style: solid;
       border-radius: 20px;
       padding-left: 4%;
       padding-right: 4%;
       width: 95%;
       margin-right: 3vh;
       margin-bottom: 5%;
       -webkit-user-select: none;
       
   }

   
 
</style>