export const normalizeNumbers: any = ( value, previousValue ) => {
    if (!value) {
        return value;
    }
    const onlyNums: string = value.replace(/[^\d]/g, '');
    return onlyNums;
};


export const normalizeNumbers_MaxLength: any = (maxLength) => (value, previousValue, allValues) => {
    if (typeof value !== 'number' && String(value).length <= maxLength) {
        return previousValue;
    }

    if (String(value).length <= maxLength) {
        return value;
    }
    return previousValue;
};

export const normalizeNumbers_MaxLength_NoZeros: any = (maxLength) => (value, previousValue, allValues) => {
    if (typeof value !== 'number' && String(value).length <= maxLength || value === 0) {
        if (value === 'undefined') {
            return null;
        }
        return previousValue;
    }

    if (String(value).length <= maxLength) {
        return value;
    }
    return previousValue;
};
