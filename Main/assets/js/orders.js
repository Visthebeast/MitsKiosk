

// Now you can use the newMenu array in your orders.js file
//console.log(newMenu);
var newMenu = [
    {
        "sys": { "id": "1" },
        "fields": {
            "title": "Chicken Sandwich",
            "category": "Snacks",
            "price": "45",
            "caleories": "220 - 280 Kcal",
            "image": { "fields": { "file": { "url": "https://vaya.in/recipes/wp-content/uploads/2018/06/Grilled-Chicken-Sandwich.jpg" } } }
        }
    },
    {
        "sys": { "id": "2" },
        "fields": {
            "title": "Veg Sandwich",
            "category": "Snacks",
            "price": "45",
            "caleories": "250 - 300 Kcal",
            "image": { "fields": { "file": { "url": "https://subwayaruba.com/wp-content/uploads/2019/05/sub6-veggie-delite.jpg" } } }
        }
    },
    {
        "sys": { "id": "3" },
        "fields": {
            "title": "Veg Cutlet ",
            "category": "Snacks",
            "price": "60",
            "caleories": "320 - 400 Kcal",
            "image": { "fields": { "file": { "url": "https://www.cookwithmanali.com/wp-content/uploads/2021/04/Veg-Cutlet.jpg" } } }
        }
    },
    {
        "sys": { "id": "4" },
        "fields": {
            "title": "Chicken Cutlet",
            "category": "Snacks",
            "price": "45",
            "caleories": "250 - 300 Kcal",
            "image": { "fields": { "file": { "url": "https://cdn3.foodviva.com/static-content/food-images/snacks-recipes/vegetable-cutlet-recipe/vegetable-cutlet-recipe.jpg" } } }
        }
    },
    {
        "sys": { "id": "5" },
        "fields": {
            "title": "Meat Roll",
            "category": "Snacks",
            "price": "45",
            "caleories": "230 - 285 Kcal",
            "image": { "fields": { "file": { "url": "https://1.bp.blogspot.com/-7dPIbobpVxw/YQFZM1ccJwI/AAAAAAAATlI/oNIXqCuxChMmyfgYnB84Nqlg7JNQ6BDOwCLcBGAsYHQ/s800/IMG_2214.JPG" } } }
        }
    },
    {
        "sys": { "id": "6" },
        "fields": {
            "title": "Samosa",
            "category": "Snacks",
            "price": "25",
            "caleories": "150 - 280 Kcal",
            "image": { "fields": { "file": { "url": "https://dwellbymichelle.com/wp-content/uploads/2021/03/DWELL-Samosa-Recipe.jpeg" } } }
        }
    },
    {
        "sys": { "id": "7" },
        "fields": {
            "title": "Banana fry ",
            "category": "Snacks",
            "price": "30",
            "caleories": "165 - 225 Kcal",
            "image": { "fields": { "file": { "url": "https://static.toiimg.com/thumb/93738582.cms?width=1200&height=900" } } }
        }
    },
    {
        "sys": { "id": "8" },
        "fields": {
            "title": "Chicken Puffs",
            "category": "Snacks",
            "price": "30",
            "caleories": "170 - 220 Kcal",
            "image": { "fields": { "file": { "url": "https://littlespicejar.com/wp-content/uploads/2014/02/Chicken-Puff-Pastry-Chicken-Patties-18-540x720.jpg" } } }
        }
    },
    {
        "sys": { "id": "9" },
        "fields": {
            "title": "Egg Puffs",
            "category": "Snacks",
            "price": "40",
            "caleories": "190 - 230 Kcal",
            "image": { "fields": { "file": { "url": "https://thegoldenlamb.com/wp-content/uploads/2021/09/egg-puff-recipe-indian-main.jpg" } } }
        }
    },
    {
        "sys": { "id": "10" },
        "fields": {
            "title": "Bread fry",
            "category": "Snacks",
            "price": "45",
            "caleories": "175 - 235 Kcal",
            "image": { "fields": { "file": { "url": "https://villagecookingkerala.com/wp-content/uploads/2021/01/jgjjjgjgj-678x381.jpg" } } }
        }
    },
    {
        "sys": { "id": "11" },
        "fields": {
            "title": "Smoodh",
            "category": "Drinks",
            "price": "35",
            "caleories": "120 - 185 Kcal",
            "image": { "fields": { "file": { "url": "https://gumlet.assettype.com/foodtechbiz%2F2021-06%2F14ee0fde-adbc-4d9e-9125-60fc593b0de0%2F1624261283053.jpg?rect=0%2C7%2C1080%2C608&w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true" } } }
        }
    },
    {
        "sys": { "id": "12" },
        "fields": {
            "title": "Maa Juice",
            "category": "Drinks",
            "price": "45",
            "caleories": "135 - 210 Kcal",
            "image": { "fields": { "file": { "url": "https://www.luluhypermarket.in/medias/29216-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMTU0MTJ8aW1hZ2UvanBlZ3xhRFZrTDJnNVppODRPRGN5TlRRNE9ESTNNVFkyTHpJNU1qRTJMVEF4TG1wd1oxOHhNakF3VjNneE1qQXdTQXwwYmYyZGQ1YmZjYzAxMjJmY2I1MzM0NzEwMjZmMzI1OThkNDVhYjgzMTQ1ZjMxZWQzMTZhZGFmMzNkOWFjNmFj" } } }
        }
    },
    {
        "sys": { "id": "13" },
        "fields": {
            "title": "Coca Cola",
            "category": "Drinks",
            "price": "40",
            "caleories": "140 - 156 Kcal",
            "image": { "fields": { "file": { "url": "https://i.guim.co.uk/img/media/d13a335be378fd1d5360d34a88faefe2b6e38ca9/0_156_3500_2100/master/3500.jpg?width=700&quality=85&auto=format&fit=max&s=092c5fc37ff9a1f56faae91550b1d035" } } }
        }
    },
    {
        "sys": { "id": "14" },
        "fields": {
            "title": "Appy Fizz",
            "category": "Drinks",
            "price": "80",
            "caleories": "241 - 321 Kcal",
            "image": { "fields": { "file": { "url": "https://cdn.shopify.com/s/files/1/0101/2364/0896/products/IMG_9013_78bbfa5f-f257-402d-aab7-767b09c9d4dc_600x600_crop_center.jpg?v=1674192376" } } }
        }
    },
    {
        "sys": { "id": "15" },
        "fields": {
            "title": "Sprite",
            "category": "Drinks",
            "price": "80",
            "caleories": "265 - 321 Kcal",
            "image": { "fields": { "file": { "url": "https://ucarecdn.com/65a5c249-0a78-43dd-b035-238311381538/-/crop/1581x888/0,30/-/preview/" } } }
        }
    },
    {
        "sys": { "id": "16" },
        "fields": {
            "title": "Monster",
            "category": "Drinks",
            "price": "35",
            "caleories": "155 - 210 Kcal",
            "image": { "fields": { "file": { "url": "https://www.cantechonline.com/wp-content/uploads/Monster-Energy-drink-shutterstock_1145314877.jpg" } } }
        }
    },
    {
        "sys": { "id": "17" },
        "fields": {
            "title": "Predator",
            "category": "Drinks",
            "price": "35",
            "caleories": "230 - 280 Kcal",
            "image": { "fields": { "file": { "url": "https://5.imimg.com/data5/SELLER/Default/2022/7/PR/JT/JJ/145631512/3f4636bf77a4d129bb8b0279f07dabdc.jpg" } } }
        }
    },
    {
        "sys": { "id": "18" },
        "fields": {
            "title": "Cavins",
            "category": "Drinks",
            "price": "10",
            "caleories": "260 - 365 Kcal",
            "image": { "fields": { "file": { "url": "https://i0.wp.com/kitchenflavours.net/wp-content/uploads/2018/01/DSC_1459.jpg?fit=666%2C444&ssl=1" } } }
        }
    },
    {
        "sys": { "id": "19" },
        "fields": {
            "title": "Cold Coffee",
            "category": "Drinks",
            "price": "35",
            "caleories": "255 - 360 Kcal",
            "image": { "fields": { "file": { "url": "assets/images/cold-coffee.jpg" } } }
        }
    },
    {
        "sys": { "id": "20" },
        "fields": {
            "title": "Mojito",
            "category": "Drinks",
            "price": "15",
            "caleories": "220 - 265 Kcal",
            "image": { "fields": { "file": { "url": "https://agratefulmeal.com/wp-content/uploads/2023/02/blue-mojito-curacao-cocktail-featured.jpg" } } }
        }
    },
    {
        "sys": { "id": "21" },
        "fields": {
            "title": "Oreo Shake",
            "category": "Drinks",
            "price": "10",
            "caleories": "155 - 225 Kcal",
            "image": { "fields": { "file": { "url": "https://www.whiskaffair.com/wp-content/uploads/2020/07/Oreo-Milkshake-2-3.jpg" } } }
        }
    },
    {
        "sys": { "id": "22" },
        "fields": {
            "title": "Limca",
            "category": "Drinks",
            "price": "35",
            "caleories": "265 - 355 Kcal",
            "image": { "fields": { "file": { "url": "https://5.imimg.com/data5/SELLER/Default/2023/1/JE/ME/VN/69519039/1-25l-limca-carbonated-drinks.jpg" } } }
        }
    },
    {
        "sys": { "id": "23" },
        "fields": {
            "title": "Tea",
            "category": "Drinks",
            "price": "35",
            "caleories": "260 - 320 Kcal",
            "image": { "fields": { "file": { "url": "https://www.teaforturmeric.com/wp-content/uploads/2021/11/Masala-Chai-Tea-Recipe-Card.jpg" } } }
        }
    },
    {
        "sys": { "id": "24" },
        "fields": {
            "title": "Coffee",
            "category": "Drinks",
            "price": "15",
            "caleories": "255 - 390 Kcal",
            "image": { "fields": { "file": { "url": "https://post.healthline.com/wp-content/uploads/2020/08/AN275-cup-of-coffee-732x549-Thumb_0.jpg" } } }
        }
    },
    {
        "sys": { "id": "25" },
        "fields": {
            "title": "Cornetto",
            "category": "Frozen Treats",
            "price": "20",
            "caleories": "265 - 375 Kcal",
            "image": { "fields": { "file": { "url": "https://media.istockphoto.com/id/466765604/photo/cornetto-ice-cream.jpg?s=612x612&w=0&k=20&c=VwHRBX757E0d1kHiiF4Mb6b_Cf2V6p1RHkBwssKgaXQ=" } } }
        }
    },
    {
        "sys": { "id": "26" },
        "fields": {
            "title": "Sip-Up",
            "category": "Frozen Treats",
            "price": "15",
            "caleories": "300 - 425 Kcal",
            "image": { "fields": { "file": { "url": "https://cdn.cocoshoppy.com/products/sip-up-new_1625461909656.jpg" } } }
        }
    },
    {
        "sys": { "id": "27" },
        "fields": {
            "title": "Spiced Chicken",
            "category": "Cup Noodles",
            "price": "15",
            "caleories": "300 - 425 Kcal",
            "image": { "fields": { "file": { "url": "https://www.bigbasket.com/media/uploads/p/l/40052970_5-nissin-cup-noodles-spiced-chicken.jpg" } } }
        }
    },
    {
        "sys": { "id": "28" },
        "fields": {
            "title": "Mazedaar Masala",
            "category": "Cup Noodles",
            "price": "15",
            "caleories": "300 - 425 Kcal",
            "image": { "fields": { "file": { "url": "https://www.mymadrasmart.com/wp-content/uploads/2021/03/nisson.jpg" } } }
        }
    },
    {
        "sys": { "id": "29" },
        "fields": {
            "title": "Sea Food",
            "category": "Cup Noodles",
            "price": "15",
            "caleories": "300 - 425 Kcal",
            "image": { "fields": { "file": { "url": "https://www.bigbasket.com/media/uploads/p/l/40118708_2-nissin-cup-noodles-seafood.jpg" } } }
        }
    },
    {
        "sys": { "id": "30" },
        "fields": {
            "title": "Veggi Manchow",
            "category": "Cup Noodles",
            "price": "15",
            "caleories": "300 - 425 Kcal",
            "image": { "fields": { "file": { "url": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/sliding_image/89127a.jpg?ts=1666162445" } } }
        }
    },
    {
        "sys": { "id": "31" },
        "fields": {
            "title": "Mulak",
            "category": "Bhajji",
            "price": "15",
            "caleories": "300 - 425 Kcal",
            "image": { "fields": { "file": { "url": "https://i.ytimg.com/vi/JMkx1PNjwOE/maxresdefault.jpg" } } }
        }
    },
    {
        "sys": { "id": "32" },
        "fields": {
            "title": "Motta",
            "category": "Bhajji",
            "price": "15",
            "caleories": "300 - 425 Kcal",
            "image": { "fields": { "file": { "url": "https://i.ytimg.com/vi/EwLWOnwAr0g/maxresdefault.jpg" } } }
        }
    },
    {
        "sys": { "id": "33" },
        "fields": {
            "title": "Ulli",
            "category": "Bhajji",
            "price": "15",
            "caleories": "300 - 425 Kcal",
            "image": { "fields": { "file": { "url": "https://1.bp.blogspot.com/-vI--sdfKefA/X95j26rZ5bI/AAAAAAAAqOo/E0n5NnTZaSsdqxHlwyz3xxFFJuFwpPrLwCLcBGAsYHQ/w1200-h630-p-k-no-nu/1-20201219_130631.jpg" } } }
        }
    },
    {
        "sys": { "id": "34" },
        "fields": {
            "title": "Cauliflower",
            "category": "Bhajji",
            "price": "15",
            "caleories": "300 - 425 Kcal",
            "image": { "fields": { "file": { "url": "https://i.ytimg.com/vi/NLpjxrDYuWo/maxresdefault.jpg" } } }
        }
    },
    {
        "sys": { "id": "35" },
        "fields": {
            "title": "French Fries",
            "category": "Bhajji",
            "price": "15",
            "caleories": "300 - 425 Kcal",
            "image": { "fields": { "file": { "url": "https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG" } } }
        }
    },



    //store items


    {
        "sys": { "id": "36" },
        "fields": {
            "title": "Notebooks",
            "category": "Stationery",
            "price": "40",
            "image": { "fields": { "file": { "url": "https://cdn.shopify.com/s/files/1/1192/7528/collections/papergrid.jpg?v=1625385205" } } }
        }
    },
    {
        "sys": { "id": "37" },
        "fields": {
            "title": "Pens",
            "category": "Stationery",
            "price": "10",
            "image": { "fields": { "file": { "url": "https://luxor.in/media/catalog/product/cache/1d33a401d7d4f49c41930c20a2e836a7/9/0/9000030188_0_1.jpg" } } }
        }
    },
    {
        "sys": { "id": "38" },
        "fields": {
            "title": "Pencils ",
            "category": "Stationery",
            "price": "5",
            "image": { "fields": { "file": { "url": "https://media.istockphoto.com/id/183019540/photo/pencils.jpg?s=170667a&w=0&k=20&c=BrNwXrPH5704DjP81eJw2m0-26skAgunzoQTzp_s5hY=" } } }
        }
    },
    {
        "sys": { "id": "39" },
        "fields": {
            "title": "Scissors",
            "category": "Stationery",
            "price": "50",
            "image": { "fields": { "file": { "url": "https://m.media-amazon.com/images/I/718IrxlnEnL.jpg" } } }
        }
    },
    {
        "sys": { "id": "40" },
        "fields": {
            "title": "Calculator",
            "category": "Stationery",
            "price": "100",
            "image": { "fields": { "file": { "url": "https://m.media-amazon.com/images/I/61iy52iEgDL.jpg" } } }
        }
    },
    {
        "sys": { "id": "41" },
        "fields": {
            "title": "Fevicol",
            "category": "Stationery",
            "price": "20",
            "image": { "fields": { "file": { "url": "https://m.media-amazon.com/images/I/41bV0vfIroL.jpg" } } }
        }
    },
    {
        "sys": { "id": "42" },
        "fields": {
            "title": "Cello Tape ",
            "category": "Stationery",
            "price": "80",
            "image": { "fields": { "file": { "url": "https://m.media-amazon.com/images/I/41uz0bGEEJL.jpg" } } }
        }
    },
    {
        "sys": { "id": "43" },
        "fields": {
            "title": "Eraser",
            "category": "Stationery",
            "price": "5",
            "image": { "fields": { "file": { "url": "https://www.towntokri.com/wp-content/uploads/2021/04/Apsara-NonDust-Eraser-mrp5.jpg" } } }
        }
    },
    {
        "sys": { "id": "44" },
        "fields": {
            "title": "A-4 paper",
            "category": "Stationery",
            "price": "1",
            "image": { "fields": { "file": { "url": "https://tiimg.tistatic.com/fp/1/007/609/white-a4-size-copier-paper-used-in-printing-and-photocopy-662.jpg" } } }
        }
    },
    {
        "sys": { "id": "45" },
        "fields": {
            "title": "Files",
            "category": "Stationery",
            "price": "20",
            "image": { "fields": { "file": { "url": "https://m.media-amazon.com/images/I/51lWLp1kfmL._AC_UF1000,1000_QL80_.jpg" } } }
        }
    },
    {
        "sys": { "id": "46" },
        "fields": {
            "title": "Sharpener",
            "category": "Stationery",
            "price": "5",
            "image": { "fields": { "file": { "url": "https://5.imimg.com/data5/SELLER/Default/2020/10/CD/YQ/DH/109286633/pencil-sharpener-500x500.jpg" } } }
        }
    },
    {
        "sys": { "id": "47" },
        "fields": {
            "title": "Scale",
            "category": "Stationery",
            "price": "15",
            "image": { "fields": { "file": { "url": "https://www.bigbasket.com/media/uploads/p/l/40126493-3_2-faber-castell-scale-plastic.jpg" } } }
        }
    },
    {
        "sys": { "id": "48" },
        "fields": {
            "title": "Dairy Milk",
            "category": "Chocolates",
            "price": "20",
            "image": { "fields": { "file": { "url": "https://cdn.shopify.com/s/files/1/0579/0829/7801/products/001_3.png?v=1665512917&width=1946" } } }
        }
    },
    {
        "sys": { "id": "49" },
        "fields": {
            "title": "Choki-Choki",
            "category": "Chocolates",
            "price": "5",
            "image": { "fields": { "file": { "url": "https://90skidsindia.com/image/cache/catalog/candy1/images%20(33)-1000x1000.jpeg" } } }
        }
    },
    {
        "sys": { "id": "50" },
        "fields": {
            "title": "Mentos-Strawberry",
            "category": "Chocolates",
            "price": "1",
            "image": { "fields": { "file": { "url": "https://cdn.sanity.io/images/eqq3eum0/production/534e242617dd650b4195be84b903ec825ae6b325-3000x1759.png" } } }
        }
    },
    {
        "sys": { "id": "51" },
        "fields": {
            "title": "Mentos-Orange",
            "category": "Chocolates",
            "price": "1",
            "image": { "fields": { "file": { "url": "https://cdn.sanity.io/images/eqq3eum0/production/4e2a0475429db608d8e5024c9c9d1a435a144ec8-3000x1759.png" } } }
        }
    },
    {
        "sys": { "id": "52" },
        "fields": {
            "title": "Mentos-Mint",
            "category": "Chocolates",
            "price": "1",
            "image": { "fields": { "file": { "url": "https://m.media-amazon.com/images/I/51bJvv1bKgL.jpg" } } }
        }
    },
    {
        "sys": { "id": "53" },
        "fields": {
            "title": "Tic-Tac",
            "category": "Chocolates",
            "price": "10",
            "image": { "fields": { "file": { "url": "https://www.tictac.com/us/sites/tictac30_us/files/styles/700x700_scaled/public/2022-10/freshmint.png" } } }
        }
    },
    {
        "sys": { "id": "54" },
        "fields": {
            "title": "Double Mint",
            "category": "Chocolates",
            "price": "10",
            "image": { "fields": { "file": { "url": "https://etimg.etb2bimg.com/thumb/msid-53853883,width-1200,resizemode-4/.jpg" } } }
        }
    },
    {
        "sys": { "id": "55" },
        "fields": {
            "title": "Munch",
            "category": "Chocolates",
            "price": "5",
            "image": { "fields": { "file": { "url": "https://www.nestle.in/sites/g/files/pydnoa451/files/MUNCH-Rs-5-270x295.jpg" } } }
        }
    },
    {
        "sys": { "id": "56" },
        "fields": {
            "title": "Maha Munch",
            "category": "Chocolates",
            "price": "10",
            "image": { "fields": { "file": { "url": "https://media.mastbazaar.com/catalog/product/cache/f1d278c568328400bf84bb90ab99967c/8/4/846b17547cdad4dab8493023cbe46b3f80b0a0a91cd3d6221671646215eb180f.jpeg" } } }
        }
    },
    {
        "sys": { "id": "57" },
        "fields": {
            "title": "Gems",
            "category": "Chocolates",
            "price": "10",
            "image": { "fields": { "file": { "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruWllgd0x2NxbSqNPIZWBCRQE_IX0UxOmxUol-FfQ7hsticCYqYiJZE0aAzFOTXGSntY&usqp=CAU" } } }
        }
    },
    {
        "sys": { "id": "58" },
        "fields": {
            "title": "Perk",
            "category": "Chocolates",
            "price": "15",
            "image": { "fields": { "file": { "url": "https://www.jiomart.com/images/product/original/491074314/cadbury-perk-twin-wafer-chocolate-bar-28-g-product-images-o491074314-p491074314-0-202203171001.jpg" } } }
        }
    },
    {
        "sys": { "id": "59" },
        "fields": {
            "title": "Lab Record",
            "category": "Lab Record",
            "price": "105",
            "image": { "fields": { "file": { "url": "https://5.imimg.com/data5/SELLER/Default/2021/7/JJ/IA/BF/133103611/record-notebook-500x500.jpg" } } }
        }
    },

]

let selectedUserEmail = '';

function setOrderDetails() {
    const userList = document.getElementById('user-list');
    const orderDetails = document.getElementById('order-details');

    firebase
        .database()
        .ref('Users_Order')
        .on('value', function (snapshot) {
            userList.innerHTML = '';
            orderDetails.innerHTML = '';

            if (snapshot.exists()) {
                const users = snapshot.val();

                for (const userEmail in users) {
                    if (users.hasOwnProperty(userEmail)) {
                        const userOrders = users[userEmail];

                        const userButton = document.createElement('button');
                        userButton.classList.add('user-button');
                        const userName = userEmail.split('_')[0]; // Extract the name part before the '@' symbol
                        userButton.textContent = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
                        userButton.addEventListener('click', function () {
                            displayOrderDetails(userEmail,userOrders, orderDetails);
                        });

                        userList.appendChild(userButton);
                    }
                }
            } else {
                console.log('No orders');
            }
        });
}

function displayOrderDetails(userEmail, userOrders, orderDetails) {
    orderDetails.innerHTML = '';
    selectedUserEmail=userEmail
    let i = 1;
    let subTotal = 0;

    for (const orderKey in userOrders) {
        if (userOrders.hasOwnProperty(orderKey)) {
            const order = userOrders[orderKey];
            const total = order.User_Cart.Total_Amount;
            const userCart = order.User_Cart.Details;

            const orderTable = document.createElement('table');
            orderTable.classList.add('order-table');

            const headerRow = orderTable.insertRow();
            headerRow.innerHTML = `
        <th>S.No.</th>
        <th>Food Item</th>
        <th>Quantity</th>
        <th>Amount</th>
        <th>Total</th>
      `;

            userCart.forEach((item) => {
                const foodID = item.FoodID;
                const foodItem = newMenu[foodID-1].fields.title;
                const amount = newMenu[foodID-1].fields.price;
                const quantity = item.Quantity;
                const itemTotal = amount * quantity;

                subTotal += itemTotal;

                const row = orderTable.insertRow();
                row.innerHTML = `
          <td>${i}.</td>
          <td>${foodItem}</td>
          <td>${quantity}</td>
          <td>${amount}</td>
          <td>${itemTotal.toFixed(2)}</td>
        `;

                i++;
            });

            const orderDeliveredButton = document.createElement('button');
            orderDeliveredButton.classList.add('order-delivered-button');
            orderDeliveredButton.textContent = 'Order Delivered';
            orderDeliveredButton.addEventListener('click', function () {
                deleteOrder(userEmail, userOrders, orderKey,orderDetails);
            });

            const orderTableWrapper = document.createElement('div');
            orderTableWrapper.classList.add('order-table-wrapper');
            orderTableWrapper.appendChild(orderTable);
            orderTableWrapper.appendChild(orderDeliveredButton);

            orderDetails.appendChild(orderTableWrapper);

            const subtotalDiv = document.createElement('div');
            subtotalDiv.classList.add('bold');
            subtotalDiv.textContent = 'Sub-Total: ' + subTotal.toFixed(2);

            orderDetails.appendChild(subtotalDiv);
            orderDetails.appendChild(document.createElement('hr'));
        }
    }
    const subtotalDiv = document.createElement('div');
    subtotalDiv.classList.add('bold');
    subtotalDiv.textContent = 'Sub-Total: ' + subTotal.toFixed(2);
    orderDetails.appendChild(subtotalDiv);
}


// function selectUser(userEmail) {
//     selectedUserEmail = userEmail;
//     // Call the displayOrderDetails function for the selected user
//     displayOrderDetails(userEmail, users[userEmail], orderDetails);
// }

function deleteOrder(userEmail, userOrders, orderKey,orderDetails) {
    if (userEmail !== selectedUserEmail) {
        console.log('Cannot delete orders of other users');
        return;
    }

    const userOrderRef = firebase.database().ref('Users_Order');
    userOrderRef
        .child(userEmail)
        .child(orderKey)
        .remove()
        .then(() => {
            console.log('Order deleted successfully');
            orderDetails.innerHTML = '';
            displayOrderDetails(userEmail, userOrders, orderDetails);
        })
        .catch((error) => {
            console.log('Error deleting order:', error);
        });
}



setOrderDetails();
// Call the setOrderDetails function to fetch and display the order details

firebase.database()
    .ref('Users_Order/sebin_Orders')
    .on('value', function (snapshot) {
        if (snapshot.exists()) {
            // Data exists, retrieve and log the data
            var data = snapshot.val();
            //console.log(data); // Log the retrieved data
        } else {
            console.log('No data found.'); // Log a message if no data is found
        }
    });

// Import the newMenu array from main.js
//import { newMenu } from './main.js';

// Call the function to display all orders


