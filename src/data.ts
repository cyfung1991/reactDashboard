export const menu = [
    {
        id: 1,
        title: "main",
        listItems: [
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "home.svg",
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg",
            },
        ]
    },
    {
        id: 2,
        title: "lists",
        listItems: [
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "user.svg",
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "product.svg",
            },
            {
                id: 3,
                title: "Orders",
                url: "/orders",
                icon: "order.svg",
            },
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icon: "post.svg",
            },
        ]
    },
    {
        id: 3,
        title: "general",
        listItems: [
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg",
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "note.svg",
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "form.svg",
            },
            {
                id: 4,
                title: "Canlendar",
                url: "/",
                icon: "canlendar.svg",
            },
        ]
    },
    {
        id: 4,
        title: "Maintenance",
        listItems: [
            {
                id: 1,
                title: "Settings",
                url: "/",
                icon: "setting.svg",
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "backup.svg",
            },
        ]
    },
    {
        id: 5,
        title: "analytics",
        listItems: [
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "chart.svg",
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "log.svg",
            },
        ]
    }
];

export const topDealUsers = [
    {
        id: 1,
        img: "https://robohash.org/Terry.png?set=set4",
        username: "atuny0",
        email: "atuny0@sohu.com",
        amount: "10.19",
    },
    {
        id: 2,
        img: "https://robohash.org/Sheldon.png?set=set4",
        username: "atuny1",
        email: "atuny1@sohu.com",
        amount: "11.98",
    },
    {
        id: 3,
        img: "https://robohash.org/Terrill.png?set=set4",
        username: "atuny2",
        email: "atuny2@sohu.com",
        amount: "100.09",
    },
    {
        id: 4,
        img: "https://robohash.org/Miles.png?set=set4",
        username: "atuny3",
        email: "atuny3@sohu.com",
        amount: "10000.11",
    },
    {
        id: 5,
        img: "https://robohash.org/Mavis.png?set=set4",
        username: "atuny4",
        email: "atuny4@sohu.com",
        amount: "90.2",
    },
    {
        id: 6,
        img: "https://robohash.org/Alison.png?set=set4",
        username: "atuny5",
        email: "atuny5@sohu.com",
        amount: "90.2",
    },
    {
        id: 7,
        img: "https://robohash.org/Oleta.png?set=set4",
        username: "atuny6",
        email: "atuny6@sohu.com",
        amount: "90.2",
    },
    {
        id: 8,
        img: "https://robohash.org/Ewell.png?set=set4",
        username: "atuny7",
        email: "atuny7@sohu.com",
        amount: "90.2",
    },
    {
        id: 9,
        img: "https://robohash.org/Demetrius.png?set=set4",
        username: "atuny8",
        email: "atuny8@sohu.com",
        amount: "90.2",
    },
];

export const chartBoxUser = {
    color: "#8884d8",
    icon: "userIcon.svg",
    title: "Total Users",
    number: "11.223",
    dataKey: "users",
    percentage: 46,
    chartData: [
        { name: "Sun", users: 1},
        { name: "Mon", users: 2},
        { name: "Tue", users: 5},
        { name: "Wed", users: 10},
        { name: "Thu", users: 7},
        { name: "Fri", users: 1},
        { name: "Sat", users: 3},
    ]
}

export const chartBoxProduct = {
    color: "gold",
    icon: "conversionIcon.svg",
    title: "Total Product",
    number: "2.6",
    dataKey: "product",
    percentage: -12,
    chartData: [
        { name: "Sun", product: 300},
        { name: "Mon", product: 400},
        { name: "Tue", product: 500},
        { name: "Wed", product: 100},
        { name: "Thu", product: 900},
        { name: "Fri", product: 200},
        { name: "Sat", product: 400},
    ]
}

export const chartBoxRevenue = {
    color: "teal",
    icon: "revenueIcon.svg",
    title: "Total Revenue",
    number: "$32.223",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
        { name: "Sun", revenue: 300},
        { name: "Mon", revenue: 400},
        { name: "Tue", revenue: 500},
        { name: "Wed", revenue: 100},
        { name: "Thu", revenue: 900},
        { name: "Fri", revenue: 200},
        { name: "Sat", revenue: 400},
    ]
}

export const chartBoxConversion = {
    color: "gold",
    icon: "conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: -12,
    chartData: [
        { name: "Sun", ratio: 300},
        { name: "Mon", ratio: 400},
        { name: "Tue", ratio: 500},
        { name: "Wed", ratio: 100},
        { name: "Thu", ratio: 900},
        { name: "Fri", ratio: 200},
        { name: "Sat", ratio: 400},
    ]
}

export const barChartBoxVisit = {
    color: "#FF8042",
    title: "Total Visit",
    dataKey: "visit",
    chartData: [
        { name: "Sun", visit: 3},
        { name: "Mon", visit: 4},
        { name: "Tue", visit: 5},
        { name: "Wed", visit: 1},
        { name: "Thu", visit: 9},
        { name: "Fri", visit: 2},
        { name: "Sat", visit: 4},
    ]
}

export const barChartBoxRevenue = {
    color: "#8884d8",
    title: "Profit earn",
    dataKey: "revenue",
    chartData: [
        { name: "Sun", revenue: 3},
        { name: "Mon", revenue: 4},
        { name: "Tue", revenue: 5},
        { name: "Wed", revenue: 1},
        { name: "Thu", revenue: 9},
        { name: "Fri", revenue: 2},
        { name: "Sat", revenue: 4},
    ]
}

export const pieChartData = {
    title: "Lead By Source",
    dataKey: "value",
    chartData: [
        {name: "Mobile", value: 300, color: "#0088FE"},
        {name: "Desktop", value: 500, color: "#00C49F"},
        {name: "Laptop", value: 400, color: "#FFBB28"},
        {name: "Tablet", value: 200, color: "#FF8042"},    
    ]
}

export const bigChartData = {
    title: "Revenue Analytics",
    dataKey: "name",
    chartSetting: {
        books: "#8884d8",
        clothes: "#82ca9d",
        electronic: "#ffc658",
    },
    chartData: [
        {
            name: 'Sun',
            books: 4000,
            clothes: 2400,
            electronic: 2400,
          },
          {
            name: 'Mon',
            books: 3000,
            clothes: 1398,
            electronic: 2210,
          },
          {
            name: 'Tue',
            books: 2000,
            clothes: 9800,
            electronic: 2290,
          },
          {
            name: 'Wed',
            books: 2780,
            clothes: 3908,
            electronic: 2000,
          },
          {
            name: 'Thu',
            books: 1890,
            clothes: 4800,
            electronic: 2181,
          },
          {
            name: 'Fri',
            books: 2390,
            clothes: 3800,
            electronic: 2500,
          },
          {
            name: 'Sat',
            books: 3490,
            clothes: 4300,
            electronic: 2100,
          },
    ]
}