const skinsDrop = [
    { id: 1, title: "AK-47 | Vulcan", rarity: "Ancient", price: 500 },
    { id: 2, title: "USP-S | Overgrowth", rarity: "Mythical", price: 70 },
    { id: 3, title: "AK-47 | Case Hardened", rarity: "Ancient", price: 2000 },
    { id: 4, title: "AWP | BOOM", rarity: "Legendary", price: 600 },
    { id: 5, title: "AK-47 | Vulcan", rarity: "Ancient", price: 500 },
    { id: 6, title: "M4A1-S | Golden Coil", rarity: "Ancient", price: 400 },
    { id: 7, title: "AK-47 | Redline", rarity: "Legendary", price: 350 },
    {
        id: 8,
        title: "★ Butterfly Knife | Freehand",
        rarity: "Gold",
        price: 1200,
    },
    { id: 9, title: "AK-47 | Blue Laminate", rarity: "Mythical", price: 50 },
    {
        id: 10,
        title: "M4A4 | Radiation Hazard",
        rarity: "Industrial",
        price: 100,
    },
    {
        id: 11,
        title: "★ Stiletto Knife | Slaughter",
        rarity: "Gold",
        price: 700,
    },
    { id: 12, title: "★ Flip Knife | Marble Fade", rarity: "Gold", price: 600 },
    {
        id: 13,
        title: "★ Ursus Knife | Marble Fade",
        rarity: "Gold",
        price: 550,
    },
    {
        id: 14,
        title: "★ Falchion Knife | Marble Fade",
        rarity: "Gold",
        price: 300,
    },
    {
        id: 15,
        title: "★ Talon Knife | Marble Fade",
        rarity: "Gold",
        price: 1100,
    },
    {
        id: 16,
        title: "Desert Eagle | Printstream",
        rarity: "Ancient",
        price: 200,
    },
]

const generateNickname = () => {
    const names = [
        "Player1",
        "ProGamer",
        "CoolKid",
        "Xx_Sniper_xX",
        "MasterChief",
        "NoobSlayer",
        "AceGamer",
        "ShadowHunter",
        "KingOfGames",
        "MightyWarrior",
        "SniperKing",
        "NinjaMaster",
        "SpeedyGonzalez",
        "SilentKiller",
        "DarkKnight",
        "GamerX",
        "DragonSlayer",
        "EpicWarrior",
        "FutureChampion",
        "LordOfTheGame",
        "CyberNinja",
        "SwiftFoot",
        "TheRealGamer",
        "BattleLord",
        "PhantomStrike",
        "UltimatePlayer",
        "WarriorQueen",
        "MysticMage",
        "StealthMaster",
        "VikingWarrior",
        "IceTitan",
        "ThunderBolt",
        "StormChaser",
        "LoneWolf",
        "EliteSniper",
        "FastFury",
        "FireDragon",
        "SkyWalker",
        "GhostRider",
        "TitanSlayer",
        "RedPhoenix",
        "ShadowReaper",
        "IronFist",
        "TrueHero",
        "PowerStrike",
        "ShadowWolf",
        "BlazeKnight",
        "SilentPhoenix",
        "StealthNinja",
        "QuantumWarrior",
        "FuryKing",
        "SwiftArrow",
        "DarkPhantom",
        "IceStorm",
        "SpeedFury",
        "WarriorX",
        "BloodKnight",
        "StormLord",
    ]
    return names[Math.floor(Math.random() * names.length)]
}

const rarityDropColor = {
    Industrial: "linear-gradient(90deg, #67A4FF 0%, #648DC9 100%)",
    Mythical: "linear-gradient(90deg, #753FFF 0%, #5032CB 100%)",
    Legendary: "linear-gradient(90deg, #FF67FF 0%, #BA64C9 100%)",
    Ancient: "linear-gradient(90deg, #FF6767 0%, #C96464 100%)",
    Gold: "linear-gradient(90deg, #FFE367 0%, #C9A664 100%)",
}

const generateDropBlock = (skin) => {
    const randomNickname = generateNickname()

    const dropBlock = document.createElement("div")
    dropBlock.classList.add("drop__block")

    dropBlock.innerHTML = `
        <div class="drop__bg-block">
            <div class="drop__hr" style="background: ${
                rarityDropColor[skin.rarity]
            };"></div>
            <img src="./index_files/team-spirit-bg.png" alt="" class="drop__bg" />
            <img src="./index_files/${skin.id}.png" alt="${
        skin.title
    }" class="drop__image" />
            <div class="drop__text-block">
                <p class="drop__nickname">${randomNickname}</p>
                <div class="drop__skin-block">
                    <p class="drop__price">$ ${skin.price.toLocaleString(
                        "en-US"
                    )}</p>
                    <p class="drop__title">${skin.title}</p>
                </div>
            </div>
        </div>
    `

    return dropBlock
}

const addInitialSkins = () => {
    const container = document.querySelector(".drop")
    for (let i = 0; i < 10; i++) {
        container?.appendChild(generateDropBlock(skinsDrop[i]))
    }
}

const addRandomSkin = () => {
    const container = document.querySelector(".drop")
    const randomSkin = skinsDrop[Math.floor(Math.random() * skinsDrop.length)]
    const dropBlock = generateDropBlock(randomSkin)
    container.appendChild(dropBlock)
}

addInitialSkins()

setInterval(
    addRandomSkin,
    Math.floor(Math.random() * (120000 - 40000 + 1)) + 40000
)
