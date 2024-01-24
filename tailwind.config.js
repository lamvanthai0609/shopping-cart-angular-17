/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./src/**/*.{html,ts}'],

    theme: {
        extend: {
            colors: ({ colors }) => ({
                ...colors,
                primary: 'var(--primary-color)',
                secondary: 'var(--secondaryColor)',
                textColor: 'var(--textColor)',
                black: 'var(--black)',
                white: 'var(--white)',
                green: 'var(--green)',
                red: 'var(--red)',
                orange: 'var(--orange)',
                cyan: 'var(--cyan)',
                gray: 'var(--gray)',
                transparent: 'transparent',
                current: 'currentColor',
            }),
            backgroundColor: {
                'gradient-item':
                    'linear-gradient(rgba(255, 255, 255, 0.08), 118deg, var(--gradient-item-color-1) -47.79%, var(--gradient-item-color-2) 100%)',
                'test-bg':
                    'linear-gradient(118deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0.00) 100%)',
            },
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
        },
    },
    plugins: [
        plugin(
            function ({ matchUtilities, addUtilities, theme, variants }) {
                const values = theme('lineClamp');
                matchUtilities(
                    {
                        'line-clamp': value => ({
                            overflow: 'hidden',
                            display: '-webkit-box',
                            '-webkit-box-orient': 'vertical',
                            '-webkit-line-clamp': `${value}`,
                        }),
                    },
                    { values }
                );
                addUtilities(
                    [
                        {
                            '.line-clamp-none': {
                                '-webkit-line-clamp': 'unset',
                            },
                        },
                    ],
                    variants('lineClamp')
                );
            },
            {
                theme: {
                    lineClamp: {
                        1: '1',
                        2: '2',
                        3: '3',
                        4: '4',
                        5: '5',
                        6: '6',
                    },
                },
                variants: {
                    lineClamp: ['responsive'],
                },
            }
        ),
    ],
};
