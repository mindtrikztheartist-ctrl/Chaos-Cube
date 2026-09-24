let enemyHP = 50;
let enemyDamage = 10;
let playerHP = 100;

function attack() {
    enemyHP -= 10;

    document.getElementById("enemy-hp").textContent = enemyHP;
    document.getElementById("enemy-hp-fill").style.width = (enemyHP / 50) * 100 + "%";
  
    if (enemyHP <=0) {
        enemyHP = 0;
        document.getElementById("message").textContent =
            "Enemy defeated!";
    } else {
        playerHP -= enemyDamage;
        
        document.getElementById("hp").textContent = playerHP;

        document.getElementById("message").textContent =
            "You attacked the enemy! Enemy HP: " + enemyHP +
            " - Enemy attacks you for " + enemyDamage + " damage!";
      
    }
}

function magic() {
  document.getElementById("message").textContent =
    "You cast a spell!";
}

function defend() {
  document.getElementById("message").textContent =
    "You defend yourself!";
}

function useItem() {
  document.getElementById("message").textContent =
    "You used an item!";
}
    
