// Made by KCtops6

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "enigmaticaddons:earth_promise"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 30,
        ingredients: [
            {
                item: "theabyss:clock_of_time"
            },
            {
                item: "mysticalagradditions:creative_essence"
            },
            {
                item: "zakarumtweaks:music_disc_abstraction"
            },
            {
                item: "goety:infernal_tome"
            }
        ],
        result: {
            item: "zakarumtweaks:zaka_star"
        }
    });
});
