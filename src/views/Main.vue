<template>
    <div class="main justify-content-center">
        <div class="row container justify-content-center">
            <div class="information">
                <div class="heading text"> ОСОБЕННОСТИ ПРИЕМА 2021</div>
                <div class ="text">
                Зачисление на бюджет по очной форме обучения будет проходить в 2 этапа.
                <br>
                Подать документы на поступление можно максимум на 5 направлений подготовки.
                <br>
                Установлены вступительные испытания по нескольким предметам по выбору поступающих.
                </div>
            </div>
        </div>
        <div class="program">
            <div id="program" class="heading text">
                Программы обучения
            </div>
            <div class="btn-group row but" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary col-xl-1 " >СТО</button>
                <button type="button" class="btn btn-primary col-xl-4"> Бакалавриат/Cпециалитет</button>
                <button type="button" class="btn btn-primary col-xl-3">Магистратура</button>
                <button type="button" class="btn btn-primary col-xl-3 ">Аспирантура</button>
            </div>
            <component :is="currentComp" ></component>
        </div>
    </div>
</template>

<script>
import Program from '../components/Program'
export default {
    name: 'Main',
    data: function(){
    return{
        currentComp: 'program'
        };
    },
    components: {
        program:Program
        
  },
//   computed: {
//     currentComp:data().current  
//   }
}
</script>

<style scoped>
    .main{
        display: flex;
        flex-wrap: wrap;
        margin-top:3%;
        margin-left: 5%;
        margin-right: 5%;
    }
    .information{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-basis: 800px;
        border-radius: 20px;
        background-color: hsl(209, 94%, 73%,26%);
        /* margin-top: 1vw; */
        text-align: center;
        width: auto;
        line-height: 190%;


    }
    .heading{
        font-weight: bold;
        margin-bottom: 1%;
    }
    .text{
        font-size: 2vh;
    }
    .program{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-basis: 1500px;
        align-items: center;
        /* flex-direction: row; */
        margin-top: 2%;
    }
    
    .row{
        margin-left: auto;
        margin-right: auto;
    }
    .btn{
        height: 100%;
        width: 100%;
        font-size: 2vh;
        margin-top: 2%;
        /* padding-left: 2%; */
        padding-right: 10%;
        
    } 
    #program{
        font-size: 3vh;
    }
    .but{
        display: flex;
        justify-content: center;
        margin-left: 10%;
        margin-right: 10%;
        /* text-align: left; */
    }
    
</style>