//Made by zakarum5835

//Swampjaw from Meet Your Fight
EntityEvents.drops('meetyourfight:swampjaw', event => {
    event.addDrop(Item.of('additionaladditions:rose_gold_upgrade').withCount(1).withChance(0.5))
})

//Kukulkan from Call of Yucatán
EntityEvents.drops('call_of_yucutan:kukulkan', event => {
    event.addDrop(Item.of('call_of_yucutan:music_disc_awakening').withCount(1).withChance(0.5))
})

//Warden from Minecraft Vanilla
EntityEvents.drops('minecraft:warden', event => {
    event.addDrop(Item.of('minecraft:music_disc_5').withCount(1).withChance(0.5))
})