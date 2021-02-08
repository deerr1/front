<template>
    <div  class="institute">
      <div >
      <div v-if="!boolinf" class="img" >
        <img v-bind:src='"./../assets/"+setinst["inst"]+".jpg"'>
      </div>
      <div class="elem row">
        <div v-if='information.filter(t => t.form==0).length>0' class="block">
           <h4>Очная форма обучения</h4> 
            <div v-if='information.filter(t => (t.form==0 && t.qualification=="Специалист")).length>0' class="Spec">
              <h5>Специалитет</h5> 
              <div v-for='elem in information.filter(t => (t.form==0 && t.qualification=="Специалист"))' v-bind:key="elem.id">
                <div class="element">
                 <router-link :to ='{name:"AboutDirection", params:{id:elem.id}}'>
                  {{elem.direction}}
                  {{elem.specialty}}
                 </router-link>
                </div>
              </div>
            </div>
            
            <div v-if='information.filter(t => (t.form==0 && t.qualification=="Бакалавр")).length>0' class="Bach">
              <h5>Бакалавриат</h5>
              <div v-for='elem in information.filter(t => (t.form==0 && t.qualification=="Бакалавр"))' v-bind:key="elem.id">
                <div class="element">
                  <router-link :to ='{name:"AboutDirection", params:{id:elem.id}}'>
                  {{elem.direction}}
                  {{elem.specialty}}
                 </router-link>
                </div>
              </div>
            </div>
        </div>
        <div v-if='information.filter(t => t.form==1).length>0' class="block" >
            <h4>Заочная форма обучения</h4>
            <div v-if='information.filter(t => (t.form==1 && t.qualification=="Специалист")).length>0' class="Spec">
              <h5>Специалитет</h5> 
              <div v-for='elem in information.filter(t => (t.form==1 && t.qualification=="Специалист"))' v-bind:key="elem.id">
                <div class="element">
                  <router-link :to ='{name:"AboutDirection", params:{id:elem.id}}'>
                  {{elem.direction}}
                  {{elem.specialty}}
                 </router-link>
                </div>
              </div>
            </div>
            <div v-if='information.filter(t => (t.form==1 && t.qualification=="Бакалавр")).length>0' class="Bach">
              <h5>Бакалавриат</h5>
              <div v-for='elem in information.filter(t => (t.form==1 && t.qualification=="Бакалавр"))' v-bind:key="elem.id">
                <div class="element">
                  <router-link :to ='{name:"AboutDirection", params:{id:elem.id}}'>
                  {{elem.direction}}
                  {{elem.specialty}}
                 </router-link>
                </div>
              </div>
            </div>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FilterInstitute',
  props:['setinst'],
  components: {
    
  },
  data:function(){
    return{
      information:[],
      boolinf:null,
      filt:null,
      // config: this.setinst
    };
  },
//   watch:{
//       config:function(){  
//           this.forceUpdate();
//         }
      
// },
  mounted:function(){
    this.filt = '?alias='+this.setinst['inst']
    axios
      .get('infoinstitutions/'+this.filt)
      .then(response => (this.information = response.data, this.boolinf = (this.information.length == 0)));
    // alert(this.information.filter())
  },
  updated:function(){
    
    // alert(this.setinst['form'].indexof('Очное обучение')!=1)
  // console.log(this.setinst['form'].indexOf('Заочное обучение'))
    if (this.setinst['form'].length>0){
      if(this.setinst['form'].indexOf('Очное обучение')!=-1){
        this.filt = this.filt + '&form=0'
      }
      if(this.setinst['form'].indexOf('Заочное обучение')!=-1){
        this.filt = this.filt + '&form=1'
      }
    }
    if (this.setinst['payment'].length>0){
      if (this.setinst['payment'].indexOf('Бюджет')!=-1){
        this.filt = this.filt + '&availability_of_budger=true'
      }
      if (this.setinst['payment'].indexOf('Коммерция')!=-1){
        this.filt = this.filt + '&availability_of_paid=true'
      }
    }
    if(this.setinst['program'].length>0){
      for (let i in this.setinst['program']){
        this.filt = this.filt + '&qualification='+this.setinst['program'][i]
      }
    }
    if(this.setinst['subjects'].length>0){
      for (let i in this.setinst['subjects']){
        this.filt = this.filt + '&points__subject__subject='+this.setinst['subjects'][i]
      }
    }    

    // let filt = this.setinst['form']+this.setinst['program']+this.setinst['payment']
    axios
      .get('infoinstitutions/'+this.filt)
      .then(response => (this.information = response.data, this.filt = '?alias='+this.setinst['inst'], this.boolinf = (this.information.length == 0)));
  }
  
}
</script>

<style scoped>
  .institute{
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
    flex-wrap: wrap;
    /* height: 1000px; */
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
  }
  .elem{
    display: flex;
    flex-wrap: wrap;
    flex-basis: 800px;
    justify-content: space-between;
  }
  .element{
    margin-top: 2%;
  }
  .Spec{
    margin-top: 2%;
  }
  .Bach{
    margin-top: 2%;
  }
  .block{
    margin-top: 5%;
  }
  img{
    margin-left: -10%;
    width: 50%;
  }
  .row{
    margin-left: auto;
    margin-right: auto;
  }
</style>