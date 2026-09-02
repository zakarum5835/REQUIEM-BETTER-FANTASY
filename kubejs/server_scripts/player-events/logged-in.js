// kubejs\server_scripts\player-events\logged-in.js
PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('first_join')) {
        event.player.stages.add('first_join');
        event.player.tell(Text.green('Welcome to The Last Act! In order to get started, open the Questbook.'));
    } else {
        event.player.tell(Text.green('Welcome back, don\'t forgot to follow the Storyline'));
    }
});
