class Play extends Phaser.Scene{
    constructor(){
        super('PlayScene')
        console.log('Play : constructor')
    }
    init(stats){                        //init get the infos
        console.log("Play : init")
        this.HP = stats.HP
        this.EXP = stats.EXP

    }

    create(){
        console.log('Play : create')
        console.log(`HP :${this.HP} EXP : ${this.EXP}`) // because u didnt put anything in here, it will undefined
        
        this.scene.add('stataoverlayScene', StatsOverlay,false) // added the scene
        // false auto start .

        this.scene.launch('stataoverlayScene')
        // 0  0  is origion where is top left
        //setScale = zoom in 放大
        this.tomato = this.add.image(0, 0 ,'tomato').setOrigin(0).setScale(5)
        
    }
    
    update(){
        //console.log('Play : Update')
        this.tomato.angle++
    }
}