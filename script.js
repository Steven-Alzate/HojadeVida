function downloadPDF() {
    const element = document.getElementById('pdf-content');

    const opt = {
        margin: [5, 5, 5, 5], // mm (arriba, izq, abajo, der) - reducido para más espacio
        filename: 'Hoja_de_vida_Steven_Alzate.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0,
            windowHeight: document.body.scrollHeight,
            allowTaint: true
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait',
            compress: true
        },
        pagebreak: {
            mode: ['avoid-all', 'css', 'legacy']
        }
    };

    html2pdf().set(opt).from(element).save();
}
