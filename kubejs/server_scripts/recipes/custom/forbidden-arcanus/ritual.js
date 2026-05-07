// Made by KCtops6

ServerEvents.recipes(event => {
    // Recipe 1: Cursed Ring
    event.custom({
        type: "forbidden_arcanus:hephaestus_forge_ritual", // <--- Added this
        additional_requirements: {
            forge_tier: 3
        },
        essences: {
            aureal: 85,
            blood: 1000,
            experience: 0,
            souls: 1
        },
        inputs: [
            { amount: 1, ingredient: { item: "enigmaticaddons:revival_leaf" } },
            { amount: 1, ingredient: { item: "enigmaticlegacy:blazing_core" } },
            { amount: 1, ingredient: { item: "enigmaticaddons:ocean_stone" } },
            { amount: 1, ingredient: { item: "enigmaticlegacy:angel_blessing" } },
            { amount: 1, ingredient: { item: "enigmaticlegacy:eye_of_nebula" } },
            { amount: 1, ingredient: { item: "enigmaticlegacy:golem_heart" } }
        ],
        main_ingredient: {
            item: "enigmaticlegacy:the_cube"
        },
        result: {
            type: "forbidden_arcanus:create_item",
            result_item: {
                Count: 1,
                id: "enigmaticlegacy:cursed_ring"
            }
        }
    });

    // Recipe 2: Twisted Heart
    event.custom({
        type: "forbidden_arcanus:hephaestus_forge_ritual", // <--- Added this
        additional_requirements: {
            forge_tier: 3
        },
        essences: {
            aureal: 85,
            blood: 1000,
            experience: 0,
            souls: 1
        },
        inputs: [
            { amount: 1, ingredient: { item: "minecraft:ghast_tear" } },
            { amount: 2, ingredient: { item: "minecraft:blaze_powder" } },
            { amount: 2, ingredient: { item: "minecraft:redstone" } },
            { amount: 1, ingredient: { item: "minecraft:ender_eye" } }
        ],
        main_ingredient: {
            item: "enigmaticlegacy:earth_heart"
        },
        result: {
            type: "forbidden_arcanus:create_item",
            result_item: {
                Count: 1,
                id: "enigmaticlegacy:twisted_heart"
            }
        }
    });

    // Recipe 3: Pure Heart
    event.custom({
        type: "forbidden_arcanus:hephaestus_forge_ritual", // <--- Added this
        additional_requirements: {
            forge_tier: 3
        },
        essences: {
            aureal: 85,
            blood: 1000,
            experience: 0,
            souls: 1
        },
        inputs: [
            { amount: 1, ingredient: { item: "minecraft:ghast_tear" } },
            { amount: 2, ingredient: { item: "enigmaticaddons:ichor_droplet" } },
            { amount: 2, ingredient: { item: "minecraft:glowstone_dust" } },
            { amount: 1, ingredient: { item: "minecraft:ender_eye" } }
        ],
        main_ingredient: {
            item: "enigmaticlegacy:earth_heart"
        },
        result: {
            type: "forbidden_arcanus:create_item",
            result_item: {
                Count: 1,
                id: "enigmaticaddons:pure_heart"
            }
        }
    });
});