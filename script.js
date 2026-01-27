function downloadPDF() {
    const element = document.getElementById('pdf-content');

    const opt = {
        margin: [10, 10, 10, 10], // mm (arriba, izq, abajo, der)
        filename: 'Hoja_de_vida_Steven_Alzate.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 3,
            useCORS: true,
            scrollY: 0
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        },
        pagebreak: {
            mode: ['css', 'legacy']
        }
    };

    html2pdf().set(opt).from(element).save();
}
