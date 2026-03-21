const FAQ_HOLDER = document.getElementById("faq-holder")

var faqs = [
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
    FaqData("Is this a scam?", "No. This is part of Hack Club, a 501(c)(3) nonprofit organization " +
            "that rewards teens across the world for making and shipping technical projects. " + 
            "You don't just have to take it from me. You can look them up if you want."),
]

for(var i = 0; i < faqs.length; i++) {
    var faqData = faqs[i];

    var faqPair = document.createElement("div");
    faqPair.classList.add(["faq-pair"]);
    faqPair.id = `faq-pair-${i}`;
    faqPair.setAttribute("open", "false");
    FAQ_HOLDER.appendChild(faqPair);

    var faqButton = document.createElement("button");
    faqButton.classList.add(["faq-question"]);
    faqButton.classList.add(["medium-text"]);
    faqButton.classList.add(["text-left"]);
    faqButton.id = `faq-question-${i}`;
    faqButton.setAttribute("onclick", `faqQuestionPressed(${i})`);
    faqButton.textContent = faqData.question;
    faqPair.appendChild(faqButton);

    var faqAnswer = document.createElement("p");
    faqAnswer.classList.add(["faq-answer"]);
    faqAnswer.classList.add(["small-text"]);
    faqAnswer.classList.add(["text-left"]);
    faqAnswer.id = `faq-answer-${i}`;
    faqAnswer.textContent = faqData.answer;
    faqPair.appendChild(faqAnswer);
}

function faqQuestionPressed(questionNum) {
    var faqPair = document.getElementById(`faq-pair-${questionNum}`);
    var isOpen = true ? faqPair.getAttribute("open") == "true" : false;
    faqPair.setAttribute("open", String(!isOpen));
}

function FaqData(question, answer) {
    return {
        question: question,
        answer: answer,
    }
}