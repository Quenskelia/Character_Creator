const button = document.getElementById('submitButton');
button.addEventListener('click', function() {
    const characterName = document.getElementById('nameInput').value;
    const characterRace = document.getElementById('raceSelect').value;
    const characterClass = document.getElementById('classSelect').value;
    const characterGender = document.getElementById('genderSelect').value;
    const characterAge = document.getElementById('ageInput').value;
    const characterAppearance = document.getElementById('appearanceInput').value;
    const characterAlignment = document.getElementById('alignmentSelect').value;
    const characterBackground = document.getElementById('backgroundSelect').value;
    const characterPersonality = document.getElementById('personalityInput').value;
    const characterTraits = document.getElementById('traitsInput').value;
    const characterFlaws = document.getElementById('flawsInput').value;
    const characterIdeals = document.getElementById('idealsInput').value;
    const characterBonds = document.getElementById('bondsInput').value;
    const characterBackstory = document.getElementById('backstoryInput').value;
    const characterStrength = document.getElementById('strengthInput').value;
    const characterDexterity = document.getElementById('dexterityInput').value;
    const characterConstitution = document.getElementById('constitutionInput').value;
    const characterIntelligence = document.getElementById('intelligenceInput').value;
    const characterWisdom = document.getElementById('wisdomInput').value;
    const characterCharisma = document.getElementById('charismaInput').value;
    const characterWeapon = document.getElementById('weaponSelect').value;
    const characterSecondary = document.getElementById('secondarySelect').value;
    const characterArmor = document.getElementById('armorSelect').value;
    const characterMoney = document.getElementById('moneyInput').value;

    const output = document.getElementById('characterOutput');
    output.innerHTML = `
        <h3>Your Character</h3>
        <p><strong>Name:</strong> ${characterName}</p>
        <p><strong>Race:</strong> ${characterRace}</p>
        <p><strong>Class:</strong> ${characterClass}</p>
        <p><strong>Gender:</strong> ${characterGender}</p>
        <p><strong>Age:</strong> ${characterAge}</p>
        <p><strong>Appearance:</strong> ${characterAppearance}</p>
        <p><strong>Alignment:</strong> ${characterAlignment}</p>
        <p><strong>Background:</strong> ${characterBackground}</p>
        <p><strong>Personality:</strong> ${characterPersonality}</p>
        <p><strong>Traits:</strong> ${characterTraits}</p>
        <p><strong>Flaws:</strong> ${characterFlaws}</p>
        <p><strong>Ideals:</strong> ${characterIdeals}</p>
        <p><strong>Bonds:</strong> ${characterBonds}</p>
        <p><strong>Backstory:</strong> ${characterBackstory}</p>
        <p><strong>Strength:</strong> ${characterStrength}</p>
        <p><strong>Dexterity:</strong> ${characterDexterity}</p>
        <p><strong>Constitution:</strong> ${characterConstitution}</p>
        <p><strong>Intelligence:</strong> ${characterIntelligence}</p>
        <p><strong>Wisdom:</strong> ${characterWisdom}</p>
        <p><strong>Charisma:</strong> ${characterCharisma}</p>
        <p><strong>Weapon:</strong> ${characterWeapon}</p>
        <p><strong>Secondary Item:</strong> ${characterSecondary}</p>
        <p><strong>Armor:</strong> ${characterArmor}</p>
        <p><strong>Money:</strong> ${characterMoney}</p>
    `;

    if (!characterName || !characterRace || !characterClass || !characterGender || !characterAge || !characterAppearance || !characterAlignment || !characterBackground || !characterPersonality || !characterTraits || !characterFlaws || !characterIdeals || !characterBonds || !characterBackstory || !characterStrength || !characterDexterity || !characterConstitution || !characterIntelligence || !characterWisdom || !characterCharisma || !characterWeapon || !characterSecondary || !characterArmor || !characterMoney) {
        alert('Please finish creating your character.');
        return;
    }

    console.log(characterName, characterRace, characterClass, characterGender, characterAge, characterAppearance, characterAlignment, characterBackground, characterPersonality, characterTraits, characterFlaws, characterIdeals, characterBonds, characterBackstory, characterStrength, characterDexterity, characterConstitution, characterIntelligence, characterWisdom, characterCharisma, characterWeapon, characterSecondary, characterArmor, characterMoney);
    return;
});




//const characterRace = document.getElementById(raceSelect).value;
//console.log(characterRace);