<template>
  <div class="about_direction">
    <div class="image">
      <img :src='information["foto"]'>
      <div class="textonimg">{{information["specialty"]}}</div>
    </div>
    <div class="info">
      <div class="text">
        {{information["info"]}}
      </div>
      <div class="num-info">
        <div class="left">
          <div class="colom">
            <div>{{information['training_period']}}</div>
            <div>
              <div v-if="information['form']==0">Очная форма обучения</div>
              <div v-else>Заочная форма обучения</div>
            </div>
          </div>
          <div class="colom rast">
            <div>{{information['number_of_budget']}}/{{information['number_of_paid']}}</div>
            <div>
              <div>{{information['number_of_budget']}} бюджетных мест</div>
              <div>{{information['number_of_paid']}} платных мест</div>
            </div>
          </div>
          <div class="passing-score"> <h5> Проходной балл 2020 - {{information['passing_score']}} баллов</h5></div>
        </div>
        <div class="right">
          <div class="min-pont">Минимальные баллы для поступления:</div>
          <div v-for="(item, index) in information['points'].filter(t => t['mandatory']==true)" v-bind:key="item.id">
            <div>{{index+1}}. {{item['subject']['subject']}}-{{item['point']}}</div>
          </div>
          <div v-if="information['points'].filter(t => t['mandatory']==false).length>0">
            <div>Предметы на выбор:</div>
            <div v-for="item in information['points'].filter(t => t['mandatory']==false)" v-bind:key="item.id">
              <div> {{item['subject']['subject']}}-{{item['point']}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="dop-info">
        <div class="dop-left">
          <div class="profession">Будущаяя профессия</div>
          <li v-for='item in information["professions"].split("\n")' :key="item">
            {{item}}
          </li>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AboutDirection',
  props:['id'],
  components: {
    
  },
  data:function(){
    return{
      information:null,
    };
  },
  mounted:function(){
    let filt = '?id='+this.id
    axios
      .get('https://deerr1.pythonanywhere.com/api/infoinstitutions/'+filt)
      .then(response => (this.information = response.data[0]));
  },
}
</script>

<style scoped>
.about_direction{
  margin-top: 1%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15%;
}
.textonimg{
  position: absolute;
  top:30%;
  left:8%;
  color:white;
  font: bold;
  font-size: 5vmin;
}
.image{
  position: relative;
}
.info{
  
  margin-left: 5%;  
  margin-right: 5%;
}
.text{
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 2%;
  font-size: 2vh;
}
.num-info{
  margin-top: 2%;
  display: flex;
  flex-basis: 800px;
  
  justify-content: space-between;
  flex-wrap: wrap;
  
}
.left{
  margin-top: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-basis: 400px;
}
.right{
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  
  flex-basis: 400px;
}
.colom{
  display: flex;
  flex-direction: column;
}
.passing-score{
   font-size: 2vmax;
   font:bolder;
}
.dop-info{
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
  flex-basis: 800px;
}
.dop-left{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-basis: 500px;
}
.min-pont{
  font: bolder;
  font-size: 2vh;
}
.profession{
  color:white;
  font: bold;
  font-size: 4vmin;
  padding: 1%;
  text-align: center;
  background: #00569D;
  margin-bottom: 2%;
}
li{
  font-size:2vmax;
}
img{
  
  width: 100%;
  height: 100%;
}
</style>