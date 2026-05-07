// Made by KCtops6

ServerEvents.recipes(event => {

    // 1. Cursed Ring
    event.recipes.forbidden_arcanus.ritual(RitualResults.ofCreateItemResult(Item.of("enigmaticlegacy:cursed_ring")), "enigmaticlegacy:the_cube")
        .addInput("enigmaticaddons:revival_leaf", 1)
        .addInput("enigmaticlegacy:blazing_core", 1)
        .addInput("enigmaticaddons:ocean_stone", 1)
        .addInput("enigmaticlegacy:angel_blessing", 1)
        .addInput("enigmaticlegacy:eye_of_nebula", 1)
        .addInput("enigmaticlegacy:golem_heart", 1)
        .essences(85, 1000, 0, 1)
        .tier(3);

    // 2. Twisted Heart
    event.recipes.forbidden_arcanus.ritual(RitualResults.ofCreateItemResult(Item.of("enigmaticlegacy:twisted_heart")), "enigmaticlegacy:earth_heart")
        .addInput("minecraft:ghast_tear", 1)
        .addInput("minecraft:blaze_powder", 2)
        .addInput("minecraft:redstone", 2)
        .addInput("minecraft:ender_eye", 1)
        .essences(85, 1000, 0, 1)
        .tier(3);

    // 3. Pure Heart
    event.recipes.forbidden_arcanus.ritual(RitualResults.ofCreateItemResult(Item.of("enigmaticaddons:pure_heart")), "enigmaticlegacy:earth_heart")
        .addInput("minecraft:ghast_tear", 1)
        .addInput("enigmaticaddons:ichor_droplet", 2)
        .addInput("minecraft:glowstone_dust", 2)
        .addInput("minecraft:ender_eye", 1)
        .essences(85, 1000, 0, 1)
        .tier(3);

});