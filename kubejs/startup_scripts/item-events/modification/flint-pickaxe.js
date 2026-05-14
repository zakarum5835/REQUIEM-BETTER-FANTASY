// Made by KCtops6
// Debug version for troubleshooting modpack compatibility

ItemEvents.modification(event => {
    console.info('KubeJS: Item modification script started...');
    const modifyTier = (itemID, newLevel) => {
        try {
            console.info(`KubeJS: Attempting to modify tier for [${itemID}] to level ${newLevel}`);
            
            event.modify(itemID, item => {
                item.setTier(tier => {
                    tier.level = newLevel;
                });
            });
            
            console.info(`KubeJS: Successfully applied modification to [${itemID}]`);
        } catch (err) {
            console.error(`KubeJS: Failed to modify [${itemID}]. Error: ${err}`);
        }
    };
    modifyTier('notreepunching:flint_pickaxe', 0);
    modifyTier('minecraft:netherite_pickaxe', 0);
    console.info('KubeJS: Item modification script finished.');
});