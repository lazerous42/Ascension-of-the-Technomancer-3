WorldgenEvents.remove((event) => {
    event.removeOres(ores => {
        // This targets the physical blocks being placed
        ores.blocks = [
            'caverns_and_chasms:deepslate_silver_ore',
            'caverns_and_chasms:silver_ore',
            'cgs:lead_ore',
            'iceandfire:deepslate_silver_ore',
            'iceandfire:silver_ore',
            'occultism:silver_ore',
            'occultism:silver_ore_deepslate'
        ];
    });
    // This targets feature generation
    event.removeFeatureById('underground_ores', [
        'immersiveengineering:lead',
        'immersiveengineering:silver',
        'immersiveengineering:nickel',
        'immersiveengineering:uranium'
    ]);
});
