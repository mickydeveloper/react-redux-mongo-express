export function formMapper(formData: any): FormData {
    let form: FormData = new FormData();
    if (formData.image) {
        form.append("image", formData.image);
        delete formData.imageId;
        delete formData.imageUrl;
        delete formData.image;
    }
    form.append('utilityModel', JSON.stringify(formData));
    return form;
}
