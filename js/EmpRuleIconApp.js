var current = 0;
var img = [
    "img/EmpRuleBetween68.png",
    "img/EmpRuleOutside68.png",
    "img/EmpRuleBetween95.png",
    "img/EmpRuleOutside95.png",
    "img/EmpRuleBetween99.png",
    "img/EmpRuleOutside99.png"
    ];
            
function changeImage(){
    current = ((current +1) % 6);
    document.getElementById("EmpRuleIcon").src=img[current];
};