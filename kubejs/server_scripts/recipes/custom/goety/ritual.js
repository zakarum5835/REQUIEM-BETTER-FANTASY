ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:summon",
        activation_item: {
            item: "zakarumtweaks:zaka_star"
        },
        craftType: "sabbath",
        entity_to_summon: "goety:summon_apostle",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "goety:crone_hat"
            },
            {
                item: "goety:warlock_sash"
            },
            {
                item: "brutality:darkin_blade"
            },
            {
                item: "goety:void_block"
            }
        ],
        result: {
            item: "goety:jei_dummy/none"
        }
    });

    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:summon",
        activation_item: {
            item: "eldritch_end:aberration_heart"
        },
        craftType: "sabbath",
        entity_to_summon: "eldritch_end:the_faceless",
        soulCost: 1,
        duration: 30,
        dimension: "minecraft:the_end",
        ingredients: [
            {
                item: "eldritch_end:ominous_eye"
            },
            {
                item: "goety:void_block"
            },
            {
                item: "minecraft:black_candle"
            },
            {
                item: "fdbosses:lightning_core"
            }
        ],
        result: {
            item: "goety:jei_dummy/none"
        }
    });
});