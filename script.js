// Versão 0.2.3

const carDatabase = [
    { display: "BYD Song Plus (Híbrido Plug-in)", G_comb_hibrido: 22.0, isFlex: false, isHybrid: true, isDiesel: false },
    { display: "Caoa Chery Tiggo 5X Pro (1.5T Híbrido Leve AT)", G_cid: 11.3, G_est: 12.7, E_cid: 7.7, E_est: 8.9, isFlex: true, isHybrid: true, isDiesel: false },
    { display: "Caoa Chery Tiggo 7 Pro (Max Drive 1.6T AT)", G_cid: 9.9, G_est: 11.7, isFlex: false, isHybrid: false, isDiesel: false },
    { display: "Caoa Chery Tiggo 8 (Max Drive 1.6T AT)", G_cid: 9.8, G_est: 12.0, isFlex: false, isHybrid: false, isDiesel: false },
    { display: "Chevrolet Onix (LT 1.0 MPFI MT)", G_cid: 13.3, G_est: 16.6, E_cid: 9.4, E_est: 11.0, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Chevrolet Onix Plus (LT 1.0 MPFI MT)", G_cid: 13.6, G_est: 17.5, E_cid: 9.5, E_est: 12.4, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Chevrolet S10 (LTZ 2.8D AT 4x4)", D_cid: 8.7, D_est: 11.0, isFlex: false, isHybrid: false, isDiesel: true },
    { display: "Chevrolet Tracker (1.0 Turbo AT)", G_cid: 11.2, G_est: 13.4, E_cid: 7.7, E_est: 9.5, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Citroën C3 (Live 1.0 MT)", G_cid: 12.9, G_est: 14.1, E_cid: 9.3, E_est: 10.0, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Citroën C4 Cactus (Live 1.6 AT)", G_cid: 10.4, G_est: 12.6, E_cid: 7.3, E_est: 8.9, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Fiat Argo (Drive 1.0 MT)", G_cid: 13.4, G_est: 14.6, E_cid: 9.3, E_est: 10.3, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Fiat Cronos (Drive 1.0 MT)", G_cid: 13.3, G_est: 15.6, E_cid: 9.3, E_est: 11.0, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Fiat Fastback (Audace T200 1.0T CVT)", G_cid: 11.9, G_est: 14.6, E_cid: 8.4, E_est: 10.2, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Fiat Fiorino (Endurance 1.4 MT)", G_cid: 11.7, G_est: 12.4, E_cid: 8.1, E_est: 8.3, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Fiat Mobi (Like 1.0 Fire MT)", G_cid: 13.5, G_est: 15.0, E_cid: 9.6, E_est: 10.4, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Fiat Pulse (Drive 1.3 AT)", G_cid: 12.1, G_est: 14.4, E_cid: 8.4, E_est: 10.2, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Fiat Strada (Volcano 1.3 AT)", G_cid: 12.1, G_est: 13.3, E_cid: 8.3, E_est: 9.4, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Fiat Toro (Endurance T270 1.3T AT)", G_cid: 9.7, G_est: 11.6, E_cid: 6.8, E_est: 8.7, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Ford Ranger (XLS 2.2D AT 4x4)", D_cid: 9.6, D_est: 11.3, isFlex: false, isHybrid: false, isDiesel: true },
    { display: "GWM Haval H6 (PHEV)", G_comb_hibrido: 25.0, isFlex: false, isHybrid: true, isDiesel: false },
    { display: "Honda City Hatch (EXL 1.5 CVT)", G_cid: 13.3, G_est: 14.8, E_cid: 9.2, E_est: 10.5, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Honda City Sedan (EXL 1.5 CVT)", G_cid: 13.1, G_est: 15.2, E_cid: 9.1, E_est: 10.5, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Honda HR-V (EX 1.5 CVT)", G_cid: 12.7, G_est: 13.9, E_cid: 8.8, E_est: 9.8, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Hyundai Creta (Comfort 1.0T AT)", G_cid: 11.6, G_est: 12.5, E_cid: 8.2, E_est: 8.9, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Hyundai HB20 (Comfort 1.0 MT)", G_cid: 13.5, G_est: 14.6, E_cid: 9.6, E_est: 10.4, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Hyundai HB20S (Comfort 1.0 MT)", G_cid: 13.7, G_est: 15.0, E_cid: 9.5, E_est: 10.6, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Jeep Compass (Longitude T270 1.3T AT)", G_cid: 10.3, G_est: 12.1, E_cid: 7.1, E_est: 8.6, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Jeep Renegade (Sport T270 1.3T AT)", G_cid: 11.0, G_est: 12.8, E_cid: 7.7, E_est: 9.1, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Mitsubishi Eclipse Cross (GLS 1.5T AT)", G_cid: 10.9, G_est: 12.7, isFlex: false, isHybrid: false, isDiesel: false },
    { display: "Mitsubishi L200 Triton (GLS 2.4D AT 4x4)", D_cid: 9.8, D_est: 11.8, isFlex: false, isHybrid: false, isDiesel: true },
    { display: "Nissan Kicks (Sense 1.6 CVT)", G_cid: 11.4, G_est: 13.9, E_cid: 7.8, E_est: 9.6, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Nissan Versa (Sense 1.6 CVT)", G_cid: 11.7, G_est: 13.9, E_cid: 8.0, E_est: 10.0, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Peugeot 208 (Like 1.0 MT)", G_cid: 13.6, G_est: 15.5, E_cid: 9.6, E_est: 11.0, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Ram Rampage (Laramie 2.0T Diesel AT 4x4)", D_cid: 9.9, D_est: 12.4, isFlex: false, isHybrid: false, isDiesel: true },
    { display: "Renault Duster (Intense 1.6 MT)", G_cid: 11.2, G_est: 11.5, E_cid: 7.7, E_est: 8.0, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Renault Kwid (Zen 1.0 MT)", G_cid: 15.3, G_est: 15.7, E_cid: 10.8, E_est: 11.0, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Renault Logan (Life 1.0 MT)", G_cid: 13.6, G_est: 14.9, E_cid: 9.4, E_est: 10.2, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Renault Oroch (Intense 1.6 MT)", G_cid: 10.7, G_est: 11.1, E_cid: 7.4, E_est: 7.8, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Renault Sandero (S Edition 1.0 MT)", G_cid: 13.9, G_est: 14.2, E_cid: 9.5, E_est: 9.6, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Toyota Corolla (GLi 2.0 AT)", G_cid: 11.9, G_est: 14.2, E_cid: 8.3, E_est: 9.8, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Toyota Corolla Cross (XR 2.0 AT)", G_cid: 11.8, G_est: 13.0, E_cid: 8.2, E_est: 9.0, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Toyota Hilux (SRV 2.8D AT 4x4)", D_cid: 10.1, D_est: 11.3, isFlex: false, isHybrid: false, isDiesel: true },
    { display: "Toyota Yaris Hatch (XL 1.5 CVT)", G_cid: 12.6, G_est: 13.8, E_cid: 8.7, E_est: 9.8, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "Toyota Yaris Sedan (XL 1.5 CVT)", G_cid: 12.9, G_est: 14.7, E_cid: 8.9, E_est: 10.4, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "VW Nivus (Comfortline 1.0 TSI AT)", G_cid: 12.1, G_est: 14.2, E_cid: 8.3, E_est: 10.1, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "VW Polo (Comfortline 1.0 TSI AT)", G_cid: 12.5, G_est: 15.1, E_cid: 8.4, E_est: 10.5, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "VW Saveiro (Robust CS 1.6 MSI MT)", G_cid: 10.8, G_est: 12.4, E_cid: 7.5, E_est: 8.8, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "VW T-Cross (Comfortline 1.0 TSI AT)", G_cid: 10.9, G_est: 13.5, E_cid: 7.6, E_est: 9.5, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "VW Taos (Comfortline 1.4 TSI AT)", G_cid: 10.9, G_est: 13.0, E_cid: 7.6, E_est: 9.1, isFlex: true, isHybrid: false, isDiesel: false },
    { display: "VW Virtus (Comfortline 1.0 TSI AT)", G_cid: 12.1, G_est: 14.7, E_cid: 8.2, E_est: 10.2, isFlex: true, isHybrid: false, isDiesel: false },
];
// Ordenar carDatabase alfabeticamente pelo nome de exibição
carDatabase.sort((a, b) => a.display.localeCompare(b.display));

document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica completa da v0.2.3 ---

    const fuelForm = document.getElementById('fuelForm');
    const distanciaInput = document.getElementById('distancia');
    const consumoInput = document.getElementById('consumo');
    const precoCombustivelInput = document.getElementById('preco_combustivel');
    const precoCombustivelLabel = document.getElementById('precoCombustivelLabel');
    const obterPrecoLocalBtn = document.getElementById('obterPrecoLocalBtn');
    const precoLocalMsg = document.getElementById('precoLocalMsg');
    const resultadoDiv = document.getElementById('resultado');
    const litrosNecessariosSpan = document.getElementById('litrosNecessarios');
    const custoTotalSpan = document.getElementById('custoTotal');
    const carSelect = document.getElementById('carSelect');
    const fuelTypeSelectorDiv = document.getElementById('fuelTypeSelector');
    const consumptionOptionsDiv = document.getElementById('consumptionOptions');
    const roundTripCheckbox = document.getElementById('roundTripCheckbox');
    const myCarConsumptionInput = document.getElementById('myCarConsumptionInput');
    const saveMyCarBtn = document.getElementById('saveMyCarBtn');
    const loadMyCarBtn = document.getElementById('loadMyCarBtn');
    const myCarStatus = document.getElementById('myCarStatus');
    const historyListDiv = document.getElementById('historyList');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    
    const errorModal = document.getElementById('errorModal');
    const errorModalTitle = document.getElementById('errorModalTitle');
    const errorModalMessage = document.getElementById('errorModalMessage');
    const closeErrorModalBtn = document.getElementById('closeErrorModalBtn');

    let currentSelectedFuelType = 'gasolina'; 

    function showErrorModal(title, message) {
        if (errorModalTitle && errorModalMessage && errorModal) {
            errorModalTitle.textContent = title;
            errorModalMessage.textContent = message;
            errorModal.classList.remove('hidden');
        } else {
            alert(title + "\n" + message); 
        }
    }

    if (closeErrorModalBtn) {
        closeErrorModalBtn.addEventListener('click', () => {
            if(errorModal) errorModal.classList.add('hidden');
        });
    }

    if (carSelect) {
        carDatabase.forEach((car) => { 
            const option = document.createElement('option');
            option.value = car.display; 
            option.textContent = car.display;
            carSelect.appendChild(option);
        });
    }
    
    if (saveMyCarBtn) {
        saveMyCarBtn.addEventListener('click', () => {
            const myConsumption = parseFloat(myCarConsumptionInput.value);
            if (!isNaN(myConsumption) && myConsumption > 0) {
                localStorage.setItem('myCarConsumption', myConsumption);
                myCarStatus.textContent = `Consumo de ${myConsumption} km/L salvo!`;
                setTimeout(() => { if(myCarStatus) myCarStatus.textContent = ''; }, 3000);
            } else {
                showErrorModal('Dado Inválido', 'Insira um valor de consumo válido para salvar.');
            }
        });
    }

    if (loadMyCarBtn) {
        loadMyCarBtn.addEventListener('click', () => {
            const savedConsumption = localStorage.getItem('myCarConsumption');
            if (savedConsumption) {
                consumoInput.value = savedConsumption;
                myCarStatus.textContent = `Consumo ${savedConsumption} km/L carregado!`;
                setTimeout(() => { if(myCarStatus) myCarStatus.textContent = ''; }, 3000);
            } else {
                showErrorModal('Meu Carro', 'Nenhum consumo salvo. Salve um primeiro.');
            }
        });
    }
        
    function updateFuelPriceLabel(fuelType) {
        if (!precoCombustivelLabel) return;
        if (fuelType === 'etanol') {
            precoCombustivelLabel.textContent = 'Preço do Etanol (R$/L)';
        } else if (fuelType === 'diesel') {
            precoCombustivelLabel.textContent = 'Preço do Diesel (R$/L)';
        } else { 
            precoCombustivelLabel.textContent = 'Preço da Gasolina (R$/L)';
        }
    }

    function displayDetailedConsumptionOptions(carData, fuel) {
        if (!consumptionOptionsDiv || !consumoInput) return;
        consumptionOptionsDiv.innerHTML = ''; 
        let hasDetailedOptions = false;

        const addDetailedConsumptionButton = (label, value) => {
            if (value === undefined || value === null) return;
            hasDetailedOptions = true;
            const p = document.createElement('p');
            p.innerHTML = `${label}: <strong>${value} km/L</strong> `;
            const btn = document.createElement('button');
            btn.type = 'button'; btn.textContent = 'Usar'; btn.classList.add('consumption-option-btn');
            btn.onclick = () => { consumoInput.value = value; };
            p.appendChild(btn); consumptionOptionsDiv.appendChild(p);
        };

        if (fuel === 'gasolina') {
            addDetailedConsumptionButton('Gasolina (Cidade)', carData.G_cid);
            addDetailedConsumptionButton('Gasolina (Estrada)', carData.G_est);
            if (carData.isHybrid && carData.G_comb_hibrido) {
                 addDetailedConsumptionButton('Híbrido (Gas. Combinado Estim.)', carData.G_comb_hibrido);
            }
        } else if (fuel === 'etanol') {
            addDetailedConsumptionButton('Etanol (Cidade)', carData.E_cid);
            addDetailedConsumptionButton('Etanol (Estrada)', carData.E_est);
        } else if (fuel === 'diesel') {
            addDetailedConsumptionButton('Diesel (Cidade)', carData.D_cid);
            addDetailedConsumptionButton('Diesel (Estrada)', carData.D_est);
        }
        if (!hasDetailedOptions) consumptionOptionsDiv.innerHTML = '<p class="text-xs text-gray-500">Dados de consumo não disponíveis.</p>';
    }
    
    if (carSelect) {
        carSelect.addEventListener('change', function() {
            consumptionOptionsDiv.innerHTML = '';
            if(fuelTypeSelectorDiv) fuelTypeSelectorDiv.innerHTML = '';
            const selectedCarDisplay = this.value; 

            if (selectedCarDisplay === "") {
                if(consumoInput) consumoInput.value = '';
                updateFuelPriceLabel('gasolina');
                return;
            }
            const carData = carDatabase.find(car => car.display === selectedCarDisplay);

            if (!carData) {
                showErrorModal("Erro", "Carro não encontrado na base de dados.");
                return;
            }

            if (carData.isFlex) {
                currentSelectedFuelType = 'gasolina'; 
                updateFuelPriceLabel('gasolina');
                ['Gasolina', 'Etanol'].forEach(fuel => {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.textContent = `Usar ${fuel}`;
                    btn.classList.add('fuel-type-btn');
                    btn.onclick = () => {
                        currentSelectedFuelType = fuel.toLowerCase();
                        updateFuelPriceLabel(currentSelectedFuelType);
                        displayDetailedConsumptionOptions(carData, currentSelectedFuelType);
                    };
                    fuelTypeSelectorDiv.appendChild(btn);
                });
                displayDetailedConsumptionOptions(carData, 'gasolina');
            } else if (carData.isDiesel) {
                currentSelectedFuelType = 'diesel';
                updateFuelPriceLabel('diesel');
                displayDetailedConsumptionOptions(carData, 'diesel');
            } else { 
                currentSelectedFuelType = 'gasolina';
                updateFuelPriceLabel('gasolina');
                displayDetailedConsumptionOptions(carData, 'gasolina');
            }
        });
    }
    
    const MAX_HISTORY_ITEMS = 5;
    let calculationHistory = JSON.parse(localStorage.getItem('calculationHistory')) || [];

    function displayHistory() {
        if (!historyListDiv) return;
        historyListDiv.innerHTML = '';
        if (calculationHistory.length === 0) {
            historyListDiv.innerHTML = '<p class="text-xs text-gray-500">Nenhum cálculo salvo ainda.</p>';
            if(clearHistoryBtn) clearHistoryBtn.classList.add('hidden');
            return;
        }

        calculationHistory.forEach((item) => {
            const div = document.createElement('div');
            div.classList.add('history-item');
            div.innerHTML = `
                Dist: ${item.distancia_original}km ${item.roundTrip ? '(Ida e Volta)' : ''}, Cons: ${item.consumo}km/L, Preço: R$${item.preco.toFixed(2)}/L (${item.fuelTypeLabel})<br>
                Litros: ${item.litros.toFixed(2)}L, Custo Total: <strong class="text-blue-600">R$${item.custo.toFixed(2)}</strong>
            `;
            historyListDiv.appendChild(div);
        });
        if(clearHistoryBtn) clearHistoryBtn.classList.remove('hidden');
    }

    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', () => {
            calculationHistory = [];
            localStorage.removeItem('calculationHistory');
            displayHistory();
        });
    }
    
    if (obterPrecoLocalBtn) {
         obterPrecoLocalBtn.addEventListener('click', () => {
            precoLocalMsg.textContent = 'Tentando obter localização...';
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const precoMedioBrasil = 5.75; 
                        precoCombustivelInput.value = precoMedioBrasil.toFixed(2);
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
                const message = 'Geolocalização não é suportada. Insira o preço manualmente.';
                precoLocalMsg.textContent = message;
                precoLocalMsg.classList.remove('text-green-600');
                precoLocalMsg.classList.add('text-red-500');
                showErrorModal('Erro de Geolocalização', message);
            }
        });
    }
    
    if (fuelForm) {
        fuelForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let distanciaOriginal = parseFloat(distanciaInput.value);
            let distanciaCalculo = distanciaOriginal; 
            const consumo = parseFloat(consumoInput.value);
            const preco = parseFloat(precoCombustivelInput.value);

            if (isNaN(distanciaOriginal) || distanciaOriginal <= 0) {
                showErrorModal('Distância Inválida', 'Por favor, insira uma distância válida.');
                distanciaInput.focus();
                return;
            }

            if (roundTripCheckbox && roundTripCheckbox.checked) {
                distanciaCalculo *= 2;
            }
            
            if (isNaN(consumo) || consumo <= 0) { showErrorModal('Dado Inválido', 'Insira um consumo válido.'); consumoInput.focus(); return; }
            if (isNaN(preco) || preco <= 0) { showErrorModal('Dado Inválido', 'Insira um preço de combustível válido.'); precoCombustivelInput.focus(); return; }

            const litros = distanciaCalculo / consumo;
            const custo = litros * preco;

            litrosNecessariosSpan.textContent = `${litros.toFixed(2)} litros`;
            custoTotalSpan.textContent = `R$ ${custo.toFixed(2)}`;
            resultadoDiv.classList.remove('hidden');
            
            let fuelTypeLabelForHistory = "Combustível";
            if (currentSelectedFuelType === 'gasolina') fuelTypeLabelForHistory = "Gasolina";
            else if (currentSelectedFuelType === 'etanol') fuelTypeLabelForHistory = "Etanol";
            else if (currentSelectedFuelType === 'diesel') fuelTypeLabelForHistory = "Diesel";
            else { 
                 const selectedCarDisplay = carSelect ? carSelect.value : "";
                 const carData = carDatabase.find(car => car.display === selectedCarDisplay);
                 if (carData && carData.isHybrid) {
                     fuelTypeLabelForHistory = "Híbrido (Gas.)";
                 }
            }

            calculationHistory.unshift({ 
                distancia_original: distanciaOriginal,
                consumo: consumo, 
                preco: preco, 
                roundTrip: roundTripCheckbox.checked,
                fuelTypeLabel: fuelTypeLabelForHistory,
                litros: litros, 
                custo: custo 
            });
            if (calculationHistory.length > MAX_HISTORY_ITEMS) calculationHistory.pop();
            localStorage.setItem('calculationHistory', JSON.stringify(calculationHistory));
            displayHistory();

            if (window.innerWidth < 768 && resultadoDiv) resultadoDiv.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    displayHistory(); 
});
