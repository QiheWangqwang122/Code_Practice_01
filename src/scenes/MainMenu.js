class MainMenu extends Phaser.Scene {
    constructor(){
        super("mainmenuScene")
        console.log("MainMenu : constructor")

    }
    preload(){
        console.log('MainMenu : preload')
        this.load.path = './assets/img/'
        this.load.image('tomato' , 'tomato.png')

    }

    init(){
        console.log("MainMenu : init")
        this.HP = 100               // property of this object creating in here!not outsie of thisscne
        this.EXP = 0
        console.log(`HP :${this.HP} EXP : ${this.EXP}`)
    }

    create(){
        console.log("MainMenu : create")

        let playerStats = {
            HP : this.HP,
            EXP : this.EXP // made a stats go into the PlayScene 
        }
        
        this.scene.start('PlayScene', playerStats) //here calls to the play.js

    }

}
