

namespace pokemon {

enum PersistentStatus {
    Burn,   // Attack is halved (each turn or once?), 1/8th of max HP reduces each turn.
    Freeze, // Unable to use moves until thaw. Thaw probability starts 10% and increases.
    Paralysis, // Speed is halved, 25% chance of being unable to make a move each turn.
    Poison, // 1/8th of max HP reduces each turn.
    BadlyPoisoned, // 1/16th then 2/16th then 3/16th ... HP reduction each turn.
    Sleep,  // Unable to use moves until wakeup. Wakeup happens at a random turn between 1 and 3.
};

enum VolatileStatus {

};

}