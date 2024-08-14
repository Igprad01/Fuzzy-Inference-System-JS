// define fuzzy library

import { fuzzy } from "fuzzy";

// definisikan variable keanggotaan fuzzy suhu ruangan

const temperature = new fuzzy.variable("temperature", [
        new fuzzy.temp("dingin", new fuzzy.Triangular(0, 0, 25)),
        new fuzzy.temp("sejuk", new fuzzy.Triangular(26,28,30)),
        new fuzzy.temp("hangat", new fuzzy.Triangular(31,33,35)),
        new fuzzy.temp("panas", new fuzzy.Triangular(36, 38, 42))
]);

// definisi variable keanggotaan temperature ac
