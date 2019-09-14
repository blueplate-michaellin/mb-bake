import Typography from 'typography'

const typography = new Typography ({
    basedFontSize: "16px",
    basedLineHeight: 1.666,
    headerFontFamily: ["Nunito", "sans-serif"],
    bodyFontFamily: ["Nunito", "sans-serif"],
    googleFonts: [
        {
            name: 'Nunito',
            styles: [
                '700',
            ],
        },
        {
            name: 'Nunito',
            styles: [
                '400',
                '400i',
                '700',
                '700i',
            ]
        }
    ]
})

export default typography