// define fuzzy library

import { fuzzy } from "fuzzy";

// definisikan variable fuzzy kedinginan

const temperature = new fuzzy.variable("temperature", [
        new fuzzy.temp("dingin", new fuzzy.Triangular(0, 0, 20)),
        new fuzzy.temp("sedang", new fuzzy.Triangular(15,20,25))

]);
