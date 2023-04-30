import app from "./src/app.js";

const PORTA = process.env.PORTA || 8000

app.listen(PORTA, () => {
    console.log(`Escutando na porta http://localhost:${PORTA}`)
})