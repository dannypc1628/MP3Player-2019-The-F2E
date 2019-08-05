var MyAudio = document.getElementById("Music");
//audio.play();

var app = new Vue({
    el:"#player",
    data:{
        MusicIsPaused:true
    },
    methods:{
        PlayOrPaused:function(){
            this.MusicIsPaused=!this.MusicIsPaused;
            this.MusicStatus();
        },
        MusicStatus:function(){
            if(this.MusicIsPaused){
                MyAudio.pause();
            }
            else{
                MyAudio.play(); 
            }
        }
    },
    conputed:{}

});