
export default function errorVisible(setIsObjectVisible) {
    setIsObjectVisible(true);
    setTimeout(() => {
        setIsObjectVisible(false);
    }, 3000);
}