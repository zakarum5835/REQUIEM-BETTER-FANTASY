// Made by KCtops6

BlockEvents.broken(event => {
    const { block, player } = event;
    if (!block.id.startsWith('waystones:') || player.isCreative()) return;
    const allowedTools = ['minecraft:netherite_pickaxe'];
    let tool = event.item || player.mainHandItem || player.offHandItem;
    let isAllowed = allowedTools.includes(tool.id.toString());
    if (!isAllowed) event.cancel();
});