export const normalizeMaxLength: any = (maxLength) => (value, previousValue, allValues) => {
    if (!value) {
        return value;
    }
    if (value.length <= maxLength) {
        return value;
    } else {
        return previousValue;
    }
};
