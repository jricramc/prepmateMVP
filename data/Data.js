const firstBannerData = [
    {
        id:0,
        title:"The Perfect Meal Plan from your favorite Restaurants",
        imgSrc:"images/mealprepp.jpeg",
    },
    // {
    //     id:1,
    //     title:"Make your kitchen a thing of the past",
    //     imgSrc:"images/fz-3-banner-img-2.jpg",
    // },
    // {
    //     id:2,
    //     title:"The Secret Key to a Healthy and Balanced Diet",
    //     imgSrc:"images/fz-3-banner-img.png",
    // },
]

const brandList = [
    {
        id:0,
        imgSrc:"images/fz-3-brand-1.png",
    },
    {
        id:1,
        imgSrc:"images/fz-3-brand-2.png",
    }, {
        id:2,
        imgSrc:"images/fz-3-brand-3.png",
    }, {
        id:3,
        imgSrc:"images/fz-3-brand-4.png",
    }, {
        id:4,
        imgSrc:"images/fz-3-brand-5.png",
    }, {
        id:5,
        imgSrc:"images/fz-3-brand-1.png",
    }, {
        id:6,
        imgSrc:"images/fz-3-brand-2.png",
    }, {
        id:7,
        imgSrc:"images/fz-3-brand-3.png",
    }
]

const thirdBannerData = [
    {
        id:0,
        title:"A Symphony of Flavors in Every Bite.",
        desc:"Establishments producing and selling flour-based food like cakes cookies, and pastries are what bakeries are all about Several the bakeries offer services for festivities.",
        firstImgSrc:"images/card-img-1.png",
        firstPrice: 149.00,
        secondImgSrc:"images/card-img-2.jpg",
        secondPrice: 129.00,
    },
    {
        id:1,
        title:"Elevate Your Cake Cravings.",
        desc:"Establishments producing and selling flour-based food like cakes cookies, and pastries are what bakeries are all about Several the bakeries offer services for festivities.",
        firstImgSrc:"images/card-img-3.jpg",
        firstPrice: 149.00,
        secondImgSrc:"images/card-img-4.jpg",
        secondPrice: 129.00,
    },
    {
        id:2,
        title:"Cakes to Delight, Moments to Treasure",
        desc:"Establishments producing and selling flour-based food like cakes cookies, and pastries are what bakeries are all about Several the bakeries offer services for festivities.",
        firstImgSrc:"images/card-img-5.jpg",
        firstPrice: 149.00,
        secondImgSrc:"images/card-img-6.jpg",
        secondPrice: 129.00,
    },
]

const accordionList = [
    {
        id:0,
        title:"How To Make Website Easy Edit?",
    },
    {
        id:1,
        title:"In How Many Month you Update the website?",
    },
    {
        id:2,
        title:"How To Check your Shopping Cart?",
    },
    {
        id:3,
        title:"Where To Get Your Contact Support?",
    },
    {
        id:4,
        title:"Can I Make A Direct Call For Support?",
    },
    {
        id:5,
        title:"How To Make Website Easy Edit?",
    },
    {
        id:6,
        title:"Where Is Your Location?",
    },
    {
        id:7,
        title:"When Will I Receive My Order?",
    },
    {
        id:8,
        title:"What Are The Shipping Options?",
    },
]

const allProductList= [
    {
        id:0,
        imgSrc:"images/steak_rice.jpeg",
        name:"Steak Garlic Rice",
        category:"Solid Color Door",
        price: 10.40,
        isInWishlist:false,
        link: "/shop"
    },{
        id:1,
        imgSrc:"images/chick_alfr.jpeg",
        name:"Chicken Alfredo",
        category:"Double Layer Door",
        price: 11.50,
        isInWishlist:false,
    },{
        id:2,
        imgSrc:"images/grill_shrimp.png",
        name:"Grilled Shrimp",
        category:"Chinese Door",
        price: 11.00,
        isInWishlist:false,
    },{
        id:3,
        imgSrc:"images/grilled_chick.jpeg",
        name:"Grilled Chicken",
        category:"Plastic Door",
        price: 9.40,
        isInWishlist:false,
    },
    {
        id:4,
        imgSrc:"images/medi_rice.jpeg",
        name:"Mediterranean Rice Bowl",
        category:"Plastic Door",
        price: 11.40,
        isInWishlist:false,
    },
    {
        id:5,
        imgSrc:"images/korean_chick.jpeg",
        name:"Korean Chicken Bowl",
        category:"Plastic Door",
        price: 10.20,
        isInWishlist:false,
    }

]

const allProductListMil = [
    {
        id:0,
        imgSrc:"images/mill.jpeg",
        name:"test1",
        category:"Solid Color Door",
        price:740.00,
        isInWishlist:false,
        link: "/shop"
    },{
        id:1,
        imgSrc:"images/hongkong.jpeg",
        name:"test2",
        category:"Double Layer Door",
        price:550.00,
        isInWishlist:false,
    },{
        id:2,
        imgSrc:"images/five.png",
        name:"test3",
        category:"Chinese Door",
        price:850.00,
        isInWishlist:false,
    },{
        id:3,
        imgSrc:"images/dosa.jpeg",
        name:"test4",
        category:"Plastic Door",
        price:440.00,
        isInWishlist:false,
    }
]

const allProductListMill = [
    {
        id: 0,
        name: "Tuna Sandwich",
 
        description: "A classic delight",
        price: 4.49, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 1,
        name: "Ham & Cheese Sandwich",
        description: "Sliced Ham Sandwich on White Bread",
        price: 4.49, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 2,
        name: "Turkey & Cheese Sandwich",
        description: "Sliced Turkey Sandwich on White Bread",
        price: 4.49, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 3,
        name: "Steak & Rice",
        description: "Steak paired with rice and accompanied by fresh greens",
        price: 10.79, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 4,
        name: "Chicken & Rice",
        description: "Grilled Chicken paired with rice and accompanied by fresh greens",
        price: 8.09, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 5,
        name: "Shrimp & Rice",
        description: "Garlic Shrimp paired with rice and garnished with fresh parsley",
        price: 8.99, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 6,
        name: "Steak Broccoli Alfredo",
        description: "Tender steak slices with fresh broccoli served over penne with creamy Alfredo",
        price: 10.79, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 7,
        name: "Chicken Broccoli Alfredo",
        description: "Tender grilled chicken with fresh broccoli served over penne with creamy Alfredo",
        price: 8.09, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 8,
        name: "Shrimp Broccoli Alfredo",
        description: "Juicy Shrimp with fresh broccoli served over penne with creamy Alfredo",
        price: 8.99, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 9,
        name: "Mac N Cheese",
        description: "Bowl of Homemade Mac N Cheese",
        price: 5.39, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 10,
        name: "Steak Burrito Bowl",
        description: "A flavorful bowl featuring steak, rice, beans, and veggies with a side of salsa, sour cream, and guac",
        price: 12.59, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 11,
        name: "Chicken Burrito Bowl",
        description: "A flavorful bowl featuring chicken, rice, beans, and veggies with a side of salsa, sour cream, and guac",
        price: 8.99, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 12,
        name: "Shrimp Burrito Bowl",
        description: "A delightful bowl featuring shrimp, rice, beans, and veggies with a side of salsa, sour cream, and guac",
        price: 8.99, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 13,
        name: "Steak Grain Bowl",
        description: "A hearty bowl of steak, quinoa, chickpeas, and a mix of vegetables, all brought together with a tangy vinaigrette.",
        price: 11.69, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 14,
        name: "Chicken Grain Bowl",
        description: "A hearty bowl of chicken, quinoa, chickpeas, and a mix of vegetables, all brought together with a tangy vinaigrette.",
        price: 8.99, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 15,
        name: "Sirloin Steak Dinner",
        description: "Steak accompanied by fresh green beans and mashed potatoes",
        price: 11.69, // Updated price with 10% off
        isInWishlist: false,
        category: []
    },
    {
        id: 16,
        name: "Grilled Chicken Dinner",
        description: "Chicken accompanied by fresh green beans and mashed potatoes",
        price: 11.69, // Updated price with 10% off
        isInWishlist: false,
        category: []
    }
];


const allProductListLifee = [
    {
        id:0,
        imgSrc:"images/mill.jpeg",
        name:"life",
        category:"Solid Color Door",
        price:740.00,
        isInWishlist:false,
        link: "/shop"
    },{
        id:1,
        imgSrc:"images/hongkong.jpeg",
        name:"life",
        category:"Double Layer Door",
        price:550.00,
        isInWishlist:false,
    },{
        id:2,
        imgSrc:"images/five.png",
        name:"life",
        category:"Chinese Door",
        price:850.00,
        isInWishlist:false,
    },{
        id:3,
        imgSrc:"images/dosa.jpeg",
        name:"life",
        category:"Plastic Door",
        price:440.00,
        isInWishlist:false,
    }
]
const allProductListLife = [
    {
        id: 0,
        imgSrc: "images/LA_swarmi.png",
        name: "Swami",
        description: "Broccoli, carrots, onions, kale, roasted almonds & raisins with curry brown rice and sweet red miso sauce. Contains tree nuts, soy, sesame and allium.",
        price: 11.25, // Updated price with 10% off
        isInWishlist: false,
        category: ["V", "VG", "GF", "DF"]
    },
    {
        id: 1,
        imgSrc: "images/LA_rainbow.png",
        name: "Rainbow Harvest",
        description: "Whipped sweet potato, beets, carrots, broccoli, kale, tofu & brown rice with ginger tamari sauce. Contains soy and allium.",
        price: 11.48, // Updated price with 10% off
        isInWishlist: false,
        category: ["V", "VG", "GF", "DF", "NF"]
    },
    {
        id: 2,
        imgSrc: "images/LA_teriyaki.png",
        name: "Teriyaki Tofu",
        description: "Teriyaki glazed tofu with broccoli, roasted shiitake, carrots, charred onion, black sesame, scallions and brown rice. Contains allium, sesame & soy.",
        price: 11.66, // Updated price with 10% off
        isInWishlist: false,
        category: ["V", "VG", "GF", "DF", "NF"]
    },
    {
        id: 3,
        imgSrc: "images/LA_green.png",
        name: "Green Goddess",
        description: "Avocado, broccoli & kale with tofu, lemon garlic brown rice and ginger tamari sauce. Contains soy and allium.",
        price: 11.84, // Updated price with 10% off
        isInWishlist: false,
        category: ["V", "VG", "GF", "DF", "NF"]
    },
    {
        id: 4,
        imgSrc: "images/LA_southwest.png",
        name: "Southwest Sol",
        description: "Avocado, sweet corn, tomato, roasted chipotle tofu with peppers & onions, purple cabbage, jalapeño, braised black beans & dirty rice topped with salsa verde. Contains allium and soy.",
        price: 11.84, // Updated price with 10% off
        isInWishlist: false,
        category: ["V", "VG", "GF", "DF", "NF"]
    },
    {
        id: 5,
        imgSrc: "images/LA_buddha.png",
        name: "Buddha Bowl",
        description: "Avocado, beets, kale, shiitake, purple cabbage, jalapeño, tamari almonds, hemp seeds, lemon cilantro rice & quinoa with ginger tamari sauce. Contains tree nuts, soy and allium.",
        price: 12.29, // Updated price with 10% off
        isInWishlist: false,
        category: ["V", "VG", "GF", "DF"]
    },
    {
        id: 6,
        imgSrc: "images/LA_autumn.jpeg",
        name: "Autumn Falafel",
        description: "Crispy baked falafel, roasted butternut squash, brussels sprouts, carrots, kale, crispy chickpeas, black lentils & lemon flax brown rice with lemon tahini. Contains sesame, soy and allium.",
        price: 12.29, // Updated price with 10% off
        isInWishlist: false,
        category: ["V", "VG", "GF", "DF", "NF"]
    },
    {
        id: 7,
        imgSrc: "images/LA_plant.png",
        name: "Plant Power Bowl",
        description: "Roasted brussels sprouts, hot honey slaw, broccoli, beets, shiitake & enoki mushrooms, smoky chili brown rice & quinoa topped with avocado, toasted pumpkin & sunflower seeds and salsa verde.",
        price: 12.29, // Updated price with 10% off
        isInWishlist: false,
        category: ["V", "VG", "GF", "DF", "NF"]
    },
    {
        id: 8,
        imgSrc: "images/LA_tuscan.jpeg",
        name: "Tuscan Kale",
        description: "Tuscan kale, green apples, shaved fennel, roasted cashews, dried cranberries, cashew parmesan & basil green goddess dressing. Contains tree nuts and allium.",
        price: 11.25, // Updated price with 10% off
        isInWishlist: false,
        category: ["V", "VG", "GF", "DF", "S"]
    },
    {
        id: 9,
        imgSrc: "images/LA_greek.png",
        name: "Greek Tahini",
        description: "Cucumber, tomato, feta, kalamata olives, hummus & tahini, shredded carrots, pickled onion, crispy chickpeas with mixed baby lettuces, romaine hearts and greek vinaigrette. Contains sesame, dairy, allium and soy.",
        price: 11.66, // Updated price with 10% off
        isInWishlist: false,
        category: ["V", "GF", "NF"]
    },
    {
        id: 10,
        imgSrc: "images/LA_elote.png",
        name: "Elote Avocado",
        description: "Avocado, sweet corn, roasted chipotle tofu with peppers & onions, tomato, mixed baby lettuces, romaine hearts, shaved cabbages, pickled onions, jalapeño, black beans, chili-lime crema & salsa verde. Contains dairy, allium and soy.",
        price: 11.66, // Updated price with 10% off
        isInWishlist: false,
        category: ["V", "GF", "NF"]
    },
    {
        id: 11,
        imgSrc: "images/LA_chilled.jpeg",
        name: "Chilled Thai Noodles",
        description: "Rice noodles, sugar snap peas, red bell pepper, cucumber, celery, carrot, cabbages, cilantro & mint and peanut crumble with peanut lime sauce & sweet chili coconut sauce. Contains peanuts, tree nuts, allium, sesame and soy.",
        price: 11.66, // Updated price with 10% off
        isInWishlist: false,
        category: ["V", "VG", "GF", "DF"]
    },
    {
        id: 12,
        imgSrc: "images/LA_avocado.png",
        name: "Avocado Greens",
        description: "Everything-encrusted avocado, cucumber, sweet corn, pickled onions, kalamata olives, crispy chickpeas, feta, mixed baby lettuces, romaine hearts and tomato vinaigrette. Contains dairy, soy, sesame and allium.",
        price: 11.93, // Updated price with 10% off
        isInWishlist: false,
        category: ["V", "GF", "NF"]
    },
    {
        id: 13,
        imgSrc: "images/LA_chopped.jpeg",
        name: "Autumn Chopped",
        description: "Roasted butternut squash, green apples, dried cranberries, candied pecans, blue cheese, celery, baby lettuces, romaine hearts & hot honey cider vinaigrette. Contains tree nuts, dairy, allium and soy.",
        price: 11.93, // Updated price with 10% off
        isInWishlist: false,
        category: ["V", "GF"]
    }
];


const allProductListSilk = [
    {
        id:0,
        imgSrc:"images/mill.jpeg",
        name:"Silk",
        category:"Solid Color Door",
        price:740.00,
        isInWishlist:false,
        link: "/shop"
    },{
        id:1,
        imgSrc:"images/hongkong.jpeg",
        name:"Silk",
        category:"Double Layer Door",
        price:550.00,
        isInWishlist:false,
    },{
        id:2,
        imgSrc:"images/five.png",
        name:"Silk",
        category:"Chinese Door",
        price:850.00,
        isInWishlist:false,
    },{
        id:3,
        imgSrc:"images/dosa.jpeg",
        name:"Silk",
        category:"Plastic Door",
        price:440.00,
        isInWishlist:false,
    }
]

const blogList = [
    {
        id:0,
        imgSrc:"images/blogs-blog-1.png",
        category:"Electronic",
        date:"June 21, 2023",
        title:"An electronic product is a device that uses electricity to perform a function.",
        desc:"Electronic products often contain a range of components, including processors, memory, and input/output devices, and they may be powered by batteries or plugged into an electrical outlet. Many electronic products rely on software programs to function and may be connected to the internet.",
    },
    {
        id:1,
        imgSrc:"images/blogs-blog-2.png",
        category:"Furniture",
        date:"June 21, 2023",
        title:"There are many furniture blogs that provide information and inspiration on furniture",
        desc:"These blogs often feature articles on a variety of topics related to furniture, such as how to choose the right furniture for your space, how to care for different types of furniture, and how to mix and match different styles to create a cohesive look...",
    },
    {
        id:2,
        imgSrc:"images/blogs-blog-3.png",
        category:"Fashion",
        date:"June 21, 2023",
        title:"Fashion refers to the styles and trends in clothing footwear, accessories ersonal expression",
        desc:"Electronic products often contain a range of components, including processors, memory, and input/output devices, and they may be powered by batteries or plugged into an electrical outlet. Many electronic products rely on software programs to function and may be connected to the internet.",
    },
    {
        id: 3,
        imgSrc: "images/blogs-blog-4.png",
        category: "Food",
        date: "June 22, 2023",
        title: "Exploring Culinary Delights: A Journey into Exquisite Tastes",
        desc: "Food is not just sustenance; it's an art, a culture, and a way of life. From street food stalls to Michelin-starred restaurants, this blog dives into the rich tapestry of flavors, ingredients, and culinary traditions that make up our global food landscape.",
    },
    {
        id: 4,
        imgSrc: "images/blogs-blog-5.png",
        category: "Travel",
        date: "June 22, 2023",
        title: "Wanderlust Chronicles: Tales of Adventures and Discoveries",
        desc: "Embark on a virtual journey to faraway lands, hidden gems, and breathtaking landscapes. This travel blog captures the spirit of exploration, offering insights into unforgettable destinations, travel tips, and personal stories from globetrotters around the world.",
    }

]

const ornamentList = [
    {
        id:0,
        imgSrc:"images/img-1.jpg",
        category:"Ring",
        name:"Flower Shaped Diamond Ring",
        price:640.00,
        oldPrice:780.00,
        isInWishlist:false,
    },
    {
        id:1,
        imgSrc:"images/img-2.jpg",
        category:"Ring",
        name:"Crown Shaped Diamond Ring",
        price:950.00,
        oldPrice:980.00,
        isInWishlist:false,
    },
    {
        id:2,
        imgSrc:"images/img-3.jpg",
        category:"Necklace",
        name:"Diamond Cross Necklace",
        price:760.00,
        oldPrice:820.00,
        isInWishlist:false,
    },
    {
        id:3,
        imgSrc:"images/img-4.jpg",
        category:"Necklace",
        name:"Sapphire Diamond Necklace",
        price:830.00,
        oldPrice:880.00,
        isInWishlist:false,
    },
    {
        id:4,
        imgSrc:"images/img-5.jpg",
        category:"Hair Clip",
        name:"Diamond Ingraved Ribbon",
        price:450.00,
        oldPrice:480.00,
        isInWishlist:false,
    },
    {
        id:5,
        imgSrc:"images/img-6.jpg",
        category:"Ring",
        name:"Diamond Engagement Ring",
        price:800.00,
        oldPrice:850.00,
        isInWishlist:false,
    },
    {
        id:6,
        imgSrc:"images/img-7.jpg",
        category:"Bracelet",
        name:"Diamond Ingraved Bracelet",
        price:640.00,
        oldPrice:780.00,
        isInWishlist:false,
    },
    {
        id:7,
        imgSrc:"images/img-8.jpg",
        category:"Bracelet",
        name:"Diamond Leather Bracelet",
        price:640.00,
        oldPrice:780.00,
        isInWishlist:false,
    },
]

const allCakeList = [
    {
        id:0,
        isInWishlist:false,
        imgSrc:"images/fz-product-1.png",
        name:"Homemade Strawberry Cake",
        price:150.00,
        oldPrice:180.00,
    },
    {
        id:1,
        isInWishlist:false,
        imgSrc:"images/fz-product-2.png",
        name:"Homemade Chocolate Cake",
        price:70.00,
        oldPrice:85.00,
    },
    {
        id:2,
        isInWishlist:false,
        imgSrc:"images/fz-product-3.png",
        name:"Homemade Red Velvet Cake",
        price:75.00,
        oldPrice:85.00,
    },
    {
        id:3,
        isInWishlist:false,
        imgSrc:"images/fz-product-4.png",
        name:"Homemade Caramel Cake",
        price:80.00,
        oldPrice:90.00,
    },
    {
        id:4,
        isInWishlist:false,
        imgSrc:"images/fz-product-1.png",
        name:"Homemade Strawberry Cake",
        price:150.00,
        oldPrice:180.00,
    },
    {
        id:5,
        isInWishlist:false,
        imgSrc:"images/fz-product-2.png",
        name:"Homemade Chocolate Cake",
        price:70.00,
        oldPrice:85.00,
    },

    {
        id:6,
        isInWishlist:false,
        imgSrc:"images/fz-product-5.png",
        name:"Homemade Pumpkin Cake",
        price:50.00,
        oldPrice:60.00,
    },
    {
        id:7,
        isInWishlist:false,
        imgSrc:"images/fz-product-6.png",
        name:"Homemade Pound Cake",
        price:40.00,
        oldPrice:50.00,
    },
    {
        id:8,
        isInWishlist:false,
        imgSrc:"images/fz-product-7.png",
        name:"Homemade Chocolate Pie",
        price:70.00,
        oldPrice:80.00,
    },
    {
        id:9,
        isInWishlist:false,
        imgSrc:"images/fz-product-8.png",
        name:"Homemade Chocolate Doughnut",
        price:60.00,
        oldPrice:70.00,
    },
    {
        id:10,
        isInWishlist:false,
        imgSrc:"images/fz-product-5.png",
        name:"Homemade Pumpkin Cake",
        price:50.00,
        oldPrice:60.00,
    },
    {
        id:11,
        isInWishlist:false,
        imgSrc:"images/fz-product-6.png",
        name:"Homemade Pound Cake",
        price:40.00,
        oldPrice:50.00,
    },

    {
        id:12,
        isInWishlist:false,
        imgSrc:"images/fz-product-9.png",
        name:"Chocolate Chips Cup Cake",
        price:40.00,
        oldPrice:50.00,
    },
    {
        id:13,
        isInWishlist:false,
        imgSrc:"images/fz-product-10.png",
        name:"Dark Chocolate Cup Cake",
        price:50.00,
        oldPrice:60.00,
    },
    {
        id:14,
        isInWishlist:false,
        imgSrc:"images/fz-product-11.png",
        name:"Strawberry Cup Cup Cake",
        price:40.00,
        oldPrice:50.00,
    },
    {
        id:15,
        isInWishlist:false,
        imgSrc:"images/fz-product-12.png",
        name:"Chocolate Cream Cup Cake",
        price:45.00,
        oldPrice:50.00,
    },
    {
        id:16,
        isInWishlist:false,
        imgSrc:"images/fz-product-9.png",
        name:"Chocolate Chips Cup Cake",
        price:40.00,
        oldPrice:50.00,
    },
    {
        id:17,
        isInWishlist:false,
        imgSrc:"images/fz-product-10.png",
        name:"Dark Chocolate Cup Cake",
        price:50.00,
        oldPrice:60.00,
    },

    {
        id:18,
        isInWishlist:false,
        imgSrc:"images/fz-product-13.png",
        name:"Homemade Strawberry Cake",
        price:430.00,
        oldPrice:450.00,
    },
    {
        id:19,
        isInWishlist:false,
        imgSrc:"images/fz-product-14.png",
        name:"Homemade Blueberry Cake",
        price:380.00,
        oldPrice:400.00,
    },
    {
        id:20,
        isInWishlist:false,
        imgSrc:"images/fz-product-15.png",
        name:"Homemade Fruit Cake",
        price:450.00,
        oldPrice:480.00,
    },
    {
        id:21,
        isInWishlist:false,
        imgSrc:"images/fz-product-16.png",
        name:"Two Layered Vanilla Cake",
        price:500.00,
        oldPrice:530.00,
    },
    {
        id:22,
        isInWishlist:false,
        imgSrc:"images/fz-product-17.png",
        name:"Homemade Black Forest Cake",
        price:330.00,
        oldPrice:340.00,
    },
    {
        id:23,
        isInWishlist:false,
        imgSrc:"images/fz-product-18.png",
        name:"Homemade Vanilla Cake",
        price:120.00,
        oldPrice:130.00,
    },
    {
        id:24,
        isInWishlist:false,
        imgSrc:"images/fz-product-19.png",
        name:"Homemade Chocolate Cake",
        price:250.00,
        oldPrice:280.00,
    },
    {
        id:25,
        isInWishlist:false,
        imgSrc:"images/fz-product-20.png",
        name:"Homemade Oats Cake",
        price:280.00,
        oldPrice:290.00,
    },
]

const productDetail = [
    {
        id:0,
        imgSrc: "images/fz-1-banner-bg-1.png",
        name:"Bento Cake Ultimate Chocolate 200gm",
        price:750.00
    }
]



export {
    firstBannerData,
    brandList,
    thirdBannerData,
    accordionList,
    allProductList,
    allProductListMill,
    allProductListLife,
    allProductListSilk,
    blogList,
    ornamentList,
    allCakeList,
    productDetail,
}