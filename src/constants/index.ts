import HomeImg1 from "/src/assets/images/home-1.jpg";
import HomeImg2 from "/src/assets/images/home-2.jpg";
import HomeImg3 from "/src/assets/images/home-3.jpg";
import HomeImg4 from "/src/assets/images/home-4.jpg";
import partnerImage1 from "@/assets/images/partners1.jpg";
import partnerImage2 from "@/assets/images/partners2.jpg";
import partnerImage3 from "@/assets/images/partners3.jpg";
import partnerImage4 from "@/assets/images/partners4.jpg";
import partnerImage5 from "@/assets/images/partners5.jpg";
import partnerImage6 from "@/assets/images/partners6.jpg";
import { accordion, SocialLinks } from "@/interfaces";

// ===================== Home PAGE ============================
export const HeroSlider = [
    {
        subTitle : "Quiet place",
        title : `Luxury House In The Forest`,
        link : "Show Tenants",
        image : HomeImg1
    },
    {
        subTitle : "Architecture",
        title : `Relaxing Steep Lake House`,
        link : "Show Tenants",
        image : HomeImg2
    },
    {
        subTitle : "Architecture",
        title : `Modern House On The Rock`,
        link : "Show Tenants",
        image : HomeImg3
    },
    {
        subTitle : "Architecture",
        title : `Luxury Curved House`,
        link : "Show Tenants",
        image : HomeImg4
    },
]

export const HeroSocialLinks : SocialLinks[] = [
    {
        icon : "Facebook",
        link : "https://www.facebook.com/"
    },
    {
        icon : "Instagram",
        link : "https://www.instagram.com/"
    },
    {
        icon : "Twitter",
        link : "https://twitter.com/"
    },
    {
        icon : "Linkedin",
        link : "https://www.linkedin.com/"
    },
]

// ===================== landlords PAGE =========================
export const StatusCompany = [
    {
        num : "10+",
        title : "Partners"
    },
    {
        num : "500+",
        title : "Properties"
    },
    {
        num : "10+",
        title : "Locations"
    },
    {
        num : "150+",
        title : "Happy faces"
    },
]

export const ManagementAccordion : accordion[]  = [    
    {
        id: "item-1",
        title: "Efficient Guest Management" ,
        icon: "HousePlus",
        list: [
            {description : 'Simplify guest interactions from booking to check-out with our intuitive platform.'},
            {description : "Ensure a seamless experience for guests while effortlessly managing income and reservations."}
        ]
    },
    {
        id: "item-2",
        title: "Property Care" ,
        icon: "PillBottle",
        list: [
            {description : 'Professional cleaning services for cleanliness and hygiene.'},
            {description : 'Upkeep and maintenance for guest satisfaction.'},
            {description : 'Landlord-oriented dashboard for efficient property management.'}
        ]
    },
    {
        id: "item-3",
        title: "Optimize Your Listing" ,
        icon: "List",
        list: [
            {description : 'Increase your property&apos;s visibility and bookings through smart listing optimization.'},
            {description : 'Access our extensive member base and expand your reach with integrations on top platforms such as Airbnb, Booking.com, Vrbo, and more.'},
        ]
    },
    {
        id: "item-4",
        title: "Innovative Property Technology" ,
        icon: "Cpu",
        list: [
            {description : 'Stay ahead in property management with cutting-edge technology.'},
            {description : 'Utilize advanced tools for monitoring, automation, and maintenance.'},
            {description : 'Enhance efficiency and ease in property management with comprehensive features.'},
        ]
    },
    {
        id: "item-5",
        title: "Safety and Security" ,
        icon: "LockKeyhole",
        list: [
            {description : 'Ensure the safety and security of your property and guests with our comprehensive solutions.'},
            {description : 'Implement secure access, real-time monitoring, and reliable safety protocols.'},
            {description : 'Utilize ID verification and a KYC process for enhanced peace of mind and trust.'},
        ]
    }
]

export const RentGuaranteeAccordion : accordion[] = [    
    {
        id: "item-1",
        title: "Steady Income Assurance" ,
        icon: "CircleDollarSign",
        list: [
            {description : 'Guarantee consistent and reliable rental income through our dedicated assurance program.'},
            {description : "Ensure your property generates predictable returns, providing financial peace of mind."}
        ]
    },
    {
        id: "item-2",
        title: "Always Occupied" ,
        icon: "HousePlus",
        list: [
            {description : 'Maintain year-round occupancy of your property, minimizing income fluctuations typically influenced by seasonal periods.'},
        ]
    },
    {
        id: "item-3",
        title: "Premium Returns" ,
        icon: "Award",
        list: [
            {description : 'Maximize your property investments with higher-than-market-value returns due to high demand and our strategic pricing model at Hububb.'},
        ]
    },
    {
        id: "item-4",
        title: "Market Adaptability" ,
        icon: "ChartColumnIncreasing",
        list: [
            {description : 'Stay competitive with Hububb&apos;s adaptable strategies and market insights, ensuring your property remains attractive and profitable amidst dynamic market trends.'}
        ]
    },
    {
        id: "item-5",
        title: "Maximized Space" ,
        icon: "Maximize",
        list: [
            {description : 'Keep your property bustling with activity. Hububb ensures occupancy, safeguarding your space against vulnerabilities while you are away.'},
        ]
    }
]

export const Partners = [
    {
        name: "Rachel Miller",
        image: partnerImage1,
        title: "Property Owner",
        description: "Hububb has completely transformed the way I handle my rental properties. With its comprehensive suite of features, I can efficiently manage all aspects of my rental business from one platform. The corporate landlord tools make it easy to oversee multiple properties, while the ID verification and keyless entry ensure a secure and convenient experience for my tenants. Hububb is a must-have for any property owner looking to streamline their operations.",
    },
    {
        name: "Rachel Miller",
        image: partnerImage2,
        title: "Property Owner",
        description: "Hububb has completely transformed the way I handle my rental properties. With its comprehensive suite of features, I can efficiently manage all aspects of my rental business from one platform. The corporate landlord tools make it easy to oversee multiple properties, while the ID verification and keyless entry ensure a secure and convenient experience for my tenants. Hububb is a must-have for any property owner looking to streamline their operations.",
    },
    {
        name: "Rachel Miller",
        image: partnerImage3,
        title: "Property Owner",
        description: "Hububb has completely transformed the way I handle my rental properties. With its comprehensive suite of features, I can efficiently manage all aspects of my rental business from one platform. The corporate landlord tools make it easy to oversee multiple properties, while the ID verification and keyless entry ensure a secure and convenient experience for my tenants. Hububb is a must-have for any property owner looking to streamline their operations.",
    },
    {
        name: "Rachel Miller",
        image: partnerImage4,
        title: "Property Owner",
        description: "Hububb has completely transformed the way I handle my rental properties. With its comprehensive suite of features, I can efficiently manage all aspects of my rental business from one platform. The corporate landlord tools make it easy to oversee multiple properties, while the ID verification and keyless entry ensure a secure and convenient experience for my tenants. Hububb is a must-have for any property owner looking to streamline their operations.",
    },
    {
        name: "Rachel Miller",
        image: partnerImage5,
        title: "Property Owner",
        description: "Hububb has completely transformed the way I handle my rental properties. With its comprehensive suite of features, I can efficiently manage all aspects of my rental business from one platform. The corporate landlord tools make it easy to oversee multiple properties, while the ID verification and keyless entry ensure a secure and convenient experience for my tenants. Hububb is a must-have for any property owner looking to streamline their operations.",
    },
    {
        name: "Rachel Miller",
        image: partnerImage6,
        title: "Property Owner",
        description: "Hububb has completely transformed the way I handle my rental properties. With its comprehensive suite of features, I can efficiently manage all aspects of my rental business from one platform. The corporate landlord tools make it easy to oversee multiple properties, while the ID verification and keyless entry ensure a secure and convenient experience for my tenants. Hububb is a must-have for any property owner looking to streamline their operations.",
    }
]


