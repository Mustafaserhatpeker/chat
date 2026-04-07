export function useGreeting() {
    const hour = new Date().getHours()
    if (hour < 12) return "Günaydın! ☀️"
    if (hour < 18) return "İyi günler! 👋"
    return "İyi akşamlar! 🌙"
}