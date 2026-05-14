// Made by KCtops6
// Debug version for troubleshooting modpack compatibility

ItemEvents.modification(event => {
    const modifyTier = (itemID, newLevel) => {
        event.modify(itemID, item => {
            item.setTier(tier => {
                tier.level = newLevel;
            });
        });
    };
    modifyTier('notreepunching:flint_pickaxe', 0);
});