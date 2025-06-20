type Repository = {
    name: string;
    stargazers_count: number;
    description: string;
    owner: {
        login: string;
    };
};

type CardData = {
    username?: string;
    repositories?: Repository[];
};

export interface CardProps {
    data: CardData;
    isLoading?: boolean;
}
