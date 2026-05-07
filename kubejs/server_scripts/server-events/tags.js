// Made by KCtops6

// List of tags: https://minecraft.wiki/w/Item_tag_(Java_Edition) 

ServerEvents.tags('item', event => {
    event.add('minecraft:needs_netherite_tool', 'waystones:waystone');
    event.remove('minecraft:needs_diamond_tool', 'waystones:waystone');
    event.remove('minecraft:needs_iron_tool', 'waystones:waystone');
    event.remove('minecraft:needs_stone_tool', 'waystones:waystone');
    event.remove('minecraft:needs_wooden_tool', 'waystones:waystone');
});