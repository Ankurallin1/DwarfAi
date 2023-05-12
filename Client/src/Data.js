export const links=[
    {
        name:"Home",
        path:'/'
    },
    {
        name:"About",
        path:'/about'
    },
    
    
    {
        name:"Pricing",
        path:'/'
    },
    {
        name:"GymGenie MealPlan",
        path:'/'
    },
    {
        name:"MacroTraker",
        path:'/'
    },
    {
        name:"Sign in",
        path:'/login'
    },
    {
        name:"Sign up",
        path:'/signup'
    },
];

export const plans=[
    {
        id:1,
        name:'STANDARD',
        desc:"Free user plan",
        price:0,
        features:[
            {feature:'1 Free Workout Routine Generated a Month',available:true},
            {feature:'Get A New Workout Routine In Seconds',available:true},
           
        ]
    },
    {
        id:2,
        name:'PREMIUM',
        desc:"Access to upcoming new features 👀",
        price:2.99,
        features:[
            {feature:'No Limit on Workout Routines Generated',available:true},
            {feature:'Access to GymGenie Meal Plan',available:true},
            {feature:'Access to MacroTracker',available:true},
           
        ]
    },
    
]