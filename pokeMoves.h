#include <pokeTypes.h>

namespace pokemon {



class SecondaryEffect {
    int probability;

    // Actual pokemon games have different types of secondary effects - besides just inflicting a status condition.
    // Such as lowering different battle stats of target, different terrain setting, flinching, and some hyper-specific ones too.
    // Only doing status conditions for now!!
};

class Move {
    Type type;
    int power;
    int accuracy;
    int pp;
    int priority;

};



}