// Made by KCtops6

ServerEvents.recipes(event => {
    event.custom({
        type: "goety:ritual",
        ritual_type: "goety:craft",
        activation_item: {
            item: "goety:dark_wand"
        },
        craftType: "forge",
        soulCost: 1,
        duration: 10,
        ingredients: [
            {
                item: "ae2:singularity"
            },
            {
                item: "mysticalagradditions:creative_essence"
            },
            {
                item: "create:blaze_cake"
            },
            {
                item: "mekanism:pellet_antimatter"
            }
        ],
        result: {
            item: "zakarumtweaks:zaka_star"
        }
    });
});
