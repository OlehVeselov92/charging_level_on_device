navigator.getBattery().then(function (battery) {
    function updateAllBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
    }
    updateAllBatteryInfo();
    battery.addEventListener('chargingchange', function () {
        updateChargeInfo();
    });

    function updateChargeInfo() {
        console.log(battery.charging);
        if (battery.charging) {
            document.querySelector('#status').innerHTML = 'Статус: Заряжается';
            document.querySelector('#battery-level').classList.add('battery-animation');
        }

        else {
            document.querySelector('#status').innerHTML = 'Статус: Не подключен';
            document.querySelector('#battery-level').classList.remove('battery-animation');
        }
    }

    battery.addEventListener('levelchange', updateLevelInfo);
    function updateLevelInfo() {
        document.querySelector('#battery-level-digit').innerHTML = battery.level * 100 + '%';
        document.querySelector('#battery-level').style.width = battery.level * 100 + '%';
    }

    battery.addEventListener('chargingtimechange',updateChargingInfo);

    function updateChargingInfo() {
        document.querySelector('#charging-time').innerHTML = 'Время, необходимое для полного заряда: ' + battery.chargingTime;
    }


    
})