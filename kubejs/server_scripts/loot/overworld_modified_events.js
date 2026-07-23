// Made by KCtops6

// Source: https://github.com/AlmostReliable/lootjs/wiki/1.20.1

LootJS.modifiers(event => {
    event.addLootTableModifier(/^twilightforest:chests\/.*/).removeLoot('minecraft:blaze_rod');
    event.addLootTableModifier(/^minecraft:chests\/.*/).removeLoot('minecraft:netherite_upgrade_smithing_template');
    event.addEntityLootModifier('goety:heretic').removeLoot('goety:infernal_tome');
    // --- DEBUGGING FOR HERESIARCH ---
    console.info("[LootJS Debug] Registering modifier for goety:heresiarch");
    event.addEntityLootModifier('goety:heresiarch')
        .apply(ctx => {
            console.info(`[LootJS Debug] Heresiarch modifier triggered! Current drops before removal: ${ctx.loot}`);
            
            // Explicitly check if the helm is in the loot pool before attempting removal
            let hasHelm = ctx.loot.contains('goety:malefic_helm');
            console.info(`[LootJS Debug] Is 'goety:malefic_helm' present in loot? ${hasHelm}`);
            
            ctx.loot.remove('goety:malefic_helm');
            
            console.info(`[LootJS Debug] Heresiarch modifier finished. Remaining drops: ${ctx.loot}`);
        });
    // --------------------------------
    const NETHERITE_LEVEL_PICKAXES = [
        'minecraft:netherite_pickaxe', 'mekanismtools:refined_obsidian_pickaxe', 'terramity:dimlite_pickaxe',
        'terramity:virentium_pickaxe', 'terramity:cosmilite_pickaxe', 'terramity:iridium_pickaxe',
        'terramity:void_pickaxe', 'terramity:conductite_pickaxe', 'terramity:hellspec_pickaxe',
        'terramity:nyxium_pickaxe', 'terramity:exodium_pickaxe', 'terramity:reverium_pickaxe',
        'voidscape:voidic_crystal_pickaxe', 'voidscape:titanite_pickaxe', 'voidscape:ichor_pickaxe',
        'voidscape:astral_pickaxe', 'additionaladditions:gilded_netherite_pickaxe', 'goety:dark_pickaxe',
        'forbidden_arcanus:draco_arcanus_pickaxe', 'blazegear:nethersteel_pickaxe', 'enigmaticlegacy:etherium_pickaxe',
        'theabyss:aberythe_pickaxe', 'theabyss:fusion_pickaxe', 'theabyss:phantom_pickaxe',
        'theabyss:garnite_pickaxe', 'mysticalagriculture:tertium_pickaxe', 'mysticalagriculture:imperium_pickaxe',
        'mysticalagriculture:supremium_pickaxe', 'mysticalagriculture:awakened_supremium_pickaxe', 'macabre:blood_clot_pickaxe',
        'macabre:plasma_pickaxe', 'macabre:ferrum_pickaxe', 'macabre:abhorrent_pickaxe',
        'twilightforest:fiery_pickaxe', 'majruszsdifficulty:enderium_pickaxe', 'ancient_elements:aeonite_pickaxe', 
        'ancient_elements:galactrium_pickaxe', 'ancient_elements:celestium_pickaxe', 'ancient_elements:endrium_pickaxe',
        'ancient_elements:spectrillium_pickaxe'
    ];
    const WAYSTONE_BLOCKS = [
        'waystones:waystone', 'waystones:mossy_waystone', 'waystones:sandy_waystone',
        'waystones:deepslate_waystone', 'waystones:blackstone_waystone', 'waystones:end_stone_waystone',
        'waystones:sharestone', 'waystones:warp_plate', 'waystones:portstone',
        'waystones:cyan_sharestone', 'waystones:purple_sharestone', 'waystones:blue_sharestone',
        'waystones:brown_sharestone', 'waystones:green_sharestone', 'waystones:red_sharestone',
        'waystones:black_sharestone', 'waystones:white_sharestone', 'waystones:orange_sharestone',
        'waystones:magenta_sharestone', 'waystones:light_blue_sharestone', 'waystones:yellow_sharestone',
        'waystones:lime_sharestone', 'waystones:pink_sharestone', 'waystones:gray_sharestone',
        'waystones:light_gray_sharestone'
    ];
    WAYSTONE_BLOCKS.forEach(block => {
        event.addBlockLootModifier(block)
            .apply(ctx => {
                const player = ctx.player;
                if (!player) return;
                const item = player.mainHandItem;
                if (!item || item.empty) {
                    ctx.loot.clear();
                    return;
                }
                const isItemAllowed = NETHERITE_LEVEL_PICKAXES.includes(String(item.id));
                if (isItemAllowed) return; 
                ctx.loot.clear();
            });
    });
    event.addLootTableModifier(/.*/).anyDimension("minecraft:overworld")
        .removeLoot(/.*(diamond|iron)_(sword|shovel|pickaxe|axe|hoe|helmet|chestplate|leggings|boots)/)
        .removeLoot('minecraft:blaze_rod')
        .removeLoot('minecraft:blaze_powder');
});

// Made by zakarum5835

EntityEvents.drops('goety:heresiarch', (event) => {
  event.cancel();
});