// Made by KCtops6

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:summon",
        activation_item: {
            item: "eldritch_end:xal"
        },
        craftType: "sabbath",
        entity_to_summon: "eldritch_end:eye",
        soulCost: 1,
        duration: 30,
        dimension: "minecraft:the_end",
        ingredients: [
            {
                item: "eldritch_end:ominous_eye"
            },
            {
                item: "eldritch_end:necronomicon"
            },
            {
                item: "eldritch_end:aberration_heart"
            },
            {
                item: "fdbosses:lightning_core"
            }
        ],
        result: {
            item: "eldritch_end:eye_spawn_egg"
        }
    });
});