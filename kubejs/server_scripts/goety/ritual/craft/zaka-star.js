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
            },
            {
                item: "powah:crystal_nitro"
            },
            {
                item: "experienceobelisk:bibliophage"
            },
            {
                item: "forbidden_arcanus:eternal_stella"
            },
            {
                item: "hexerei:crow_ankh_amulet"
            },
            {
                item: "zakarumtweaks:music_disc_abstraction"
            },
            {
                item: "goety:infernal_tome"
            },
            {
                item: "forbidden_arcanus:dark_nether_star_block"
            },
            {
                item: "minecraft:dragon_egg"
            },
            {
                item: "goety:warlock_sash"
            },
        ],
        result: {
            item: "zakarumtweaks:zaka_star"
        }
    });
});