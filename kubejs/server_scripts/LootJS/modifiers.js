// Made by KCtops6

LootJS.modifiers(event => {
    event.addLootTableModifier(/^twilightforest:chests\/.*/).removeLoot('minecraft:blaze_rod');
    event.addLootTableModifier(/^minecraft:chests\/.*/).removeLoot('minecraft:netherite_upgrade_smithing_template');
    event.addEntityLootModifier('goety:heretic').removeLoot('goety:infernal_tome');
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
                if (item.id === 'minecraft:netherite_pickaxe') return;
                if (item.hasTag('minecraft:mineable/pickaxe') && !item.hasTag('minecraft:incorrect_for_diamond_tool')) return;
                ctx.loot.clear();
            });
    });
});