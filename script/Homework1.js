var age = prompt ("Вкажи свій вік числом");
if (age != +age){
    console.log(age+" не число");
}else if(+age < 0){
    console.log("вік не може бути від'ємним!");
}else if(+age == 0){
    console.log("ІДИ ЗВІДСИ, БРЕХЛО!");
}else if(+age >= 100){
    console.log("Вітаю тебе, довгожитель!")
}else if(+age == 1 || +age == 21 || +age == 31 || +age == 41 || +age == 51 || +age == 61 || +age == 71 || +age == 81 || +age == 91){
    console.log("Тобі "+age+" рік!");
}else if(+age>=2 && +age<=4 || +age>=22 && +age<=24 || +age>=32 && +age<=34 || +age>=42 && +age<=44 || +age>=52 && +age<=54 || +age>=62 && +age<=64 || +age>=72 && +age<=74 || +age>=82 && +age<=84 || +age>=92 && +age<=94){
    console.log("Тобі "+age+" роки!")
}else{
    console.log("Тобі "+age+" років!")
}