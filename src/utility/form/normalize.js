export const normalizeUpper = value =>
    value && value.toUpperCase()

export const normalizePhoneNumber = value => {
    const onlyNums = value.replace(/[^\d]/g, '')

    return !value ? value :
            onlyNums.length <= 3 ? `${onlyNums}` :
            onlyNums.length <= 7 ? `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}` :
            `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6, 10)}`
}

export const phoneParser = (number) => number ? number.replace(/-/g, '') : '';
