import sanityClient from '@sanity/client'


export const client = sanityClient({
    projectId: 'b97zvev6',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:
        'skVrYoIyq12o7HMMAi4WN5OeruVXBracPwqdxiTeqOi476Rc2TdBEJy9PE8FGLN22jIh4H23UTIPIsG8G6rHt0vwFwHiPrk4laQn9LboOic0M7gxooNHsK1T1S5gp0U4qpAfd74EtE40S0RxF4eEDk6hlt3hkGoO8JxNvJC55tbriEGJ6ZYY',
    useCdn: false,
})
