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
                url: "/",
                icon: "order.svg",
            },
            {
                id: 4,
                title: "Posts",
                url: "/",
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

export const userRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, status: false },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, status: true },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export const singleUser = {
    id: 1,
    title: "John Doe",
    img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    info: {
      username: "Johndoe99",
      fullname: "John Doe",
      email: "johndoe@gmail.com",
      phone: "123 456 789",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "John Doe added 3 items into their wishlist",
        time: "1 week ago",
      },
      {
        text: "John Doe purchased Sony Bravia KD-32w800",
        time: "2 weeks ago",
      },
      {
        text: "John Doe reviewed a product",
        time: "1 month ago",
      },
      {
        text: "John Doe added 1 items into their wishlist",
        time: "1 month ago",
      },
      {
        text: "John Doe reviewed a product",
        time: "2 months ago",
      },
    ],
  };

  export const products = [
    {
      id: 1,
      img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
      title: "Playstation 5 Digital Edition",
      color: "white",
      producer: "Sony",
      price: "$250.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 2,
      img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
      title: "Dell Laptop KR211822",
      color: "black",
      producer: "Dell",
      price: "$499.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 3,
      img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
      title: "Samsung TV 4K SmartTV",
      color: "gray",
      producer: "Samsung",
      price: "$999.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 4,
      img: "https://raylo.imgix.net/iphone-14-blue.png",
      title: "Apple Iphone 14 Pro Max",
      color: "white",
      producer: "Apple",
      price: "$799.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 5,
      img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
      title: "Philips Hue Play Gradient",
      color: "rainbow",
      producer: "Philips",
      price: "$39.99",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
      title: "Logitech MX Master 3",
      color: "black",
      producer: "Logitech",
      price: "$59.49",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 7,
      img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
      title: "Rode Podcast Microphone",
      color: "gray",
      producer: "Rode",
      price: "$119.49",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
      title: "Toshiba Split AC 2",
      color: "white",
      producer: "Toshiba",
      price: "$899.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
    {
      id: 9,
      img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
      title: "Sony Bravia KDL-47W805A",
      color: "black",
      producer: "Sony",
      price: "$970.49",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
      title: "Acer Laptop 16 KL-4804",
      color: "black",
      producer: "Acer",
      price: "$599.99",
      createdAt: "01.02.2023",
      inStock: true,
    },
  ];

  
  export const singleProduct = {
    id: 1,
    title: "Playstation 5 Digital Edition",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    info: {
      productId: "Ps5SDF1156d",
      color: "white",
      price: "$250.99",
      producer: "Sony",
      export: "Japan",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          orders: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          orders: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 4300,
        },
      ],
    },
    activities: [
      {
        text: "John Doe purchased Playstation 5 Digital Edition",
        time: "3 day ago",
      },
      {
        text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
        time: "1 week ago",
      },
      {
        text: "Mike Doe purchased Playstation 5 Digital Edition",
        time: "2 weeks ago",
      },
      {
        text: "Anna Doe reviewed the product",
        time: "1 month ago",
      },
      {
        text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
        time: "1 month ago",
      },
      {
        text: "Helen Doe reviewed the product",
        time: "2 months ago",
      },
    ],
  };