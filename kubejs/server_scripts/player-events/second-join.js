PlayerEvents.loggedIn(event => {
    const player = event.player;
    if (!player.persistentData.joinCount) {
        player.persistentData.joinCount = 1;
    } else {
        player.persistentData.joinCount++;
    }
    if (player.persistentData.joinCount === 2) player.tell('Welcome back! This is your second time joining the world.');
});
