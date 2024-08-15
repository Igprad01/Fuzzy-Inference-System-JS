const suhuRuangan = (TemperatureRuangan) => {
        return {
                dingin:Math.max(0, Math.min(1,(25 - TemperatureRuangan)/ 5)),
                sejuk:Math.max(0, Math.min(1, (TemperatureRuangan - 26) / 5, (30 - TemperatureRuangan)/ 5)),
                hangat: Math.max(0, Math.min(1, (TemperatureRuangan - 31) /5, (35 - TemperatureRuangan)/ 5 )),
                panas:Math.max(0, Math.min(1, (TemperatureRuangan - 36) /6 ))
        };
};

const SuhuAC = (AC) => {
        return {
                cold:Math.max(0, Math.min(1, (20 - AC) / 4)),
                warm:Math.max(0, Math.min(1, (AC - 21) / 4 (25 - AC) /4 )),
                hot: Math.max(0, Math.min(1, (AC - 26) / 4(32 - AC) / 4))
        };
};


// Aturan rule fuzzy

const RuleFuzzyAC = (fuzzyTemp) => {
        return {
                cold: Math.max(fuzzyTemp.panas),
                warm: Math.max(fuzzyTemp.hangat),
                hot: Math.max(fuzzyTemp.dingin, fuzzyTemp.sejuk)
        };
};

const agresiasiFuzzyAC = (AcStatus) => {
        const hitungAgresiasi = AcStatus.cold * 16 + AcStatus.warm * 25 + AcStatus.hot * 30;
        const SumAgresiasi = AcStatus.cold + AcStatus.warm + AcStatus.hot;
        return hitungAgresiasi / SumAgresiasi;
};

// control Fuzzy Ac

const ControlFuzzyAC = (TemperatureRuangan) => {
        const Ruang = suhuRuangan(TemperatureRuangan);
        const aturanAC = RuleFuzzyAC(Ruang)
        const hitungAgresiasi = agresiasiFuzzyAC(aturanAC);

        return `Ac temperature set ${hitungAgresiasi.toFixed(2)} derajat`;
};

const suhuRuanganSaatIni = 37;
const action = ControlFuzzyAC(suhuRuanganSaatIni);
console.log(action);
 
