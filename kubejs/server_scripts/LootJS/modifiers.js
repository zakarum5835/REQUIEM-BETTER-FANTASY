LootJS.modifiers(event => {
    event.addLootTableModifier(/^twilightforest:chests\/.*/).removeLoot('minecraft:blaze_rod');
    event.addLootTableModifier(/^minecraft:chests\/.*/).removeLoot('minecraft:netherite_upgrade_smithing_template');
});