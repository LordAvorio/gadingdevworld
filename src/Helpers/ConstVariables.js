export const DataNavMenu = [
    {
        number: '01. ',
        description: 'About Me',
        refercode: 'about-me'
    },
    {
        number: '02. ',
        description: 'Experience',
        refercode: 'experience'
    },
    {
        number: '03. ',
        description: 'Projects',
        refercode: 'project'
    },
    {
        number: '04. ',
        description: 'Contact',
        refercode: 'contact'
    }
]

export const DataRefferalLink = {
    linkedin: 'http://bitly.ws/EcUC',
    github: 'https://github.com/LordAvorio',
    email: 'mailto:gadingcprakoso@gmail.com'
}

export const DataRecentlyTech = {
    frontend: ['Javascript (ES6+)','React','JQuery'],
    backend: ['C#','Java','PHP','Laravel'],
    utility: ['MYSQL','PostgreSQL','Git','Jenkins']
}

export const DataJobExperiences = [
    {
        titlejob : 'Software Engineer',
        locationfull : 'PT. Sumber Alfaria Trijaya Tbk',
        locationshort : 'Alfamart',
        timeperiod : 'August 2021 - March 2022',
        jobdesc : [
            'Developing new features and maintaining Alfapop applications (KIOSK and SOFIA) including frontend and backend.',
            'Working with users to making business requirements for application development purpose.',
            'Working with IT Supports to supporting Alfapop E-Commerce campaigns.',
            'Working with Infrastructure team for application deploying purpose'
        ],
        active : true
    },
    {
        titlejob : 'Fullstack Developer',
        locationfull : 'PT. Asuransi Astra Buana (Vendor)',
        locationshort : 'AAB',
        timeperiod : 'March 2022 - March 2023',
        jobdesc : [
            'Developing new features and maintaining Gardaoto.com website including backend and frontend.',
            'Developing and maintaining B2B applications that interact with business partners.',
            'Preparing Jenkins Pipeline for applications deploying process.',
            'Creating technical documentation and user guide for the applications that already built.'
        ],
        active : false
    },
]

export const DataMainProjects = [
    {
        title : 'Perbakin Jawa Tengah Admin App',
        description : 'A web application for handling data management in Perbakin based on central java region. Perbakin is official comittee for gun shooting community in Indonesia. This website  have functionality to helping admin managing their data including information members and weapons.',
        technology : ['PHP','JQuery','Bootstrap','MySQL'],
        image : 'url(src/Assets/Images/perbakin-01.png)',
        linkreferral : [
            {
                platform : 'misc',
                link : ''
            }
        ]
    }
]

export const DataSecondaryProjects = [
    {
        title : 'Telecin',
        description : 'A web application for showing the information list of movie and tv series based on TMDB API.',
        technology : ['React','Material UI','Redux'],
        linkreferral : [
            {
                platform: 'github',
                link: 'https://github.com/LordAvorio/telecin'
            },
            {
                platform: 'site',
                link: 'https://telecin-io.netlify.app'
            }
        ]
    },
    {
        title : 'PaynKiller',
        description : 'An ecommerce website for selling medicine and drugs. This project was my final project when i joining bootcamp.',
        technology : ['React','Express','Redux','MySQL'],
        linkreferral : [
            {
                platform: 'github',
                link: 'https://github.com/LordAvorio/paynkiller_gading'
            },
        ]
    },
    {
        title : 'Pokedex',
        description : 'A web application for showing the information list of pokemon based on Pokedex API.',
        technology : ['React','Redux','SCSS'],
        linkreferral : [
            {
                platform: 'github',
                link: 'https://github.com/LordAvorio/pokedex-gading'
            },
            {
                platform: 'site',
                link: 'https://gading-pokedex.netlify.app'
            }
        ]
    }
]