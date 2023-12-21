export function loadScript(path) {
    return new Promise((resolve, reject) => {
        let scriptElement = document.createElement('script');
        scriptElement.setAttribute('src', path)
        document.head.appendChild(scriptElement)

        scriptElement.addEventListener('load', () => resolve())
        scriptElement.addEventListener('error', () => reject())
        scriptElement.addEventListener('abort', () => reject())
    })
}