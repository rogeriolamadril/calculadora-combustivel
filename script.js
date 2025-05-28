// Lista de Carros Populares e seus Consumos (aproximados, base INMETRO para versões comuns)
// (G) Gasolina, (E) Etanol, (D) Diesel. Cid = Cidade, Est = Estrada
const carDatabase = [
    // Top 20
    { display: "Fiat Strada (Volcano 1.3 AT)", G_cid: 12.1, G_est: 13.3, E_cid: 8.3, E_est: 9.4 },
    { display: "VW Polo (Comfortline 1.0 TSI AT)", G_cid: 12.5, G_est: 15.1, E_cid: 8.4, E_est: 10.5 },
    { display: "Chevrolet Onix (LT 1.0 MPFI MT)", G_cid: 13.3, G_est: 16.6, E_cid: 9.4, E_est: 11.0 },
    { display: "Hyundai HB20 (Comfort 1.0 MT)", G_cid: 13.5, G_est: 14.6, E_cid: 9.6, E_est: 10.4 },
    { display: "Chevrolet Onix Plus (LT 1.0 MPFI MT)", G_cid: 13.6, G_est: 17.5, E_cid: 9.5, E_est: 12.4 },
    { display: "Fiat Mobi (Like 1.0 Fire MT)", G_cid: 13.5, G_est: 15.0, E_cid: 9.6, E_est: 10.4 },
    { display: "VW T-Cross (Comfortline 1.0 TSI AT)", G_cid: 10.9, G_est: 13.5, E_cid: 7.6, E_est: 9.5 },
    { display: "Fiat Argo (Drive 1.0 MT)", G_cid: 13.4, G_est: 14.6, E_cid: 9.3, E_est: 10.3 },
    { display: "Chevrolet Tracker (1.0 Turbo AT)", G_cid: 11.2, G_est: 13.4, E_cid: 7.7, E_est: 9.5 },
    { display: "Hyundai Creta (Comfort 1.0T AT)", G_cid: 11.6, G_est: 12.5, E_cid: 8.2, E_est: 8.9 },
    { display: "Jeep Renegade (Sport T270 1.3T AT)", G_cid: 11.0, G_est: 12.8, E_cid: 7.7, E_est: 9.1 },
    { display: "Renault Kwid (Zen 1.0 MT)", G_cid: 15.3, G_est: 15.7, E_cid: 10.8, E_est: 11.0 },
    { display: "Fiat Pulse (Drive 1.3 AT)", G_cid: 12.1, G_est: 14.4, E_cid: 8.4, E_est: 10.2 },
    { display: "Jeep Compass (Longitude T270 1.3T AT)", G_cid: 10.3, G_est: 12.1, E_cid: 7.1, E_est: 8.6 },
    { display: "VW Nivus (Comfortline 1.0 TSI AT)", G_cid: 12.1, G_est: 14.2, E_cid: 8.3, E_est: 10.1 },
    { display: "Toyota Corolla (GLi 2.0 AT)", G_cid: 11.9, G_est: 14.2, E_cid: 8.3, E_est: 9.8 },
    { display: "Toyota Corolla Cross (XR 2.0 AT)", G_cid: 11.8, G_est: 13.0, E_cid: 8.2, E_est: 9.0 },
    { display: "Fiat Toro (Endurance T270 1.3T AT)", G_cid: 9.7, G_est: 11.6, E_cid: 6.8, E_est: 8.7 },
    { display: "Nissan Kicks (Sense 1.6 CVT)", G_cid: 11.4, G_est: 13.9, E_cid: 7.8, E_est: 9.6 },
    { display: "Honda HR-V (EX 1.5 CVT)", G_cid: 12.7, G_est: 13.9, E_cid: 8.8, E_est: 9.8 },
    // Carros 21-50
    { display: "VW Saveiro (Robust CS 1.6 MSI MT)", G_cid: 10.8, G_est: 12.4, E_cid: 7.5, E_est: 8.8 },
    { display: "Fiat Fastback (Audace T200 1.0T CVT)", G_cid: 11.9, G_est: 14.6, E_cid: 8.4, E_est: 10.2 },
    { display: "Citroën C3 (Live 1.0 MT)", G_cid: 12.9, G_est: 14.1, E_cid: 9.3, E_est: 10.0 },
    { display: "Renault Duster (Intense 1.6 MT)", G_cid: 11.2, G_est: 11.5, E_cid: 7.7, E_est: 8.0 },
    { display: "Toyota Hilux (SRV 2.8D AT 4x4)", D_cid: 10.1, D_est: 11.3 },
    { display: "Peugeot 208 (Like 1.0 MT)", G_cid: 13.6, G_est: 15.5, E_cid: 9.6, E_est: 11.0 },
    { display: "Fiat Cronos (Drive 1.0 MT)", G_cid: 13.3, G_est: 15.6, E_cid: 9.3, E_est: 11.0 },
    { display: "VW Virtus (Comfortline 1.0 TSI AT)", G_cid: 12.1, G_est: 14.7, E_cid: 8.2, E_est: 10.2 },
    { display: "Renault Sandero (S Edition 1.0 MT)", G_cid: 13.9, G_est: 14.2, E_cid: 9.5, E_est: 9.6 },
    { display: "Honda City Hatch (EXL 1.5 CVT)", G_cid: 13.3, G_est: 14.8, E_cid: 9.2, E_est: 10.5 },
    { display: "Honda City Sedan (EXL 1.5 CVT)", G_cid: 13.1, G_est: 15.2, E_cid: 9.1, E_est: 10.5 },
    { display: "Caoa Chery Tiggo 5X Pro (1.5T Híbrido Leve AT)", G_cid: 11.3, G_est: 12.7, E_cid: 7.7, E_est: 8.9 }, // Consumo Híbrido Leve
    { display: "Chevrolet S10 (LTZ 2.8D AT 4x4)", D_cid: 8.7, D_est: 11.0 },
    { display: "Mitsubishi L200 Triton (GLS 2.4D AT 4x4)", D_cid: 9.8, D_est: 11.8 },
    { display: "Caoa Chery Tiggo 7 Pro (Max Drive 1.6T AT)", G_cid: 9.9, G_est: 11.7 }, // Apenas Gasolina
    { display: "VW Taos (Comfortline 1.4 TSI AT)", G_cid: 10.9, G_est: 13.0, E_cid: 7.6, E_est: 9.1 },
    { display: "BYD Song Plus (Híbrido Plug-in)", G_comb_hibrido: 22.0 }, // Consumo combinado equivalente, muito variável
    { display: "Renault Oroch (Intense 1.6 MT)", G_cid: 10.7, G_est: 11.1, E_cid: 7.4, E_est: 7.8 },
    { display: "Ford Ranger (XLS 2.2D AT 4x4)", D_cid: 9.6, D_est: 11.3 },
    { display: "Nissan Versa (Sense 1.6 CVT)", G_cid: 11.7, G_est: 13.9, E_cid: 8.0, E_est: 10.0 },
    { display: "Caoa Chery Tiggo 8 (Max Drive 1.6T AT)", G_cid: 9.8, G_est: 12.0 }, // Apenas Gasolina
    { display: "Citroën C4 Cactus (Live 1.6 AT)", G_cid: 10.4, G_est: 12.6, E_cid: 7.3, E_est: 8.9 },
    { display: "Fiat Fiorino (Endurance 1.4 MT)", G_cid: 11.7, G_est: 12.4, E_cid: 8.1, E_est: 8.3 },
    { display: "GWM Haval H6 (PHEV)", G_comb_hibrido: 25.0 }, // Consumo combinado equivalente, muito variável
    { display: "Toyota Yaris Hatch (XL 1.5 CVT)", G_cid: 12.6, G_est: 13.8, E_cid: 8.7, E_est: 9.8 },
    { display: "Toyota Yaris Sedan (XL 1.5 CVT)", G_cid: 12.9, G_est: 14.7, E_cid: 8.9, E_est: 10.4 },
    { display: "Hyundai HB20S (Comfort 1.0 MT)", G_cid: 13.7, G_est: 15.0, E_cid: 9.5, E_est: 10.6 },
    { display: "Ram Rampage (Laramie 2.0T Diesel AT 4x4)", D_cid: 9.9, D_est: 12.4 },
    { display: "Renault Logan (Life 1.0 MT)", G_cid: 13.6, G_est: 14.9, E_cid: 9.4, E_est: 10.2 },
    { display: "Mitsubishi Eclipse Cross (GLS 1.5T AT)", G_cid: 10.9, G_est: 12.7 } // Apenas Gasolina
];


// Elementos do DOM
const fuelForm = document.getElementById('fuelForm');
const distanciaInput = document.getElementById('distancia');
const consumoInput = document.getElementById('consumo');
const precoGasolinaInput = document.getElementById('preco_gasolina');
const obterPrecoLocalBtn = document.getElementById('obterPrecoLocalBtn');
const precoLocalMsg = document.getElementById('precoLocalMsg');
const resultadoDiv = document.getElementById('resultado');
const litrosNecessariosSpan = document.getElementById('litrosNecessarios');
const custoTotalSpan = document.getElementById('custoTotal');
const carSelect = document.getElementById('carSelect');
const consumptionOptionsDiv = document.getElementById('consumptionOptions');

// Modal de erro
const errorModal = document.getElementById('errorModal');
const errorModalTitle = document.getElementById('errorModalTitle');
const errorModalMessage = document.getElementById('errorModalMessage');
const closeErrorModalBtn = document.getElementById('closeErrorModalBtn');

function showErrorModal(title, message) {
    errorModalTitle.textContent = title;
    errorModalMessage.textContent = message;
    errorModal.classList.remove('hidden');
}

closeErrorModalBtn.addEventListener('click', () => {
    errorModal.classList.add('hidden');
});

// Popular o dropdown de carros
carDatabase.forEach((car, index) => {
    const option = document.createElement('option');
    option.value = index; // Usar o índice do array como valor
    option.textContent = car.display;
    carSelect.appendChild(option);
});

// Lidar com a seleção de carro
carSelect.addEventListener('change', function() {
    consumptionOptionsDiv.innerHTML = ''; // Limpar opções anteriores
    const selectedCarIndex = this.value;

    if (selectedCarIndex === "") {
        consumoInput.value = ''; // Limpar campo de consumo se nenhuma opção for selecionada
        return;
    }

    const carData = carDatabase[selectedCarIndex];
    let hasOptions = false;

    const addConsumptionButton = (label, value) => {
        hasOptions = true;
        const p = document.createElement('p');
        p.innerHTML = `${label}: <strong>${value} km/L</strong> `;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = 'Usar';
        btn.classList.add('consumption-option-btn');
        btn.onclick = () => {
            consumoInput.value = value;
        };
        p.appendChild(btn);
        consumptionOptionsDiv.appendChild(p);
    };

    if (carData.G_cid) addConsumptionButton('Gasolina (Cidade)', carData.G_cid);
    if (carData.G_est) addConsumptionButton('Gasolina (Estrada)', carData.G_est);
    if (carData.E_cid) addConsumptionButton('Etanol (Cidade)', carData.E_cid);
    if (carData.E_est) addConsumptionButton('Etanol (Estrada)', carData.E_est);
    if (carData.D_cid) addConsumptionButton('Diesel (Cidade)', carData.D_cid);
    if (carData.D_est) addConsumptionButton('Diesel (Estrada)', carData.D_est);
    if (carData.G_comb_hibrido) addConsumptionButton('Híbrido (Gasolina Combinado Estimado)', carData.G_comb_hibrido);
    
    if (!hasOptions) {
         consumptionOptionsDiv.innerHTML = '<p class="text-gray-500">Nenhum dado de consumo específico disponível para seleção rápida para este modelo.</p>';
    }
});


obterPrecoLocalBtn.addEventListener('click', () => {
    precoLocalMsg.textContent = 'Tentando obter localização...';
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const precoMedioBrasil = 5.75;
                precoGasolinaInput.value = precoMedioBrasil.toFixed(2);
                precoLocalMsg.textContent = `Preço médio nacional (Brasil) sugerido: R$ ${precoMedioBrasil.toFixed(2)}. Ajuste se necessário.`;
                precoLocalMsg.classList.remove('text-red-500');
                precoLocalMsg.classList.add('text-green-600');
            },
            (error) => {
                let message = 'Não foi possível obter a localização. Insira o preço manualmente.';
                if (error.code === error.PERMISSION_DENIED) {
                    message = 'Permissão de localização negada. Insira o preço manualmente.';
                }
                precoLocalMsg.textContent = message;
                precoLocalMsg.classList.remove('text-green-600');
                precoLocalMsg.classList.add('text-red-500');
                showErrorModal('Erro de Localização', message);
            }
        );
    } else {
        const message = 'Geolocalização não é suportada por este navegador. Insira o preço manualmente.';
        precoLocalMsg.textContent = message;
        precoLocalMsg.classList.remove('text-green-600');
        precoLocalMsg.classList.add('text-red-500');
        showErrorModal('Erro de Localização', message);
    }
});

fuelForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const distancia = parseFloat(distanciaInput.value);
    const consumo = parseFloat(consumoInput.value);
    const precoGasolina = parseFloat(precoGasolinaInput.value);

    if (isNaN(distancia) || distancia <= 0) {
        showErrorModal('Dado Inválido', 'Por favor, insira uma distância válida (maior que zero).');
        distanciaInput.focus();
        return;
    }
    if (isNaN(consumo) || consumo <= 0) {
        showErrorModal('Dado Inválido', 'Por favor, insira um valor de consumo válido (maior que zero). Selecione um carro ou insira manualmente.');
        consumoInput.focus();
        return;
    }
    if (isNaN(precoGasolina) || precoGasolina <= 0) {
        showErrorModal('Dado Inválido', 'Por favor, insira um preço de combustível válido (maior que zero).');
        precoGasolinaInput.focus();
        return;
    }

    const litros = distancia / consumo;
    const custo = litros * precoGasolina;

    litrosNecessariosSpan.textContent = `${litros.toFixed(2)} litros`;
    custoTotalSpan.textContent = `R$ ${custo.toFixed(2)}`;
    resultadoDiv.classList.remove('hidden');
    
    if (window.innerWidth < 768) {
        resultadoDiv.scrollIntoView({ behavior: 'smooth' });
    }
});