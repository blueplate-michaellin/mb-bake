import Typography from 'typography'

const typography = new Typography ({
    basedFontSize: "16px",
    basedLineHeight: 1.666,
    headerFontFamily: ["Playfair Display", "serif"],
    bodyFontFamily: ["Raleway", "sans-serif"],
    googleFonts: [
        {
            name: 'Playfair Display',
            styles: [
                '400',
                '700',
                '900'
            ],
        },
        {
            name: 'Raleway',
            styles: [
                '400',
                '400',
                '700',
                '700',
            ]
        }
    ]
})

export default typography