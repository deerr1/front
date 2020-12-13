<template>
    <div class="main">
        <div class="row">
            <div id="oil" v-on:click="$emit('select',$event)" class="direction col-xl-6">
                <img  src="./../assets/0.jpg" >
                <div id="i1" class="info text-white">
                    кол-во программ
                    <br>
                    кол-во бюджетных мест
                    <br>
                    кол-во платных мест
                </div>
            </div>
            <div id="hum" v-on:click="$emit('select',$event)" class="direction col-xl-6">
                <img  src="./../assets/1.jpg" >
                <div id="i2" class="info text-white">
                    кол-во программ
                    <br>
                    кол-во бюджетных мест
                    <br>
                    кол-во платных мест
                </div>
            </div>
            <div id="leg" v-on:click="$emit('select',$event)" class="direction col-xl-6">
                <img  src="./../assets/2.jpg" >
                <div id="i3" class="info text-white">
                    кол-во программ
                    <br>
                    кол-во бюджетных мест
                    <br>
                    кол-во платных мест
                </div>
            </div>
            <div id="dig" v-on:click="$emit('select',$event)" class="direction col-xl-6">
                <img  src="./../assets/3.jpg" >
                <div id="i4" class="info text-white">
                    кол-во программ
                    <br>
                    кол-во бюджетных мест
                    <br>
                    кол-во платных мест
                </div>
            </div>
        </div>
        <div class="but">
            <button type="button" v-on:click="$emit('selectall',$event)" class="justify-content-centre btn btn-primary btn-lg btn-block" style="background-color: #008D49; border-color:#008D49 ">Посмотреть программы всех институтов</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Institutions',
  components: {
    
  },
  methods:{
    //   select:function(event){
    //       alert(event.currentTarget.id)
    //   }
  }
}
</script>

<style scoped>
   .main{
       margin-top: 2%;
       display: flex;
       flex-wrap: wrap;
       /* align-self: center; */
       /* justify-content: space-between; */
       /* flex-wrap: nowrap; */
   }
   .direction{
       margin-left: auto;
       margin-right: auto;
       display: flex;
       flex-wrap: wrap;
       justify-content: center;
   }
   .info{
       margin-left: 0;
       margin-right: 0;
       flex-grow: 1;
       text-align: center;
   }
   .but{
       margin-top: 5%;
       display: flex;
       justify-content: center;
       margin-left: auto;
       margin-right: auto;
       width: 90%;
     
      
   }
   .btn{
       font-size:3vh;
       line-height: 110%;
   }
   img{
       display: flex;
       /* height: 70%; */
       width: 100%;
   }
   #i1{
       background-color:black;
   }
   #i2{
       background-color:#1999d4;
   }
   #i3{
       background-color:#6d3177;
   }
   #i4{
       background-color:#ed6c06;
   }
</style>