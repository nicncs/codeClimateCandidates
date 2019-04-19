const screenSize = () => {
    let width = window.outerWidth
    if (width>=992) return 'lg'
    if (width>=768) return 'md'
    if (width>=576) return 'sm'
    if (width<576) return 'xs'
}

export { screenSize }