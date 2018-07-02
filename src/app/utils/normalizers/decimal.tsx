export const normalizeDecimal: any = ( value, previousValue ) => {
    if (!value) {
        return value;
    }
    const onlyNums: string = value.replace(/[^\d,]/g, '');
    return onlyNums;
};

export const normalizeDecimal_MaxLength: any = (maxLength) => (value, previousValue, allValues) => {
    const onlyNums: string = value.replace(/[^\d,]/g, '');
    if (!onlyNums) {
        return onlyNums;
    }
    if (onlyNums.length <= maxLength) {
        return onlyNums;
    } else {
        return previousValue;
    }
};
