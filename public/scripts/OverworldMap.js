class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;

    }

    drawLowerImage(ctx, cameraPerson) {
        ctx.drawImage(
            this.lowerImage, 
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y
        )
    }

    drawUpperImage(ctx, cameraPerson) {
        ctx.drawImage(
            this.upperImage,
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y
        )
    }
}

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "/public/images/maps/DemoLower.png",
        upperSrc: "/public/images/maps/DemoUpper.png",
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(6),
            }),
            npc1: new Person({
                x: utils.withGrid(7),
                y: utils.withGrid(9),
                src: "public/images/characters/people/npc1.png"
            })
        }
    },
    Kitchen: {
        lowerSrc: "/public/images/maps/KitchenLower.png",
        upperSrc: "/public/images/maps/KitchenUpper.png",
        gameObjects: {
            hero: new Person({
                x: 3,
                y: 5,
            }),
            npcA: new Person({
                x: 9,
                y: 7,
                src: "public/images/characters/people/npc1.png"
            }),
            npcB: new Person({
                x: 10,
                y: 10,
                src: "public/images/characters/people/npc2.png"
            }),
        }
    },

}