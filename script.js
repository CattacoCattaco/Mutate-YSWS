const ORPHEUS_FLAG = document.getElementById("orpheus-flag");
const FLAG_AREA = document.getElementById("orpheus-flag-area");
const STEP_0 = document.getElementById("step-0");
const STEP_1 = document.getElementById("step-1");
const FAQ_HOLDER = document.getElementById("faq-holder");

const FAQS = [
    FaqData("Is this currently running?", "No. Currently this YSWS is only in development. " +
            "It is being proposed for the 2026 summer internship, although if there is enough " +
            "interest, I may still try to run it even if I don't get accepted."),
    FaqData("Am I eligeable to participate?", "If you're age is somewhere from 13 to 18 " +
            "(inclusive), yes!"),
    FaqData("What are the mutations?", "Each mutation asks you to add a feature to your game. " +
            "Some mutations may be really specific while others may be quite broad. " +
            "Each mutation also has a complexity, a minimum hour count, flask rate, and a DNA " +
            "payout. The minimum hour count, flask rate, and DNA payout both get bigger the " +
            "more complex the mutation is. To complete a mutation, you must add the requested " +
            "feature to your game in a significant way and devlog about how you incorporated it."),
    FaqData("What counts as a significant feature?", "A significant feature is a feature that " +
            "is mechanically unique from other elements of your game in a way that shows that " +
            "thought and care was put into its addition. For example, if you're asked to add " +
            "fire to your game, if you added a fire enemy that works the same as another enemy " +
            "but just has slightly different stats, that likely wouldn't count as a significant " +
            "feature. However, if you add a new status effect that represents being burned and " +
            "causes a unique (relative to other mechanics in your game) detriment to the player, " +
            "that would be considered a significant feature."),
    FaqData("What do you mean by \"Adapt your mutations to fit your game\"? / How creative " +
            "am I expected to be when adding my mutations?", "When adding mutations, you should " +
            "try to add them in a way that fits your game. If you are asked to add something " +
            "that doesn't feel like it meshes with the rest of your game, try to find a way to " +
            "make it fit rather than adding it in a way that feels out of place with the rest of " +
            "your game. If you don't think you can, try not to pick that mutation or you can use " +
            "your DNA to refresh your options."),
    FaqData("What if I want to add features unrelated to my mutations?", "If you want to add " +
            "features that aren't tied to your current mutation and aren't based on bugs you " +
            "encounter while working on your mutation, you should try to add them between mutations."),
    FaqData("Can I use AI?", "AI generated visual and audio assets are strictly prohibitted. " +
            "Using AI to generate code is strongly discouraged but you can use up to 30% AI " +
            "generated code. Again though, especially if you're a beginner, I'd encourage you " +
            "to try to avoid using AI to generate code, as an overreliance on AI can stunt " +
            "your learning and increase the portion of your time spent debugging, and who wants " +
            "to do that?"),
    FaqData("Is this a scam?", "No. This is part of Hack Club (if approved), a 501(c)(3) nonprofit " +
            "organization that rewards teens across the world for making and shipping technical " + 
            "projects. You don't just have to take it from me. You can look them up if you want."),
];

const MUTATIONS = [
    MutationData(
        "Flame",
        1,
        "Add a mechanic based on fire or burning to your game"
    ),
    MutationData(
        "Flight",
        2,
        "Add a mechanic that allows the player or some other character to fly."
    ),
    MutationData(
        "Platforming",
        3,
        "Add one or more platformer mechanics to your game. (If your game is already a platformer, you may reroll this mutation for free)"
    ),
    MutationData(
        "Multiplayer",
        5,
        "Add multiplayer support to your game"
    ),
    MutationData(
        "Roguelove",
        4,
        "Add one or more roguelike mechanics to your game. (If your game is already a roguelike, you may reroll this mutation for free)"
    ),
];

for(let i = 0; i < FAQS.length; i++) {
    let faqData = FAQS[i];

    let faqPair = document.createElement("div");
    faqPair.classList.add(["faq-pair"]);
    faqPair.id = `faq-pair-${i}`;
    faqPair.setAttribute("open", "false");
    FAQ_HOLDER.appendChild(faqPair);

    let faqButton = document.createElement("button");
    faqButton.classList.add(["faq-question"]);
    faqButton.classList.add(["medium-text"]);
    faqButton.classList.add(["text-left"]);
    faqButton.id = `faq-question-${i}`;
    faqButton.setAttribute("onclick", `faqQuestionPressed(${i})`);
    faqButton.setAttribute("type", "button")
    faqButton.textContent = faqData.question;
    faqPair.appendChild(faqButton);

    let faqAnswer = document.createElement("p");
    faqAnswer.classList.add(["faq-answer"]);
    faqAnswer.classList.add(["small-text"]);
    faqAnswer.classList.add(["text-left"]);
    faqAnswer.id = `faq-answer-${i}`;
    faqAnswer.textContent = faqData.answer;
    faqPair.appendChild(faqAnswer);
}

let unchosenMutations = MUTATIONS.slice();
let chosenMutations = [];
for(let i = 0; i < 3; i++) {
    let index = Math.floor(Math.random() * unchosenMutations.length);
    chosenMutations.push(unchosenMutations[index]);
    unchosenMutations.splice(index, 1);
}

for(let i = 0; i < 3; i++) {
    let mutation = chosenMutations[i];

    let mutationBox = document.createElement("div");
    mutationBox.classList.add(["mutation-box"]);
    mutationBox.id = `mutation-box-${i}`;
    STEP_1.appendChild(mutationBox);

    let mutationName = document.createElement("p");
    mutationName.classList.add(["large-text"]);
    mutationName.classList.add(["text-center"]);
    mutationName.textContent = mutation.name;
    mutationBox.appendChild(mutationName);

    let mutationComplexity = document.createElement("p");
    mutationComplexity.classList.add(["medium-text"]);
    mutationComplexity.classList.add(["text-center"]);
    mutationComplexity.textContent = `Complexity: ${mutation.complexity}/5`;
    mutationBox.appendChild(mutationComplexity);

    let mutationDescription = document.createElement("p");
    mutationDescription.classList.add(["small-text"]);
    mutationDescription.classList.add(["text-left"]);
    mutationDescription.textContent = mutation.description;
    mutationBox.appendChild(mutationDescription);
}

rescaleFlagArea()
new ResizeObserver(rescaleFlagArea).observe(ORPHEUS_FLAG)

function flagHovered() {
    ORPHEUS_FLAG.setAttribute("src", "sprites/orpheus_flag_hover.png")
}

function flagUnhovered() {
    ORPHEUS_FLAG.setAttribute("src", "sprites/orpheus_flag.png")
}

function flagPressed() {
    ORPHEUS_FLAG.setAttribute("src", "sprites/orpheus_flag_press.png")
}

function flagUnpressed() {
    ORPHEUS_FLAG.setAttribute("src", "sprites/orpheus_flag_hover.png")
}

function rescaleFlagArea() {
    let scale = window.getComputedStyle(FLAG_AREA).getPropertyValue('--scale');
    scale = parseInt(scale)
    let unscaledCoords = [
        0, 7,
        1, 7,
        1, 8,
        3, 8,
        3, 9,
        5, 9,
        5, 10,
        7, 10,
        7, 11,
        10, 11,
        10, 12,
        13, 12,
        13, 13,
        14, 13,
        14, 14,
        14, 15,
        15, 13,
        16, 13,
        16, 11,
        17, 11,
        17, 9,
        18, 9,
        18, 7,
        19, 7,
        19, 4,
        27, 4,
        27, 5,
        30, 5,
        30, 6,
        33, 6,
        33, 7,
        35, 7,
        35, 8,
        39, 8,
        39, 9,
        44, 9,
        44, 8,
        47, 8,
        47, 7,
        51, 7,
        51, 6,
        53, 6,
        53, 7,
        54, 7,
        54, 8,
        55, 8,
        55, 9,
        56, 9,
        56, 11,
        55, 11,
        55, 12,
        54, 12,
        54, 13,
        53, 13,
        53, 14,
        52, 14,
        52, 15,
        50, 15,
        50, 16,
        49, 16,
        49, 17,
        47, 17,
        47, 18,
        45, 18,
        45, 19,
        41, 19,
        41, 20,
        38, 20,
        38, 19,
        32, 19,
        32, 18,
        28, 18,
        28, 17,
        25, 17,
        25, 16,
        21, 16,
        21, 15,
        16, 15,
        16, 16,
        17, 16,
        17, 17,
        18, 17,
        18, 19,
        17, 19,
        17, 22,
        16, 22,
        16, 23,
        15, 23,
        15, 24,
        16, 24,
        16, 26,
        15, 26,
        15, 27,
        11, 27,
        11, 28,
        6, 28,
        6, 27,
        3, 27,
        3, 26,
        1, 26,
        1, 25,
        0, 25,
    ]

    let coordsString = ""
    for(let i = 0; i < unscaledCoords.length; i++) {
        coordsString += `${unscaledCoords[i] * scale}, `
    }
    coordsString += `${unscaledCoords[0] * scale}, ${unscaledCoords[1] * scale}`

    FLAG_AREA.setAttribute("coords", coordsString)
}

function faqQuestionPressed(questionNum) {
    let faqPair = document.getElementById(`faq-pair-${questionNum}`);
    let isOpen = true ? faqPair.getAttribute("open") == "true" : false;
    faqPair.setAttribute("open", String(!isOpen));
}

function FaqData(question, answer) {
    return {
        question: question,
        answer: answer,
    }
}

function MutationData(name, complexity, description) {
    return {
        name: name,
        complexity: complexity,
        description: description,
    }
}