// Made by KCtops6

ItemEvents.modification(event => {
    event.modify('notreepunching:flint_pickaxe', item => {
        item.setTier(tier => {
            tier.level = 0;
        });
    });
});