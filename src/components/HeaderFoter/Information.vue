<template>
  <div class="home container">
    <div class = "video-box">
      <div class="video-content">
        <div class="text-video">
          <div class ="text-in-video">
          Югорский
            <br>
            государственный
            <br>
            университет
            <br>
            – месторожение знаний
          </div>
        </div>
        <div class="button-video">
          <button type="button" class="btn btn-primary">Подать заявление</button>
        </div>
      </div>
      <div class="video-mask">
        <video loop muted autoplay >
          <source src="./../../assets/yugu.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <nav id="nav" class="navbar sticky-top navbar-expand-lg navbar-light" style="background-color: #008D49;">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul  class="navbar-nav mx-auto">
          <li class="nav-item active">
            <router-link to = "/main" class="nav-link text-white" >Главная </router-link>
          </li>
          <li class="nav-item active">
            <router-link to = "/" class="nav-link text-white" >Приемная 2021 </router-link>
          </li>
          <li class="nav-item active">
            <router-link to = "" class="nav-link text-white" >Условия обучения </router-link>
          </li>
          <li class="nav-item active">
            <router-link to = "" class="nav-link text-white" >Контакты </router-link>
          </li>
          <li class="nav-item active">
            <router-link to = "" class="nav-link text-white" >Архив </router-link>
          </li>
        </ul>
        <ul  class="navbar-nav mr-1">
          <router-link to = "" class="nav-link text-white " >Войти</router-link>
        </ul>
      </div>
    </nav>
    <div>
      <router-view/>
    </div>
     <footer class="row justify-content-center">
            <div class="col-xl-2">Университет</div>
            <div class="col-xl-2">Образование</div>
            <div class="col-xl-2">Наука и иновации</div>
            <div class="col-xl-2">Международная деятельность</div>
            <div class="col-xl-2">Социальная сфера</div>
            <div class="col-xl-2">Справочник</div>
            <div class="infofooter col-xl-12">Федеральное государственное бюджетное образовательное учреждение высшего образования «Югорский государственный университет» © 2005–2019 
            628012, Ханты-Мансийский автономный округ - Югра, г. Ханты-Мансийск, ул. Чехова, 16
            Канцелярия: тел.: +7 (3467) 377-000, e-mail: ugrasu@ugrasu.ru
            Заметили ошибку? Выделите текст и нажмите Ctrl-Enter
            </div>
      </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Information',
  components: {
    
  }
}
</script>

<style >
 .video-box{
   display: flex;
   align-items: center;
 }
 .video-content{
   position: absolute;
   display: flex;
   flex-direction: column;
   margin-left: 2%;
   justify-content: space-between;
 }
  video {
    /* height: 100%; */
    width: 100%;

  }
  .text-video{
    font-weight: bold;
    font-size: 4vmin;
    line-height: 125%;
    color: ivory;
    margin-top: 10%;
  }

  .text-in-video{
    margin: 2%;
  }
  .button-video{

    margin-bottom: 8%;
    margin-left: 1%;
  }
  .btn{
    border-radius: 20px;
    font-size: 3vmin;
    padding: 1% 5%;
  }
  .home{
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
  }
  #nav{
    width: 100%;
  }
  .container{
    /* padding: auto; */
    padding-left:0;
    padding-right: 0;
  }
  footer {
    
    font-size: 2vh;
    /* margin-top: 2%; */
    color: white;
    padding-top: 1%;
    background-color:hsl(211, 100%, 50%,70%);
     text-align: center;
    
    /* flex-wrap: wr; */
    flex-basis: 1500px;
        
    }
  .infofooter{
    margin-top: 2%;
    text-align: center;
    margin-bottom: 2%;
  }
</style>