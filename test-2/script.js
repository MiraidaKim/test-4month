// ---------- 1) Извлечение чисел ----------
function extractNumbers(str) {
    return str
        .split("")
        .filter(char => !isNaN(char) && char !== " ")
        .map(Number);
}

console.log("Задание 1:", extractNumbers("a1fg5hj6"));


// ---------- 2) Фибоначчи (рекурсия + 1 сек) ----------
function fibonacci(a = 0, b = 1) {
    if (a > 144) return;

    console.log("Fib:", a);

    setTimeout(() => {
        fibonacci(b, a + b);
    }, 1000);
}
fibonacci();


// ---------- 3) API FakeStore ----------
async function getProductTitles() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        data.forEach(item => console.log(item.title));
    } catch (error) {
        console.error("API error:", error);
    }
}

document.getElementById("apiBtn").addEventListener("click", getProductTitles);


// ---------- 4) Делегирование событий ----------
document.getElementById("colors").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        document.body.style.backgroundColor = e.target.textContent;
    }
});


// ---------- 5) Toggle блока ----------
const box = document.getElementById("box");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {
    box.style.display = box.style.display === "none" ? "block" : "none";
});


// ---------- 6) Счётчик ----------
let count = 0;
const counter = document.getElementById("counter");

const interval = setInterval(() => {
    counter.textContent = count;
    count++;

    if (count > 100) {
        clearInterval(interval);
    }
}, 1);


// ---------- 7) GET запрос на JSON ----------
async function fetchJson() {
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        console.log("JSON:", data);
    } catch (error) {
        console.error("JSON error:", error);
    }
}

document.getElementById("jsonBtn").addEventListener("click", fetchJson);
