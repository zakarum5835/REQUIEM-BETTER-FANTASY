//Made by zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:summon",
        activation_item: {
            item: "eeeabsmobs:heart_of_pagan"
        },
        craftType: "adept_nether",
        entity_to_summon: "eeeabsmobs:immortal",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "eeeabsmobs:soul_summon_necklace"
            },
            {
                item: "eeeabsmobs:chain_gear"
            },
            {
                item: "eeeabsmobs:doombolt_battleaxe"
            },
            {
                item: "eeeabsmobs:realm_warden_theme_music_disc"
            }
        ],
        result: {
            item: "eeeabsmobs:immortal_boss_egg"
        }
    });
});