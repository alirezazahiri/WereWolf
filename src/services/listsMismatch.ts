const listsMissmatch = (a: string[], b: string[]): boolean => {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return true
        }
    }
    return false
}

export default listsMissmatch