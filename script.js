alert('+they are watching+')
let lastVal = null; // Store the last value

$('#click-me').click(function() {
 
    let val;
    do {
        val = Math.floor(Math.random() * 8) + 1;
    } while (val === lastVal);
    lastVal = val;

    switch(val){
        case 1:
            console.log('Suburban occultism!')
            $("#message").html('Turn the Light. Burn! Burn! BURN! The words lingered in the air. Michelle could feel their pressure. And then the horror of it overtook her. “Its burning…its burning!” she cried. “Its moving its tail around. Angry! Angry! Angry! The tail is Angry! The circles are Angry. They are Angry at her. Theres something wrong.” Michelle began to look frantically around her, moving her head from side to side to watch what was happening. “Hes saying something…Hes making all these signs…Theyre making their legs go, theyre stomping on the ground. Theyre making marks on the ground with their feet. NO! All….all where the marks are…its all on fire! It hurts me. I wont look. I wont listen.” The child stood there in a panic choking and gasping and crying. Suddenly she stiffened. “Yes, yes. Yes, I listen. I listen. Yes, sir. No. No. Dont want to be burned.” Again the leaden voice came from the fire…')
            break
        case 2:
            console.log('Brimstone in the mall!')
            $("#message").html('Theres a lady whos sure all that glitters is gold, and shes buying a stairway to Heaven. When she gets there she knows, if the stores are all closed, with a word she can get what she came for. Ooh, ooh, and shes buying a stairway to Heaven. Theres a sign on the wall, but she wants to be sure, cause you know sometimes words have two meanings. In a tree by the brook, theres a songbird who sings—sometimes all of our thoughts are misgiven. Ooh, it makes me wonder. Ooh, makes me wonder. Theres a feeling I get when I look to the West, and my spirit is crying for leaving. In my thoughts I have seen rings of smoke through the trees and the voices of those who stand looking. Ooh, it makes me wonder. Ooh, really makes me wonder. And its whispered that soon if we all call the tune, then the piper will lead us to reason, and a new day will dawn for those who stand long, and the forests will echo with laughter. Oh-oh-oh-oh-whoa. If theres a bustle in your hedgerow, dont be alarmed now—its just a spring clean for the May queen. Yes, there are two paths you can go by, but in the long run, theres still time to change the road youre on. And it makes me wonder. Ohh, whoa. Your head is humming, and it wont go, in case you dont know, the pipers calling you to join him. Dear lady, can you hear the wind blow? And did you know your stairway lies on the whispering wind? And as we wind on down the road, our shadows taller than our soul, there walks a lady we all know who shines white light and wants to show how everything still turns to gold. And if you listen very hard, the tune will come to you at last, when all are one, and one is all—to be a rock and not to roll. And shes buying a stairway to Heaven.')
            break
        case 3:
            console.log('Dark rites on vinyl!')
            $("#message").html('Dark rites on vinyl!')
            break
        case 4:
            console.log('Rock is the tool of the Devil!')
            $("#message").html('Your first step in playing an adventurer in the Dungeons & Dragons game is to imagine and create a character of your own. Your character is a combination of game statistics, roleplaying hooks, and your imagination. You choose a race (such as human or halfling) and a class (such as fighter or wizard). You also invent the personality, appearance, and backstory of your character. Once completed, your character serves as your representative in the game—your avatar in the Dungeons & Dragons world. Before you dive into step 1 below, think about the kind of adventurer you want to play. You might be a courageous fighter, a skulking rogue, a fervent cleric, or a flamboyant wizard. Or you might be more interested in an unconventional character, such as a brawny rogue who likes hand-to-hand combat, or a sharpshooter who picks off enemies from afar. Do you like fantasy fiction featuring dwarves or elves? Try building a character of one of those races. Do you want your character to be the toughest adventurer at the table? Consider a class like barbarian or paladin. If you dont know where else to begin, take a look at the illustrations in this book to see what catches your interest. Once you have a character in mind, follow these steps in order, making decisions that reflect the character you want. Your conception of your character might evolve with each choice you make. Whats important is that you come to the table with a character youre excited to play. Throughout this chapter, we use the term character sheet to mean whatever you use to track your character, whether its a formal character sheet (like the one at the end of this book), some form of digital record, or a piece of notebook paper. An official D&D character sheet is a fine place to start until you know what information you need and how you use it during the game.')
            break
        case 5:
            console.log('Youth corrupted!')
            $("#message").html('Youth destroyed!')
            break
        case 6:
            console.log('TV cursed my child!')
            $("#message").html('TV cursed my child!')
            break
        case 7:
            console.log('The end is nigh!')
            $("#message").html('The end is nigh!')
            break
        case 8:
            window.open ("https://www.popmart.com/us/search/LABUBU")
            break;
        default :
            console.log('The end is nigh!')
            $("#message").html('Suburban occultism!')
            break
    }
});
$('#audio-h1').click(function() {
    document.getElementById('audio').play();
});
$('#audio-h1 img').hover(
    function() {
        // On mouse enter
        $(this).attr('src', 'pentagram-hover.png'); // Replace with your hover image
    },
    function() {
        // On mouse leave
        $(this).attr('src', 'pentagram.png'); // Original image
    }
);