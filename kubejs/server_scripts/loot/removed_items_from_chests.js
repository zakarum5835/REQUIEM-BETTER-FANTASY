//Made by zakarum5835

LootJS.modifiers((event) => {
    event.addLootTableModifier(/^minecraft:chests\/.*/).removeLoot('additionaladditions:rose_gold_upgrade');
    event.addLootTableModifier(/^minecraft:chests\/.*/).removeLoot('legendarysurvivaloverhaul:heart_container');
    event.addLootTableModifier(/^minecraft:chests\/.*/).removeLoot('legendarysurvivaloverhaul:heart_fragment');
});