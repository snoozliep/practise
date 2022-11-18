var names=new Array();
names[0]="Mary";
names[1]="Toby";
names[2]="Ngawang";
names[3]="Jackson";
names[4]="Chelly";
names[5]="Me";
names[6]="Chu";
names[7]="Bella";
names[8]="Maria";
names[9]="James";
names[9]="Joseph";

for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0)==='J' || names[i].charAt(0)==='j') {
        console.log("Goodbye " + names[i]) }
    else {
        console.log("Hello " + names[i])
    }
}
