// Made by zakarum5835

ServerEvents.recipes(event => {

    // Gambler's Blade
    event.recipes.forbidden_arcanus.ritual(RitualResults.ofCreateItemResult(Item.of("lethality:gamblers_blade")), "terramity:fateful_coin")
        .addInput("terramity:lucky_dice", 1)
        .addInput("lethality:pixie_alloy", 1)
        .addInput("lethality:pixie_alloy", 1)
        .addInput("terramity:die_of_revival", 1)
        .addInput("terramity:nullifying_dice", 1)
        .addInput("lethality:midas_touch", 1)
        .addInput("terramity:weighted_die", 1)
        .addInput("terramity:devils_dice", 1)
        .essences(85, 1000, 0, 1)
        .tier(3);

    // Nightmare Sword
    event.recipes.forbidden_arcanus.ritual(RitualResults.ofCreateItemResult(Item.of("lethality:nightmare_sword")), "minecraft:bedrock")
        .addInput("lethality:pixie_alloy", 1)
        .addInput("lethality:pixie_alloy", 1)
        .addInput("lethality:pixie_alloy", 1)
        .addInput("terramity:reverium", 1)
        .addInput("lethality:gamblers_blade", 1)
        .addInput("lethality:gaels_greatsword", 1)
        .addInput("lethality:devils_devastation", 1)
        .addInput("terramity:reverium", 1)
        .essences(85, 1000, 0, 1)
        .tier(3);

    // Nightfall
    event.recipes.forbidden_arcanus.ritual(RitualResults.ofCreateItemResult(Item.of("lethality:nightfall")), "terramity:cracked_microcosm")
        .addInput("terramity:dimlite_ingot", 1)
        .addInput("terramity:void_alloy", 1)
        .addInput("terramity:warden_soul", 1)
        .addInput("terramity:decayed_bedrock_dust", 1)
        .addInput("terramity:void_alloy", 1)
        .addInput("terramity:hellrok_gigaton_hammer", 1)
        .addInput("terramity:decayed_bedrock_dust", 1)
        .addInput("terramity:dimlite_ingot", 1)
        .essences(85, 1000, 0, 1)
        .tier(3);

    // Providence
    event.recipes.forbidden_arcanus.ritual(RitualResults.ofCreateItemResult(Item.of("brutality:providence")), "minecraft:bow")
        .addInput("terramity:archangel_halo", 1)
        .addInput("terramity:topaz", 1)
        .addInput("terramity:angel_feather", 1)
        .addInput("terramity:topaz", 1)
        .addInput("terramity:gilded_feather", 1)
        .addInput("terramity:angel_feather", 1)
        .addInput("terramity:gilded_feather", 1)
        .essences(85, 1000, 0, 1)
        .tier(3);

    // Sword of the Imprisoned
    event.recipes.forbidden_arcanus.ritual(RitualResults.ofCreateItemResult(Item.of("terramity:sword_of_the_imprisoned")), "terramity:hero_sword")
        .addInput("terramity:hellspec_alloy", 1)
        .addInput("terramity:hellspec_alloy", 1)
        .addInput("terramity:exodium_superalloy", 1)
        .addInput("terramity:exodium_superalloy", 1)
        .addInput("terramity:crescent_moonblade", 1)
        .addInput("terramity:stratus_storm_ruler", 1)
        .addInput("terramity:guiding_moonlight", 1)
        .essences(85, 1000, 0, 1)
        .tier(3);

    // Eternal Stella
    event.recipes.forbidden_arcanus.ritual(RitualResults.ofCreateItemResult(Item.of("forbidden_arcanus:eternal_stella")), "forbidden_arcanus:dark_nether_star")
        .addInput("forbidden_arcanus:xpetrified_orb", 1)
        .addInput("forbidden_arcanus:xpetrified_orb", 1)
        .addInput("forbidden_arcanus:xpetrified_orb", 1)
        .addInput("forbidden_arcanus:stellarite_piece", 1)
        .addInput("minecraft:diamond", 1)
        .addInput("minecraft:diamond", 1)
        .addInput("minecraft:netherite_ingot", 1)
        .essences(85, 1000, 0, 1)
        .tier(3);

});