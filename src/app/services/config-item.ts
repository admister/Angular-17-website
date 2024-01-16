export interface ConfigItem {
    id: number;
    name: string;
    data: {
        title?: string;
        description?: string;
        detail?: string;
        url?: string;
        developer?:string;
        buttontext?: string;
        iconBlocks?: {
            id: number;
            icon: string;
            title: string;
            description: string;
        }[];
        companyBlocks?: {
            id: number;
            Image: string;
            name: string;
        }[];
        galleryBlocks?: {
            id: number;
            url: string;
            name: string;
        }[];
        pricingBlocks?: {
            id: number;
            Description: string;
            title: string;
            subTitle: string;
            currency: string;
            price: number;
            featured: boolean;
            Downloads: string;
            Extensions: string;
            Tutorials: string;
            Support: string;
            updates: string;
            buttonText: string;
        }[];
        feedbackBlock?: {
            name: string;
            userimage: string;
            comments: string;
            company: string;
        }[];
        socialBlock?: {
            id: number;
            title: string;
            target: string;
            username: string;
            url: string;
            icon: string;
        }[];
    }
}
