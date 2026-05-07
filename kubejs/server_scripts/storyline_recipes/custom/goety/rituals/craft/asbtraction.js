// zakarum5835

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "enigmaticaddons:pure_heart"
        },
        craftType: "forge",
        soulCost: 500,
        duration: 10,
        ingredients: [
            {
                item: "cnc:music_disc_hills"
            },
            {
                item: "goetyawaken:music_disc_mooshroom"
            },
            {
                item: "goetyawaken:music_disc_nameless"
            },
            {
                item: "goetyawaken:music_disc_ancient"
            }
        ],
        result: {
            item: "zakarumtweaks:music_disc_abstraction"
        }
    });
});
