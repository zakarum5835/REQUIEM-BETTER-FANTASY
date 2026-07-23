// Made by zakarum5835

// Swampjaw from Meet Your Fight
EntityEvents.drops('meetyourfight:swampjaw', event => {
    event.addDrop(Item.of('additionaladditions:rose_gold_upgrade').withCount(1).withChance(0.5))
})

// Kukulkan from Call of Yucatán
EntityEvents.drops('call_of_yucutan:kukulkan', event => {
    event.addDrop(Item.of('call_of_yucutan:music_disc_awakening').withCount(1).withChance(0.5))
})

// Warden from Minecraft Vanilla
EntityEvents.drops('minecraft:warden', event => {
    event.addDrop(Item.of('minecraft:music_disc_5').withCount(1).withChance(0.5))
})

// Aberattions from Eldritch End
EntityEvents.drops('eldritch_end:aberration', event => {
    event.addDrop(Item.of('eldritch_end:aberration_heart').withCount(1).withChance(0.1))
})

// Eldritch Eye from Eldritch End
EntityEvents.drops('eldritch_end:eye', event => {
    event.addDrop(Item.of('goetyawaken:music_disc_mooshroom').withCount(1).withChance(0.1))
})

// Halo of Ascension from Goety
EntityEvents.drops('goety:apostle', event => {
    event.addDrop(Item.of('goety_revelation:ascension_halo').withCount(1).withChance(0.1))
})

// Malefic Helmet from Goety
EntityEvents.drops('eeeabsmobs:immortal', event => {
    event.addDrop(Item.of('goety:malefic_helm').withCount(1).withChance(0.1))
})

// Wither Totem from Distant Worlds
EntityEvents.drops('minecraft:wither', event => {
    event.addDrop(Item.of('distant_worlds:wither_totem').withCount(1).withChance(0.1))
})

// Black Matter from Terramity
EntityEvents.drops('terramity:trial_guardian', event => {
    event.addDrop(Item.of('terramity:black_matter').withCount(1).withChance(0.1))
})