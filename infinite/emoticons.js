module.exports = (function() {
    var emotes = {
    };

    var emotesKeys = Object.keys(emotes);
    var patterns = [];
    var metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/g;

    for (var i in emotes) {
        if (emotes.hasOwnProperty(i)) {
            patterns.push('(' + i.replace(metachars, '\\$&') + ')');
        }
    }
    var patternRegex = new RegExp(patterns.join('|'), 'g');

    var enableEmoticons = function() {
        for (var id in Rooms.rooms) {
            if (Rooms.rooms[id].type === 'chat') {
                Rooms.rooms[id].allowEmoticons = true;
            }
        }
    };

    return {
        emotes: emotes,
        emotesKeys: emotesKeys,
        patternRegex: patternRegex,
        enableEmoticons: enableEmoticons
    };
})();