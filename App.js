import React from 'react';
import ReactDOM from 'react-dom/client';


const Header = ()=>{
  return(
    <div className='header'>
        <div className='logo-container'>
            <img 
               className='logo'
               src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
            />
        </div>
        <div className='nav-items'>
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>cart</li>
            </ul>
        </div>
    </div>
  )
}

const RestaurantCard = (props)=>{
   const {resData} = props;

   const{name,cloudinaryImageId,cuisines,avgRating,deliveryTime}= resData?.info;


   return(
      <div className='res-card '>
         <img alt='restaurant-image' className='res-logo' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ cloudinaryImageId}/>
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating} Rating</h4>
         <p>Delivery Time: {deliveryTime}Min</p>
      </div>
   )
}

const reslist =  [
   {
      "info": {
         "id": "142670",
         "name": "Shah Ghouse Hotel & Restaurant",
         "cloudinaryImageId": "bk26jkkqpg55veii0aj9",
         "locality": "Santh Nirankari Satsang Bhavan",
         "areaName": "Banjara Hills",
         "costForTwo": "₹350 for two",
         "cuisines": [
         "Biryani",
         "Chinese",
         "Tandoor",
         "Mughlai"
         ],
         "avgRating": 4.3,
         "parentId": "19271",
         "avgRatingString": "4.3",
         "totalRatingsString": "64K+",
         "sla": {
         "deliveryTime": 15,
         "lastMileTravel": 1.9,
         "serviceability": "SERVICEABLE",
         "slaString": "15-20 mins",
         "lastMileTravelString": "1.9 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-28 00:00:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "Rxawards/_CATEGORY-Biryani.png",
               "description": "Delivery!"
            },
            {
               "imageId": "Rxawards/_CATEGORY-Mughlai.png",
               "description": "Delivery!"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Biryani.png"
                  }
               },
               {
                  "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Mughlai.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "10% OFF",
         "subHeader": "UPTO ₹40",
         "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
         }
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "--"
         }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/shah-ghouse-hotel-and-restaurant-santh-nirankari-satsang-bhavan-banjara-hills-rest142670",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "547809",
         "name": "Theobroma",
         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/18/afca1e52-becb-4126-8e95-2b88f1774073_547809.JPG",
         "locality": "Himayath Nagar",
         "areaName": "Himayath Nagar",
         "costForTwo": "₹400 for two",
         "cuisines": [
         "Desserts"
         ],
         "avgRating": 4.6,
         "parentId": "1040",
         "avgRatingString": "4.6",
         "totalRatingsString": "3.1K+",
         "sla": {
         "deliveryTime": 15,
         "lastMileTravel": 0.6,
         "serviceability": "SERVICEABLE",
         "slaString": "15-20 mins",
         "lastMileTravelString": "0.6 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-22 00:30:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
               "description": "Delivery!"
            },
            {
               "imageId": "Rxawards/_CATEGORY-Desserts.png",
               "description": "Delivery!"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "Delivery!",
                     "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                  }
               },
               {
                  "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Desserts.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹99",
         "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
         }
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "127"
         },
         "source": "GOOGLE",
         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/theobroma-himayath-nagar-rest547809",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "435640",
         "name": "Bakingo",
         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/7/b02f00d0-382a-470a-9fbb-95082b4879f0_435640.JPG",
         "locality": "Khairtabad",
         "areaName": "Banjara Hills",
         "costForTwo": "₹300 for two",
         "cuisines": [
         "Bakery"
         ],
         "avgRating": 4.5,
         "parentId": "3818",
         "avgRatingString": "4.5",
         "totalRatingsString": "5.7K+",
         "sla": {
         "deliveryTime": 26,
         "lastMileTravel": 5.7,
         "serviceability": "SERVICEABLE",
         "slaString": "25-30 mins",
         "lastMileTravelString": "5.7 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-22 00:00:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "--"
         }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/bakingo-khairtabad-banjara-hills-rest435640",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "367769",
         "name": "Lucky Restaurant",
         "cloudinaryImageId": "qems028i3da5rxf81rbp",
         "locality": "Banjara Hills",
         "areaName": "Banjara Hills",
         "costForTwo": "₹300 for two",
         "cuisines": [
         "Biryani",
         "Tandoor"
         ],
         "avgRating": 4.1,
         "parentId": "535180",
         "avgRatingString": "4.1",
         "totalRatingsString": "80K+",
         "sla": {
         "deliveryTime": 19,
         "lastMileTravel": 3,
         "serviceability": "SERVICEABLE",
         "slaString": "15-20 mins",
         "lastMileTravelString": "3.0 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-21 23:59:00",
         "opened": true
         },
         "badges": {
         
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹175 OFF",
         "subHeader": "ABOVE ₹349",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "--"
         }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/lucky-restaurant-banjara-hills-rest367769",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "12046",
         "name": "Subway",
         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/b8d0dd85-26ff-43e2-90d6-8a02d1afacf0_12046.jpg",
         "locality": "Telangana",
         "areaName": "Himayath Nagar",
         "costForTwo": "₹350 for two",
         "cuisines": [
         "Salads",
         "Snacks",
         "Desserts",
         "Beverages"
         ],
         "avgRating": 4.2,
         "parentId": "2",
         "avgRatingString": "4.2",
         "totalRatingsString": "39K+",
         "sla": {
         "deliveryTime": 23,
         "lastMileTravel": 1.5,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "1.5 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-22 01:00:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png",
               "description": "Delivery!"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "Delivery!",
                     "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Salad.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹150 OFF",
         "subHeader": "ABOVE ₹299",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "--"
         }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/subway-telangana-himayath-nagar-rest12046",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "17104",
         "name": "KFC",
         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/dfafe8e8-bdad-4cbf-b158-100963af7bd2_17104.JPG",
         "locality": "Prime Plaza",
         "areaName": "Himayatnagar",
         "costForTwo": "₹400 for two",
         "cuisines": [
         "Burgers",
         "Fast Food",
         "Rolls & Wraps"
         ],
         "avgRating": 4.3,
         "parentId": "547",
         "avgRatingString": "4.3",
         "totalRatingsString": "33K+",
         "sla": {
         "deliveryTime": 14,
         "lastMileTravel": 1.6,
         "serviceability": "SERVICEABLE",
         "slaString": "10-15 mins",
         "lastMileTravelString": "1.6 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-22 00:15:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "Rxawards/_CATEGORY-Burger.png",
               "description": "Delivery!"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹179",
         "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
         }
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "--"
         }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/kfc-prime-plaza-himayatnagar-rest17104",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "624526",
         "name": "La Pino'z Pizza",
         "cloudinaryImageId": "eydflhsjdfaqktybte8n",
         "locality": "Banjara Hills",
         "areaName": "Himayath Nagar",
         "costForTwo": "₹400 for two",
         "cuisines": [
         "Pizzas",
         "Pastas",
         "Italian",
         "Desserts",
         "Beverages"
         ],
         "avgRating": 4.3,
         "parentId": "4961",
         "avgRatingString": "4.3",
         "totalRatingsString": "3.8K+",
         "sla": {
         "deliveryTime": 16,
         "lastMileTravel": 0.9,
         "serviceability": "SERVICEABLE",
         "slaString": "15-20 mins",
         "lastMileTravelString": "0.9 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-22 01:00:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "Rxawards/_CATEGORY-Pizza.png",
               "description": "Delivery!"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹99"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "402"
         },
         "source": "GOOGLE",
         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/la-pinoz-pizza-banjara-hills-himayath-nagar-rest624526",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "23707",
         "name": "McDonald's",
         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/c3ea7f7c-f8b6-46bb-8259-dd5b794ab2c1_23707.jpg",
         "locality": "Himayath Nagar",
         "areaName": "Himayath Nagar",
         "costForTwo": "₹400 for two",
         "cuisines": [
         "Burgers",
         "Beverages",
         "Cafe",
         "Desserts"
         ],
         "avgRating": 4.4,
         "parentId": "630",
         "avgRatingString": "4.4",
         "totalRatingsString": "70K+",
         "sla": {
         "deliveryTime": 19,
         "lastMileTravel": 1.5,
         "serviceability": "SERVICEABLE",
         "slaString": "15-20 mins",
         "lastMileTravelString": "1.5 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-22 00:45:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "Rxawards/_CATEGORY-Burger.png",
               "description": "Delivery!"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹59",
         "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
         }
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "9.3K+"
         },
         "source": "GOOGLE",
         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/mcdonalds-himayath-nagar-rest23707",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "356688",
         "name": "Baskin Robbins - Ice Cream Desserts",
         "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
         "locality": "wajihuddin",
         "areaName": "Himayatnagar",
         "costForTwo": "₹300 for two",
         "cuisines": [
         "Desserts",
         "Ice Cream"
         ],
         "avgRating": 4.6,
         "veg": true,
         "parentId": "5588",
         "avgRatingString": "4.6",
         "totalRatingsString": "1.5K+",
         "sla": {
         "deliveryTime": 18,
         "lastMileTravel": 1.6,
         "serviceability": "SERVICEABLE",
         "slaString": "15-20 mins",
         "lastMileTravelString": "1.6 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-21 23:59:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
               "description": "Delivery!"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "50% OFF",
         "subHeader": "UPTO ₹100",
         "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
               "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
         }
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "--"
         }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/baskin-robbins-ice-cream-desserts-wajihuddin-himayatnagar-rest356688",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "32129",
         "name": "Burger King",
         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_32129.JPG",
         "locality": "Himayath Nagar",
         "areaName": "Himayath Nagar",
         "costForTwo": "₹350 for two",
         "cuisines": [
         "Burgers",
         "American"
         ],
         "avgRating": 4.3,
         "parentId": "166",
         "avgRatingString": "4.3",
         "totalRatingsString": "83K+",
         "sla": {
         "deliveryTime": 17,
         "lastMileTravel": 1.6,
         "serviceability": "SERVICEABLE",
         "slaString": "15-20 mins",
         "lastMileTravelString": "1.6 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-22 01:00:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "Rxawards/_CATEGORY-Burger.png",
               "description": "Delivery!"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹99"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "8.9K+"
         },
         "source": "GOOGLE",
         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/burger-king-himayath-nagar-rest32129",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "404999",
         "name": "BOX8 - Desi Meals",
         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/605f62e7-6355-4413-a55a-8d8d0fcab81f_404999.jpg",
         "locality": "Ashok Nagar",
         "areaName": "Vidyanagar",
         "costForTwo": "₹200 for two",
         "cuisines": [
         "North Indian",
         "Biryani",
         "Thalis",
         "Home Food"
         ],
         "avgRating": 4.4,
         "parentId": "10655",
         "avgRatingString": "4.4",
         "totalRatingsString": "2.8K+",
         "sla": {
         "deliveryTime": 20,
         "lastMileTravel": 3.7,
         "serviceability": "SERVICEABLE",
         "slaString": "15-25 mins",
         "lastMileTravelString": "3.7 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-22 01:00:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png",
               "description": "Delivery!"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "Delivery!",
                     "imageId": "Green%20Dot%20Awards/Best%20In%20Dal%20Makhani.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹139"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "--"
         }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/box8-desi-meals-ashok-nagar-vidyanagar-rest404999",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "437301",
         "name": "Pizza Hut",
         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/2adbbebb-def3-4cf5-9c91-6a60bb499695_437301.jpg",
         "locality": "OLD MLA Quarters roa",
         "areaName": "Himayat Nagar",
         "costForTwo": "₹350 for two",
         "cuisines": [
         "Pizzas"
         ],
         "avgRating": 4.3,
         "parentId": "721",
         "avgRatingString": "4.3",
         "totalRatingsString": "3.0K+",
         "sla": {
         "deliveryTime": 19,
         "lastMileTravel": 1.5,
         "serviceability": "SERVICEABLE",
         "slaString": "15-20 mins",
         "lastMileTravelString": "1.5 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-22 01:00:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
               "description": "Delivery!"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "Delivery!",
                     "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "50% OFF",
         "subHeader": "UPTO ₹100"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "--"
         }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/pizza-hut-old-mla-quarters-roa-himayat-nagar-rest437301",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "233055",
         "name": "The Good Bowl",
         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/d154a250-4cd7-4530-b209-ddc09d952b14_233055.jpg",
         "locality": "Mahesh Nagar",
         "areaName": "Abids",
         "costForTwo": "₹400 for two",
         "cuisines": [
         "Biryani",
         "Pastas",
         "Punjabi",
         "Desserts",
         "Beverages"
         ],
         "avgRating": 4.2,
         "parentId": "7918",
         "avgRatingString": "4.2",
         "totalRatingsString": "1.5K+",
         "sla": {
         "deliveryTime": 25,
         "lastMileTravel": 1.8,
         "serviceability": "SERVICEABLE",
         "slaString": "25-30 mins",
         "lastMileTravelString": "1.8 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-21 23:59:00",
         "opened": true
         },
         "badges": {
         "textExtendedBadges": [
            {
               "iconId": "guiltfree/GF_Logo_android_3x",
               "shortDescription": "options available",
               "fontColor": "#7E808C"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "",
                     "fontColor": "#7E808C",
                     "iconId": "guiltfree/GF_Logo_android_3x",
                     "shortDescription": "options available"
                  }
               }
               ]
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "ITEMS",
         "subHeader": "AT ₹149"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "--"
         }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/the-good-bowl-mahesh-nagar-abids-rest233055",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "24613",
         "name": "Domino's Pizza",
         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/9b951f7e-fc2a-4dd4-b572-160f1367b58c_24613.JPG",
         "locality": "Stock Exchange Road",
         "areaName": "Himayath Nagar",
         "costForTwo": "₹400 for two",
         "cuisines": [
         "Pizzas",
         "Italian",
         "Pastas",
         "Desserts"
         ],
         "avgRating": 4.3,
         "parentId": "2456",
         "avgRatingString": "4.3",
         "totalRatingsString": "19K+",
         "sla": {
         "deliveryTime": 25,
         "lastMileTravel": 1.3,
         "serviceability": "SERVICEABLE",
         "slaString": "20-25 mins",
         "lastMileTravelString": "1.3 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-22 02:59:00",
         "opened": true
         },
         "badges": {
         "imageBadges": [
            {
               "imageId": "Rxawards/_CATEGORY-Pizza.png",
               "description": "Delivery!"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "Delivery!",
                     "imageId": "Rxawards/_CATEGORY-Pizza.png"
                  }
               }
               ]
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "₹100 OFF",
         "subHeader": "ABOVE ₹249",
         "discountTag": "FLAT DEAL"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "2.5K+"
         },
         "source": "GOOGLE",
         "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/dominos-pizza-stock-exchange-road-himayath-nagar-rest24613",
         "type": "WEBLINK"
      }
   },
   {
      "info": {
         "id": "348662",
         "name": "CakeZone Patisserie",
         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/08a12ae9-c98d-4b7b-a114-bfa30a72eb53_348662.JPG",
         "locality": "VITHALWADI",
         "areaName": "Himayath Nagar",
         "costForTwo": "₹200 for two",
         "cuisines": [
         "Bakery",
         "Desserts",
         "Sweets",
         "Ice Cream"
         ],
         "avgRating": 4.5,
         "parentId": "7003",
         "avgRatingString": "4.5",
         "totalRatingsString": "7.3K+",
         "sla": {
         "deliveryTime": 14,
         "lastMileTravel": 1.5,
         "serviceability": "SERVICEABLE",
         "slaString": "10-15 mins",
         "lastMileTravelString": "1.5 km",
         "iconType": "ICON_TYPE_EMPTY"
         },
         "availability": {
         "nextCloseTime": "2024-11-21 23:00:00",
         "opened": true
         },
         "badges": {
         "textExtendedBadges": [
            {
               "iconId": "guiltfree/GF_Logo_android_3x",
               "shortDescription": "options available",
               "fontColor": "#7E808C"
            }
         ]
         },
         "isOpen": true,
         "type": "F",
         "badgesV2": {
         "entityBadges": {
            "imageBased": {
               
            },
            "textBased": {
               
            },
            "textExtendedBadges": {
               "badgeObject": [
               {
                  "attributes": {
                     "description": "",
                     "fontColor": "#7E808C",
                     "iconId": "guiltfree/GF_Logo_android_3x",
                     "shortDescription": "options available"
                  }
               }
               ]
            }
         }
         },
         "aggregatedDiscountInfoV3": {
         "header": "60% OFF",
         "subHeader": "UPTO ₹120"
         },
         "differentiatedUi": {
         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
         "differentiatedUiMediaDetails": {
            "lottie": {
               
            },
            "video": {
               
            }
         }
         },
         "reviewsSummary": {
         
         },
         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         "restaurantOfferPresentationInfo": {
         
         },
         "externalRatings": {
         "aggregatedRating": {
            "rating": "--"
         }
         },
         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
         "context": "seo-data-6355c93a-c649-4b8d-8383-de47253443e9"
      },
      "cta": {
         "link": "https://www.swiggy.com/city/hyderabad/cakezone-patisserie-vithalwadi-himayath-nagar-rest348662",
         "type": "WEBLINK"
      }
   },

   ]


const Body = ()=>{
   return(
      <div className='body'>
         <div className='search'>Search</div>
         <div className='res-container'>
            {
               reslist.map(restaurant=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
            }
         </div>
      </div>
   )
}



const AppLayout =()=>{
   return(
      <div className='app'>
         <Header />
         <Body/>
      </div>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);