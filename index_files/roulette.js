const skins = [
    {
        id: 1,
        title: "AK-47 | Vulcan",
        rarity: "Ancient",
        price: 500,
    },
    {
        id: 2,
        title: "USP-S | Overgrowth",
        rarity: "Mythical",
        price: 70,
    },
    {
        id: 3,
        title: "AK-47 | Case Hardened",
        rarity: "Ancient",
        price: 2000,
    },
    {
        id: 4,
        title: "AWP | BOOM",
        rarity: "Legendary",
        price: 600,
    },
    {
        id: 5,
        title: "AK-47 | Vulcan",
        rarity: "Ancient",
        price: 500,
    },
    {
        id: 6,
        title: "M4A1-S | Golden Coil",
        rarity: "Ancient",
        price: 400,
    },
    {
        id: 7,
        title: "AK-47 | Redline",
        rarity: "Legendary",
        price: 350,
    },
    {
        id: 8,
        title: "★ Butterfly Knife | Freehand",
        rarity: "Gold",
        price: 1200,
    },
    {
        id: 9,
        title: "AK-47 | Blue Laminate",
        rarity: "Mythical",
        price: 50,
    },
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
    {
        id: 12,
        title: "★ Flip Knife | Marble Fade",
        rarity: "Gold",
        price: 600,
    },
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

const rarityColor = {
    Industrial: "linear-gradient(90deg, #67A4FF 0%, #648DC9 100%)",
    Mythical: "linear-gradient(90deg, #753FFF 0%, #5032CB 100%)",
    Legendary: "linear-gradient(90deg, #FF67FF 0%, #BA64C9 100%)",
    Ancient: "linear-gradient(90deg, #FF6767 0%, #C96464 100%)",
    Gold: "linear-gradient(90deg, #FFE367 0%, #C9A664 100%)",
}

const skinsContent = document.querySelector(".roulette__items")
const spinButton = document.querySelector(".roulette__button")
const spinContainer = document.querySelector(".roulette-container-bg")
let marginLeft = 0

window.onload = function () {
    const savedSkin = JSON.parse(localStorage.getItem("lastSkin"))
    const openModalFlag = localStorage.getItem("openModal") === "true"

    const containerWidth = spinContainer?.offsetWidth
    const itemWidth = 209
    const itemWidthWithGap = itemWidth + 16

    const visibleCount = Math.floor(containerWidth / itemWidthWithGap)

    let centerIndex = Math.floor(visibleCount / 2)

    let offsetToCenter = containerWidth / 2 - itemWidth / 2
    let translateX = -(centerIndex * itemWidthWithGap) + offsetToCenter

    if (translateX > 0) {
        centerIndex += 1
        translateX = -(centerIndex * itemWidthWithGap) + offsetToCenter
    }
    marginLeft = translateX - (window.innerWidth <= 960 ? 36 : 82)
    if (skinsContent && skinsContent.style && skinsContent.style.marginLeft) {
        skinsContent.style.marginLeft = `${
            translateX - (window.innerWidth <= 960 ? 36 : 82)
        }px`
    }

    if (savedSkin && openModalFlag) {
        openModal(savedSkin)
    }
}

function createSkinItems() {
    const allSkins = [...skins, ...skins, ...skins, ...skins]
    allSkins.forEach((skin) => {
        const skinElement = document.createElement("div")
        skinElement.classList.add("roulette__block")
        skinElement.innerHTML = `
      <div class="roulette-bg">
        <div class="skins__rarity" style="background: ${
            rarityColor[skin.rarity]
        };"></div>
        <img src="./index_files/${skin.id}.png" alt="${
            skin.title
        }" class="skins__image" />
        <div class="skins__amount">$ ${skin.price.toLocaleString("ru-RU")}</div>
        <p class="skins__title">${skin.title}</p>
      </div>`
        skinsContent?.appendChild(skinElement)
    })
}

function spinRoulette() {
    const randomIndex = Math.floor(Math.random() * skins.length)
    const totalSkins = skins.length

    const stepsToScroll = randomIndex + totalSkins * 2
    skinsContent.style.transition = "transform 5s ease-out"
    skinsContent.style.transform = `translateX(-${
        stepsToScroll * 233 - 526 + marginLeft
    }px)`

    spinButton.disabled = true

    setTimeout(() => {
        const index =
            randomIndex +
                (window.innerWidth <= 1200
                    ? window.innerWidth <= 700
                        ? -2
                        : -1
                    : 0) >
            15
                ? 15
                : randomIndex +
                      (window.innerWidth <= 1200
                          ? window.innerWidth <= 700
                              ? -2
                              : -1
                          : 0) <
                  0
                ? 0
                : randomIndex +
                  (window.innerWidth <= 1200
                      ? window.innerWidth <= 700
                          ? -2
                          : -1
                      : 0)

        const selectedSkin = skins[index]
        openModal(selectedSkin)

        skinsContent.style.transition = "none"
        skinsContent.style.transform = "translateX(0)"
        setTimeout(() => {
            skinsContent.style.transition = "transform 5s ease-out"
        }, 50)

        spinButton.disabled = false
    }, 5000)
}

function openModal(skin) {
    document.getElementById("modal").style.display = "flex"

    localStorage.setItem("lastSkin", JSON.stringify(skin))
    localStorage.setItem("openModal", "true")

    const skinElement = document.createElement("div")
    skinElement.classList.add("roulette__block")
    skinElement.classList.add("roulette__block-skin")
    skinElement.innerHTML = `
      <div class="roulette-bg">
        <div class="skins__rarity" style="background: ${
            rarityColor[skin.rarity]
        };"></div>
        <img src="./index_files/${skin.id}.png" alt="${
        skin.title
    }" class="skins__image" style="width: 152px; height: 107px;" />
        <div class="skins__amount">$ ${skin.price.toLocaleString("ru-RU")}</div>
        <p class="skins__title">${skin.title}</p>
      </div>`
    document.getElementById("skin").innerHTML = ""
    document.getElementById("skin").appendChild(skinElement)
}

function closeModal() {
    document.getElementById("modal").style.display = "none"
    localStorage.setItem("openModal", "false")
}

createSkinItems()

spinButton?.addEventListener("click", spinRoulette)
