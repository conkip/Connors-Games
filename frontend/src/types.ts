/*
    Author: Connor Kippes
*/
export type idName ={
    id: string;
    name:string;
}

export type PlayerScore = {
    color: string;
    totalScore: number;
    history: number[];
} & idName;

export type Board = {
    players: PlayerScore[];
} & idName;

export type UserPreferences = {
    boards: Board[];
    presetPlayers: PlayerScore[];
};

export type User = {
    username: string;
    password: string; // hashed password
    preferences: UserPreferences;
} & idName;

export type PixiesCard = {
    imgPath: string,
    color:string,
    value: number,
    swirlCount: number,
    xCount: number,
}


/*
    mongoDB or mySQL for the database

    USER DATA:

    message (login to save board and player preferences!)

    form:
    firstname:
    lastname:
    username: (say email recommended in the textbox)
    password:

    message (dont worry, your stuff)
    
    _id: unique id
    name: string   (made of first name and last name)
    username: unique username
    password: hashed password

    preferences: json
    
    {
    }
    
*/
