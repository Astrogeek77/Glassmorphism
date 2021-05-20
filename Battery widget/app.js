let percentage = document.querySelector('.percentage')
let percent = document.querySelector('.percent')
let charging_bool = document.querySelector('.charging_bool')


navigator.getBattery().then(function (battery) {
    percentage.style.width = battery.level * 100
        + '%';
    percent.innerHTML = battery.level * 100
        + '%';
})

navigator.getBattery().then(function(battery) {
    function updateAllBatteryInfo(){
      updateChargeInfo();
      updateLevelInfo();
      updateChargingInfo();
      updateDischargingInfo();
    }
    updateAllBatteryInfo();
  
    battery.addEventListener('chargingchange', function(){
      updateChargeInfo();
    });

    function updateChargeInfo(){
      console.log("Battery Charging? "
                  + (battery.charging ? "Yes" : "No"));
    }
  
    battery.addEventListener('levelchange', function(){
      updateLevelInfo();
    });
    function updateLevelInfo(){
      console.log("Battery level: "
                  + battery.level * 100 + "%");
    }
  
    battery.addEventListener('chargingtimechange', function(){
      updateChargingInfo();
    });
    function updateChargingInfo(){
      console.log("Battery charging time: "
                   + battery.chargingTime + " seconds");
    }
  
    battery.addEventListener('dischargingtimechange', function(){
      updateDischargingInfo();
    });
    function updateDischargingInfo(){
      console.log("Battery discharging time: "
                   + battery.dischargingTime + " seconds");
    }
  
  });
  


// Dark theme toggle config
let sec = document.querySelector('.sec')
let toggle = document.querySelector('.toggle')

toggle.onclick = function () {
    sec.classList.toggle('dark')
}