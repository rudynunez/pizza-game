class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;

    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0)
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0)
    }
}

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "/public/images/maps/DemoLower.png",
        upperSrc: "/public/images/maps/DemoUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 5,
                y: 10,
            }),
            npc1: new GameObject({
                x: 7,
                y: 13,
                src: "public/images/characters/people/npc1.png"
            })
        }
    },
    Kitchen: {
        lowerSrc: "/public/images/maps/KitchenLower.png",
        upperSrc: "/public/images/maps/KitchenUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 3,
                y: 1,
            }),
            npcA: new GameObject({
                x: 9,
                y: 7,
                src: "public/images/characters/people/npc1.png"
            }),
            npcB: new GameObject({
                x: 10,
                y: 10,
                src: "public/images/characters/people/npc2.png"
            }),
        }
    },

}